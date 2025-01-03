import React, { useState, useEffect } from "react";
import GSReveal from "../../component/GSReveal";

import { scrollFunction, GoTopFunction } from "./components/GoTopFunction";
import BubbleAnimation from "./components/BubbleAnimation";

import "./ingred.scss";
import Footer from "../../component/Footer";

const Ingred = () => {

    // 各區域大圖的狀態
    // 變數型態 [state變數名稱, setState函式名稱] = useState(state變數初始值)
    const [teaBigImage, setTeaBigImage] = useState("images/Ingredients/tea/big-Assam.jpg");
    const [milkBigImage, setMilkBigImage] = useState("images/Ingredients/milk/big-milk.jpg");
    const [fruitBigImage, setFruitBigImage] = useState("images/Ingredients/fruit/big-lemon.jpg");
    const [toppingBigImage, setToppingBigImage] = useState("images/Ingredients/topping/big-boba.jpg");

    // 茶的資料清單
    const teas = [
        {
            smallImg: "images/Ingredients/tea/small-Assam.jpg",
            bigImg: "images/Ingredients/tea/big-Assam.jpg",
            title: "阿薩姆紅茶",
            desc: "帶天然麥芽香，茶色深紅，適合搭配鮮奶。",
        },
        {
            smallImg: "images/Ingredients/tea/small-RubyBlackTea.jpg",
            bigImg: "images/Ingredients/tea/big-RubyBlackTea.jpg",
            title: "紅玉紅茶",
            desc: "帶薄荷與肉桂香，紅茶中的精品，滋味層次豐富。",
        },
        {
            smallImg: "images/Ingredients/tea/small-CeylonBlackTea.jpg",
            bigImg: "images/Ingredients/tea/big-CeylonBlackTea.jpg",
            title: "錫蘭紅茶",
            desc: "帶柑橘香氣，口感清爽甘甜，風味清新怡人。",
        },
        {
            smallImg: "images/Ingredients/tea/small-HoneyBlackTea.jpg",
            bigImg: "images/Ingredients/tea/big-HoneyBlackTea.jpg",
            title: "舞鶴紅茶",
            desc: "香氣馥郁，入口甘醇細膩，餘韻悠長。",
        },
        {
            smallImg: "images/Ingredients/tea/small-Oolongtea.jpg",
            bigImg: "images/Ingredients/tea/big-Oolongtea.jpg",
            title: "烏龍茶",
            desc: "香氣濃郁，茶湯金黃透亮，入口回甘。",
        },
        {
            smallImg: "images/Ingredients/tea/small-OrientalBeautyTea.jpg",
            bigImg: "images/Ingredients/tea/big-OrientalBeautyTea.jpg",
            title: "東方美人茶",
            desc: "蜜果香濃郁，茶湯琥珀色澤，口感甘醇。",
        },
        {
            smallImg: "images/Ingredients/tea/small-Sijichun.jpg",
            bigImg: "images/Ingredients/tea/big-Sijichun.jpg",
            title: "四季春",
            desc: "香氣清雅、花香濃郁，滋味清爽甘醇。",
        },
        {
            smallImg: "images/Ingredients/tea/small-JinXuanTea.jpg",
            bigImg: "images/Ingredients/tea/big-JinXuanTea.jpg",
            title: "金萱",
            desc: "滑順奶香濃郁茶湯甘甜圓潤，適合冷泡。",
        },
        {
            smallImg: "images/Ingredients/tea/small-Gyokuro.jpg",
            bigImg: "images/Ingredients/tea/big-Gyokuro.jpg",
            title: "玉露",
            desc: "帶海藻與草本香氣，茶湯翠綠，滋味鮮甜醇厚。",
        },
        {
            smallImg: "images/Ingredients/tea/small-Sencha.jpg",
            bigImg: "images/Ingredients/tea/big-Sencha.jpg",
            title: "煎茶",
            desc: "帶草香與花香，清新鮮甜，茶湯清澈。",
        },
        {
            smallImg: "images/Ingredients/tea/small-BiLooChun.jpg",
            bigImg: "images/Ingredients/tea/big-BiLooChun.jpg",
            title: "碧螺春",
            desc: "鮮爽回甘，茶湯清澈翠綠，帶花果香氣，綠茶中的上乘佳品。",
        },
    ];

    // 奶的資料清單
    const milks = [
        {
            smallImg: "images/Ingredients/milk/small-milk.jpg",
            bigImg: "images/Ingredients/milk/big-milk.jpg",
            title: "小農鮮奶",
            desc: "屏東回鄉青年友善畜牧，每日清晨直送。",
        },
        {
            smallImg: "images/Ingredients/milk/small-soy.jpg",
            bigImg: "images/Ingredients/milk/big-soy.jpg",
            title: "豆漿",
            desc: "每天新鮮現製，自然的豆香與純正口感。",
        },
        {
            smallImg: "images/Ingredients/milk/small-oat.jpg",
            bigImg: "images/Ingredients/milk/big-oat.jpg",
            title: "燕麥奶",
            desc: "來自有機燕麥，細膩滑順，富含纖維與營養。",
        },
        {
            smallImg: "images/Ingredients/milk/small-nuts.jpg",
            bigImg: "images/Ingredients/milk/big-nuts.jpg",
            title: "堅果奶",
            desc: "精選優質堅果，堅果香濃郁，滿滿能量與滋養。",
        },
    ];

    // 果的資料清單
    const fruits = [
        {
            smallImg: "images/Ingredients/fruit/small.lemon.jpg",
            bigImg: "images/Ingredients/fruit/big-lemon.jpg",
            title: "檸檬果肉",
            desc: "屏東九如檸檬，酸香宜人，富含維他命C。",
        },
        {
            smallImg: "images/Ingredients/fruit/small-passionfruit.jpg",
            bigImg: "images/Ingredients/fruit/big-passionfruit.jpg",
            title: "百香果",
            desc: "酸甜濃郁，熱帶風味十足，為茶飲增添活力。",
        },
        {
            smallImg: "images/Ingredients/fruit/small-peach.jpg",
            bigImg: "images/Ingredients/fruit/big-peach.jpg",
            title: "蜜桃果肉",
            desc: "香甜柔和，果肉滑順，甜中帶微酸感。",
        },
        {
            smallImg: "images/Ingredients/fruit/small-berry.jpg",
            bigImg: "images/Ingredients/fruit/big-berry.jpg",
            title: "蔓越莓粒",
            desc: "酸甜中帶微澀，點綴茶飲同時帶來清新果味感受。",
        },
        {
            smallImg: "images/Ingredients/fruit/small-grape.jpg",
            bigImg: "images/Ingredients/fruit/big-grape.jpg",
            title: "葡萄果肉",
            desc: "高雄六龜葡萄，果肉飽滿多汁。",
        },
        {
            smallImg: "images/Ingredients/fruit/small-plum.jpg",
            bigImg: "images/Ingredients/fruit/big-plum.jpg",
            title: "梅肉",
            desc: "酸爽美味，搭配純茶的最佳選擇。",
        },
    ];

    // 料的資料清單
    const toppings = [
        {
            smallImg: "images/Ingredients/topping/small-boba.jpg",
            bigImg: "images/Ingredients/topping/big-boba.jpg",
            title: "波霸",
            desc: "更大更Q，濃甜香氣嚼勁十足。",
        },
        {
            smallImg: "images/Ingredients/topping/small-bubble.jpg",
            bigImg: "images/Ingredients/topping/big-bubble.jpg",
            title: "珍珠",
            desc: "Q彈微甜，有嚼勁。圓潤滿足又豐富。",
        },
        {
            smallImg: "images/Ingredients/topping/small-grassjelly.jpg",
            bigImg: "images/Ingredients/topping/big-grassjelly.jpg",
            title: "仙草",
            desc: "滑嫩微涼，草香清爽解膩。",
        },
        {
            smallImg: "images/Ingredients/topping/small-cocona.jpg",
            bigImg: "images/Ingredients/topping/big-cocona.jpg",
            title: "椰果",
            desc: "口感脆嫩，彈韌有嚼勁，增添趣味口感。",
        },
        {
            smallImg: "images/Ingredients/topping/small-soypudding.jpg",
            bigImg: "images/Ingredients/topping/big-soypudding.jpg",
            title: "豆花",
            desc: "嫩滑豆香，入口即化溫暖柔順。",
        },
        {
            smallImg: "images/Ingredients/topping/small-teajelly.jpg",
            bigImg: "images/Ingredients/topping/big-teajelly.jpg",
            title: "茶凍",
            desc: "茶香濃郁，口感輕盈Q彈滑嫩不膩。",
        },
        {
            smallImg: "images/Ingredients/topping/small-almondjelly.jpg",
            bigImg: "images/Ingredients/topping/big-almondjelly.jpg",
            title: "杏仁凍",
            desc: "濃郁杏香，層次豐富，滑嫩入口即化。",
        },
        {
            smallImg: "images/Ingredients/topping/small-jellycake.jpg",
            bigImg: "images/Ingredients/topping/big-jellycake.jpg",
            title: "粉粿",
            desc: "Q彈柔軟滑順，甜而不膩，層次豐富。",
        },
        {
            smallImg: "images/Ingredients/topping/small-taro.jpg",
            bigImg: "images/Ingredients/topping/big-taro.jpg",
            title: "芋圓",
            desc: "手作Q彈芋圓，滿滿芋香。",
        },
        {
            smallImg: "images/Ingredients/topping/small-pudding.jpg",
            bigImg: "images/Ingredients/topping/big-pudding.jpg",
            title: "布丁",
            desc: "軟嫩香甜，濃郁蛋奶香口感細滑綿密，帶來滿滿幸福感。",
        },
    ];

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        // 確保 DOM 已經加載完成才添加事件監聽
        window.addEventListener('scroll', scrollFunction);
        
        // 清理函數
        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);
    return (
        <>
            {/* <!-- 至頂按鈕 --> */}
            <button onClick={GoTopFunction} id="myBtn" title="Gotop"><GSReveal from="top">
                <img src="images/Ingredients/top.svg" alt="Gototop" /></GSReveal>
            </button>

            {/* 泡泡*/}
            <div className="backgroundBubble">
                <BubbleAnimation />
            </div>

            <header>
                <h1 className="page-title"> <GSReveal from="top">INGERDIENT</GSReveal> </h1>
            </header>
            {/*分組頁籤 迅速傳送到該區 */}
            <div className="drinkList">
                <div className="drinkListTab">
                    <div><a onClick={(e) => scrollToSection(e, 'tea')}>放飲純茶</a></div>
                    <div><a onClick={(e) => scrollToSection(e, 'milk')}>濃醇奶類</a></div>
                    <div><a onClick={(e) => scrollToSection(e, 'fruit')}>鮮調果粒</a></div>
                    <div><a onClick={(e) => scrollToSection(e, 'topping')}>FUN新嚼感</a></div>
                </div>
            </div>

            <main className="ingredient-list">
                {/* 純茶*/}
                <section id="tea" className="tea">

                    {/* 大圖區 */}
                    <div className="showImg-left">
                        <figure>
                            <img src={teaBigImage} alt="大圖顯示" />
                        </figure>
                    </div>
                    <div className="decorate-left">
                        <p>茶</p>
                        <figure><img src="images/Ingredients/graph-TeaCircle.png" alt="裝飾圖" /></figure>
                    </div>

                    {/* 小圖列表 */}
                    {teas.map((tea, index) => (
                        <div
                            key={index}
                            className="ingredient"
                            onMouseEnter={() => setTeaBigImage(tea.bigImg)}
                        >
                            <figure>
                                <img src={tea.smallImg} alt={tea.title} />
                            </figure>
                            <h2>{tea.title}</h2>
                            <p>{tea.desc}</p>
                        </div>
                    ))}
                </section>

                {/*奶類 */}
                <section id="milk" className="milk">

                    {milks.map((milk, index) => (
                        <div
                            key={index}
                            className="ingredient"
                            onMouseEnter={() => setMilkBigImage(milk.bigImg)}
                        >
                            <figure>
                                <img src={milk.smallImg} alt={milk.title} />
                            </figure>
                            <h2>{milk.title}</h2>
                            <p>{milk.desc}</p>
                        </div>
                    ))}

                    <div className="showImg-right">
                        <figure>
                            <img src={milkBigImage} alt="奶類大圖" />
                        </figure>
                    </div>
                    <div className="decorate-right">
                        <p>奶</p>
                        <figure><img src="images/Ingredients/graph-MilkCircle.png" alt="裝飾圖" /></figure>
                    </div>
                </section>

                {/*水果 */}
                <section id="fruit" className="fruit">

                    {/* 大圖區 */}
                    <div className="showImg-left">
                        <figure>
                            <img src={fruitBigImage} alt="大圖顯示" />
                        </figure>
                    </div>
                    <div className="decorate-left">
                        <p>果</p>
                        <figure><img src="images/Ingredients/graph-FruitCircle.png" alt="裝飾圖" /></figure>
                    </div>

                    {/* 小圖列表 */}
                    {fruits.map((fruit, index) => (
                        <div
                            key={index}
                            className="ingredient"
                            onMouseEnter={() => setFruitBigImage(fruit.bigImg)}
                        >
                            <figure>
                                <img src={fruit.smallImg} alt={fruit.title} />
                            </figure>
                            <h2>{fruit.title}</h2>
                            <p>{fruit.desc}</p>
                        </div>
                    ))}
                </section>
                {/*配料 */}
                <section id="topping" className="topping">
                    {/* 第一行：3 個 ingredient 和大圖 */}
                    <div className="top-row">
                        {toppings.slice(0, 3).map((topping, index) => (
                            <div
                                key={index}
                                className="ingredient"
                                onMouseEnter={() => setToppingBigImage(topping.bigImg)}
                            >
                                <figure>
                                    <img src={topping.smallImg} alt={topping.title} />
                                </figure>
                                <h2>{topping.title}</h2>
                                <p>{topping.desc}</p>
                            </div>
                        ))}
                        <div className="showImg-right">
                            <figure>
                                <img src={toppingBigImage} alt="配料大圖" />
                            </figure>
                        </div>
                        <div className="decorate-right">
                            <p>料</p>
                            <figure><img src="images/Ingredients/graph-ToppingCircle.png" alt="裝飾圖" /></figure>
                        </div>
                    </div>

                    {/* 後續行：每行 4 個 ingredient */}
                    <div className="bottom-rows">
                        {toppings.slice(3).map((topping, index) => (
                            <div
                                key={index + 3}
                                className="ingredient"
                                onMouseEnter={() => setToppingBigImage(topping.bigImg)}
                            >
                                <figure>
                                    <img src={topping.smallImg} alt={topping.title} />
                                </figure>
                                <h2>{topping.title}</h2>
                                <p>{topping.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <Footer />
                
            </main>
            
        </>
    );
};

export default Ingred;