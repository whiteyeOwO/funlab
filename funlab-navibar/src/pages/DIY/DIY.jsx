import { useState, useEffect } from 'react';
import { teaItems, milkItems, fruitItems, toppingItems } from './assets/data/items';
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

    // 订单相关状态
    const [selectedTea, setSelectedTea] = useState(null);
    const [selectedMilk, setSelectedMilk] = useState(null);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

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

    // 更新总价
    useEffect(() => {
        document.querySelectorAll('.carousel').forEach(carousel => {
            carousel.style.display = 'none';
        });
        
        // 顯示當前標籤對應的輪播
        const currentCarousel = document.querySelector(`.carousel${
            currentTab === 'tea' ? '1' : 
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
    }, [selectedTea, selectedMilk, selectedToppings,currentTab]);

    return (
        <main>
            <img className="bg" src="/images/DIY/gridbackground.svg" alt="" />
            <section id="panel">
                <img className="bg" src="/images/DIY/bluebackground.svg" alt="" />

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
        </main>
    );
}

export default DIY;