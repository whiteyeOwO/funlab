import { useState, useEffect, useRef } from "react";
import { teaItems, milkItems, fruitItems, toppingItems } from './assets/data/items';
import html2canvas from 'html2canvas';
import OrderDetails from './assets/components/OrderDetails';
import ActionArea from './assets/components/ActionArea';
import DrinkDisplay from './assets/components/DrinkDisplay';
import ControlPanel from './assets/components/ControlPanel';
import "./assets/scss/style.scss";

function DIY() {
    // 基础状态
    const [currentTab, setCurrentTab] = useState('tea');
    const [iceLevel, setIceLevel] = useState(0);
    const [sugarLevel, setSugarLevel] = useState(0);
    const [isHoneyActive, setIsHoneyActive] = useState(false);
    const [isHotActive, setIsHotActive] = useState(false);
    const [inputName, setInputName] = useState('放飲特調');
    const snapPoints = [0, 25, 50, 75, 100];
    const [isFlashing, setIsFlashing] = useState(false);
    const [showOrderConfirm, setShowOrderConfirm] = useState(false);
    const [drinkScreenshot, setDrinkScreenshot] = useState(null);
    const drinkRef = useRef(null);
    const orderDownloadRef = useRef(null);
    const [showShareArea, setShowShareArea] = useState(false);
    const [showOrderDataArea, setShowOrderDataArea] = useState(false);
    const [showOrderSuccess, setShowOrderSuccess] = useState(false);


    // 订单相关状态
    const [selectedTea, setSelectedTea] = useState(null);
    const [selectedMilk, setSelectedMilk] = useState(null);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const sugarLevels = {
        0: '無糖',
        25: '微糖',
        50: '半糖',
        75: '少糖',
        100: '全糖'
    };

    const iceLevels = {
        0: '完全去冰',
        25: '去冰',
        50: '微冰',
        75: '少冰',
        100: '正常冰'
    };

    // 饮料显示相关状态
    const [liquidGradient, setLiquidGradient] = useState('linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))');
    // 處理冰度變化，包含吸附效果
    // 處理冰度變化
    const handleIceChange = (value) => {
        const currentValue = parseInt(value);
        setIceLevel(currentValue);
    };

    // 處理冰度吸附
    const handleIceChangeEnd = () => {
        const closestPoint = snapPoints.reduce((prev, curr) => {
            return (Math.abs(curr - iceLevel) < Math.abs(prev - iceLevel) ? curr : prev);
        });
        setIceLevel(closestPoint);
    };

    // 處理糖度變化
    const handleSugarChange = (value) => {
        const currentValue = parseInt(value);
        setSugarLevel(currentValue);
    };

    // 處理糖度吸附
    const handleSugarChangeEnd = () => {
        const closestPoint = snapPoints.reduce((prev, curr) => {
            return (Math.abs(curr - sugarLevel) < Math.abs(prev - sugarLevel) ? curr : prev);
        });
        setSugarLevel(closestPoint);
    };
    // 处理商品选择
    const handleItemSelect = (item, category) => {
        switch (category) {
            case 'tea':
                setSelectedTea(item);
                updateLiquidColor(item.color, selectedMilk?.color);
                break;
            case 'milk':
                setSelectedMilk(item);
                updateLiquidColor(selectedTea?.color, item.color);
                break;
            case 'topping':
            case 'fruit':
                handleToppingSelect(item);
                break;
            default:
                break;
        }
    };

    // 处理配料选择
    const handleToppingSelect = (item) => {
        setSelectedToppings(prev => {
            const exists = prev.find(t => t.id === item.id);
            if (exists) {
                return prev.filter(t => t.id !== item.id);
            }
            if (prev.length >= 3) {
                return prev;
            }
            return [...prev, item];
        });
    };

    // 更新液体颜色
    const updateLiquidColor = (teaColor, milkColor) => {
        if (!teaColor && !milkColor) {
            setLiquidGradient('linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))');
        } else if (!milkColor) {
            setLiquidGradient(`linear-gradient(to top, ${teaColor}, ${teaColor})`);
        } else if (!teaColor) {
            setLiquidGradient(`linear-gradient(to top, ${milkColor}, ${milkColor})`);
        } else {
            setLiquidGradient(`linear-gradient(to top, ${milkColor}, ${teaColor})`);
        }
    };

    // 重置功能
    const handleReset = () => {
        setSelectedTea(null);
        setSelectedMilk(null);
        setSelectedToppings([]);
        setIceLevel(0);
        setSugarLevel(0);
        setIsHoneyActive(false);
        setIsHotActive(false);
        setInputName('放飲特調');
        setLiquidGradient('linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))');
    };

    // 随机功能
    const handleRandom = () => {
        const randomTea = teaItems[Math.floor(Math.random() * teaItems.length)];
        const randomMilk = Math.random() > 0.5 ? milkItems[Math.floor(Math.random() * milkItems.length)] : null;
        const availableToppings = [...toppingItems, ...fruitItems];
        const randomToppingsCount = Math.floor(Math.random() * 3);
        const randomToppings = [];

        for (let i = 0; i < randomToppingsCount; i++) {
            const randomIndex = Math.floor(Math.random() * availableToppings.length);
            randomToppings.push(availableToppings[randomIndex]);
            availableToppings.splice(randomIndex, 1);
        }

        setSelectedTea(randomTea);
        setSelectedMilk(randomMilk);
        setSelectedToppings(randomToppings);
        setIceLevel(Math.random() > 0.2 ? Math.floor(Math.random() * 5) * 25 : 0);
        setSugarLevel(Math.floor(Math.random() * 5) * 25);
        setIsHoneyActive(Math.random() > 0.8);
        setIsHotActive(Math.random() > 0.8);

        updateLiquidColor(randomTea?.color, randomMilk?.color);
    };
    // 处理 Done 按钮点击事件
    const handleDoneClick = async () => {
        // 触发闪光效果
        setIsFlashing(true);

        // 等待所有圖片加載完成
        const images = document.querySelectorAll('#showDrink img');
        await Promise.all([...images].map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve;
            });
        }));

        try {
            if (!drinkRef.current) {
                console.error('Cannot find drink element');
                return;
            }

            // 添加截圖模式
            drinkRef.current.classList.add('screenshot-mode');

            // 等待樣式應用
            await new Promise(resolve => setTimeout(resolve, 100));

            const canvas = await html2canvas(drinkRef.current, {
                backgroundColor: null,
                scale: 5,
                logging: true,
                useCORS: true,
                allowTaint: true
            });

            const screenshotUrl = canvas.toDataURL('image/png');
            setDrinkScreenshot(screenshotUrl);

            setTimeout(() => {
                setIsFlashing(false);
                setShowOrderConfirm(true);
            }, 600);
        } catch (error) {
            console.error('Screenshot failed:', error);
        }
        finally {
            // 移除截圖模式
            drinkRef.current?.classList.remove('screenshot-mode');
        }
    };

    const createDrinkDetail = () => {
        const parts = [];

        if (selectedTea) {
            parts.push(selectedTea.name);
        }

        if (selectedMilk) {
            parts.push(selectedMilk.name);
        }

        selectedToppings.forEach(topping => {
            parts.push(topping.name);
        });

        // 使用 sugarLevels 對象
        const sugarText = isHoneyActive ? '蜂蜜' : sugarLevels[sugarLevel];
        parts.push(sugarText);

        // 使用 iceLevels 對象
        const iceText = isHotActive ? '熱飲' : iceLevels[iceLevel];
        parts.push(iceText);

        return parts.join('+');
    };

    const drinkDetail = createDrinkDetail();

    // 添加下載處理函數
    const handleDownload = async () => {
        try {
            if (!orderDownloadRef.current) {
                console.error('Cannot find order download element');
                return;
            }

            const canvas = await html2canvas(orderDownloadRef.current, {
                backgroundColor: null,
                scale: 5, // 提高解析度
                logging: false,
                useCORS: true,
                allowTaint: true,
                width: orderDownloadRef.current.offsetWidth, // 設置固定寬度
                height: orderDownloadRef.current.offsetHeight, // 設置固定高度
                windowWidth: orderDownloadRef.current.offsetWidth,
                windowHeight: orderDownloadRef.current.offsetHeight
            });

            // 創建下載連結
            const link = document.createElement('a');
            link.download = `${inputName}.png`;
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    const handleShareClick = () => {
        setShowOrderConfirm(false);
        setShowShareArea(true);
    };

    const handleOrderClick = () => {
        setShowOrderConfirm(false);
        setShowOrderDataArea(true);
    };

    const handleBackClick = () => {
        setShowShareArea(false);
        setShowOrderDataArea(false);
        setShowOrderConfirm(true);
    };

    const handleCloseClick = () => {
        setShowOrderConfirm(false);
        setShowShareArea(false);
        setShowOrderDataArea(false);
        setShowOrderSuccess(false);
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            setShowOrderDataArea(false);
            setShowOrderSuccess(true);
        } else {
            alert('請填寫所有欄位');
        }
    };
    // 添加表單驗證狀態
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        storeChoose: '', // 改為 storeChoose
        pay: ''  
    });

    // 處理表單輸入
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 驗證表單
    const isFormValid = () => {
        return formData.username.trim() !== '' &&
            formData.phone.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.storeChoose !== '' &&
            formData.pay !== '';
    };

    // 更新总价
    useEffect(() => {
        document.querySelectorAll('.carousel').forEach(carousel => {
            carousel.style.display = 'none';
        });

        // 顯示當前標籤對應的輪播
        const currentCarousel = document.querySelector(`.carousel${currentTab === 'tea' ? '1' :
            currentTab === 'milk' ? '2' :
                currentTab === 'fruit' ? '3' : '4'
            }`);
        if (currentCarousel) {
            currentCarousel.style.display = 'block';
        }
        const teaPrice = selectedTea?.price || 0;
        const milkPrice = selectedMilk?.price || 0;
        const toppingsPrice = selectedToppings.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(teaPrice + milkPrice + toppingsPrice);
    }, [selectedTea, selectedMilk, selectedToppings, currentTab]);

    return (
        <main>
            <section id='DIY' className={isFlashing ? 'flash' : ''}>
                <img className="bg" src="images/DIY/gridbackground.svg" alt="" />
                <section id="panel">
                    <img className="bg" src="images/DIY/bluebackground.svg" alt="" />

                    <ControlPanel
                        iceLevel={iceLevel}
                        sugarLevel={sugarLevel}
                        isHoneyActive={isHoneyActive}
                        isHotActive={isHotActive}
                        handleIceChange={handleIceChange}
                        handleIceChangeEnd={handleIceChangeEnd}
                        handleSugarChange={handleSugarChange}
                        handleSugarChangeEnd={handleSugarChangeEnd}
                        setIsHoneyActive={setIsHoneyActive}
                        setIsHotActive={setIsHotActive}
                    />

                    <DrinkDisplay
                        ref={drinkRef}
                        liquidGradient={liquidGradient}
                        selectedToppings={selectedToppings}
                    />

                    <OrderDetails
                        orderDetails={{
                            tea: selectedTea,
                            milk: selectedMilk,
                            toppings: selectedToppings,
                            iceLevel,
                            sugarLevel,
                            isHoney: isHoneyActive,
                            isHot: isHotActive
                        }}
                        totalPrice={totalPrice}
                        inputName={inputName}
                        setInputName={setInputName}
                        onReset={handleReset}
                        onRandom={handleRandom}
                        onDoneClick={handleDoneClick}
                    />
                </section>

                <ActionArea
                    onItemSelect={handleItemSelect}
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    teaItems={teaItems}
                    milkItems={milkItems}
                    fruitItems={fruitItems}
                    toppingItems={toppingItems}
                />
            </section>
            <section id='orderConfirm' className={showOrderConfirm ? 'show' : ''}>
                <div className='orderDownload' ref={orderDownloadRef}>
                    <div className='drinkScreenshot'>
                        {drinkScreenshot && (
                            <img
                                src={drinkScreenshot}
                                alt="飲料截圖"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    transform: 'translateY(-120px) scale(1.5)', // 放大圖片
                                    transformOrigin: 'center center'
                                }}
                            />
                        )}
                    </div>
                    <div className='drinkText'>
                        <h2 className='drinkName'>{inputName}
                        </h2>
                        <p className='drinkDetail'>{drinkDetail}
                        </p>
                    </div>
                </div>
                <div className='orderDownloadBtn'>
                    <button className='downloadBtn' onClick={handleDownload}>下載你的手搖</button>
                </div>
                <div className='closeBtn'>
                    <button className='closeBtn' onClick={handleCloseClick}>
                        <img src="images/icon/icon-close.svg" alt="" />
                    </button>
                </div>
                <div className='shareBtn'>
                    <button className='shareBtn' onClick={handleShareClick}>
                        <img src="images/icon/icon-share.svg" alt="" />
                    </button>
                </div>
                <div className='orderBtn'>
                    <button className='orderBtn' onClick={handleOrderClick}>
                        <img src="images/icon/icon-order.svg" alt="" />
                    </button>
                </div>
            </section>
            <section id='shareArea' className={showShareArea ? 'show' : ''}>
                <div className='sharePanel'>
                    <div className='drinkAlign'>
                        <div className='drinkScreenshot'>
                            {drinkScreenshot && (
                                <img
                                    src={drinkScreenshot}
                                    alt="飲料截圖"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        transform: 'translateY(-80px) scale(2)' // 放大圖片
                                    }}
                                />
                            )}
                        </div>
                        <div className='drinkText'>
                            <h2 className='drinkName'>{inputName}
                            </h2>
                            <p className='drinkDetail'>{drinkDetail}
                            </p>
                        </div>
                    </div>
                    <p className='shareBigText'>快將結果分享至</p>
                    <div className='shareBtnDetail'>
                        <div className='fbBtn'>
                            <a href="https://zh-tw.facebook.com/"><img src="images/icon/icon-fb-share.svg" alt="" /></a>
                        </div>
                        <div className='igBtn'>
                            <a href="https://www.instagram.com/"><img src="images/icon/icon-ig-share.svg" alt="" /></a>
                        </div>
                        <div className='XBtn'>
                            <a href="https://x.com/"><img src="images/icon/icon-X-share.svg" alt="" /></a>
                        </div>
                        <div className='threadBtn'>
                            <a href="https://threads.net/"><img src="images/icon/icon-thread-share.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className='closeBtn'>
                    <button className='closeBtn' onClick={handleCloseClick}>
                        <img src="images/icon/icon-close.svg" alt="" />
                    </button>
                </div>
                <div className='backBtn'>
                    <button className='backBtn' onClick={handleBackClick}>
                        <img src="images/icon/icon-back.svg" alt="" />
                    </button>
                </div>
            </section>
            <section id='orderDataArea' className={showOrderDataArea ? 'show' : ''}>
                <div className='orderPanel'>
                    <div className='drinkAlign'>
                        <div className='drinkScreenshot'>
                            {drinkScreenshot && (
                                <img
                                    src={drinkScreenshot}
                                    alt="飲料截圖"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        transform: 'translateY(-80px) scale(2)' // 放大圖片
                                    }}
                                />
                            )}
                        </div>
                        <div className='drinkText'>
                            <h2 className='drinkName'>{inputName}
                            </h2>
                            <p className='drinkDetail'>{drinkDetail}
                            </p>
                        </div>
                    </div>
                    <div className='orderForm'>
                        <div className='orderFormItem'>
                            <label htmlFor="username">姓名</label>
                            <input type="text" name="username" id="username" title="姓名" placeholder="請輸入姓名" value={formData.username} required onChange={handleFormChange}/>
                        </div>
                        <div className='orderFormItem'>
                            <label htmlFor="phone">手機</label>
                            <input type="tel" name="phone" id="phone" title="手機" placeholder="0912-345678" value={formData.phone} required  onChange={handleFormChange}/>
                        </div>
                        <div className='orderFormItem'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" title="email" placeholder="123@gmail.com" value={formData.email} required onChange={handleFormChange}/>
                        </div>
                        <div className='orderFormItem'>
                            <label htmlFor="storeChoose">門市</label>
                            <select name="storeChoose" id="storeChoose" value={formData.storeChoose} required onChange={handleFormChange}>
                                <option value="">請選擇</option>

                                <optgroup label="北部">
                                    <option value="台北北商店">台北北商店</option>
                                    <option value="新北市板橋店">新北市板橋店</option>
                                    <option value="台北市信義店">台北市信義店</option>
                                </optgroup>

                                <optgroup label="中部">
                                    <option value="台中市逢甲店">台中市逢甲店</option>
                                    <option value="台中市草悟道店">台中市草悟道店</option>
                                </optgroup>
                                <optgroup label="南部">
                                    <option value="台南市東安店">台南市東安店</option>
                                    <option value="高雄市夢時代店">高雄市夢時代店</option>
                                </optgroup>
                                <optgroup label="東部">
                                    <option value="花蓮市中山店">花蓮市中山店</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className='orderFormItem'>
                            <label htmlFor="pay">付款方式</label>
                            <select name="pay" id="pay" value={formData.pay} required onChange={handleFormChange}>
                                <option value="">請選擇</option>
                                <option value="現金">現金</option>
                            </select>
                        </div>
                        <input className={`submitBtn ${isFormValid() ? 'active' : 'disabled'}`} type="submit" name="submitBtn" id="submitBtn" value="送出" onClick={handleSubmitClick} disabled={!isFormValid()}/>
                    </div>
                </div>
                <div className='closeBtn'>
                    <button className='closeBtn' onClick={handleCloseClick}>
                        <img src="images/icon/icon-close.svg" alt="" />
                    </button>
                </div>
                <div className='backBtn'>
                    <button className='backBtn' onClick={handleBackClick}>
                        <img src="images/icon/icon-back.svg" alt="" />
                    </button>
                </div>
            </section>
            <section id='orderSuccess' className={showOrderSuccess ? 'show' : ''}>
                <div className='orderSuccessPanel'>
                    <img src="images/DIY/orderSuccess.svg" alt="" />
                    <div className='orderSuccessText'>
                        <h3 className='title'>送出成功</h3>
                        <p className='text'>取單編號</p>
                    </div>
                    <p className='orderNumber'>313286</p>
                    <div className='orderTrackBtn'>
                        <a href="/search">訂單追蹤</a>
                    </div>
                </div>
                <div className='closeBtn'>
                    <button className='closeBtn' onClick={handleCloseClick}>
                        <img src="images/icon/icon-close.svg" alt="" />
                    </button>
                </div>
                <div className='reminderText'>
                    <p>記得截圖取單編號</p>
                </div>
            </section>
        </main>
    );
}

export default DIY;