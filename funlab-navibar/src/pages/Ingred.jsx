import React, { useState } from "react";
import GSReveal from "../component/GSReveal";

import GoTopFunction from "./ingred/components/GoTopFunction";
import BubbleAnimation from "./ingred/components/BubbleAnimation";

import "./ingred/css/ingred.min.css"; // 我自己的樣式

const Ingred = () => {

    // 各區域大圖的狀態
    // 變數型態 [state變數名稱, setState函式名稱] = useState(state變數初始值)
    const [teaBigImage, setTeaBigImage] = useState("../../public/images/Ingredients/tea/big-Assam.jpg");
    const [milkBigImage, setMilkBigImage] = useState("../../public/images/Ingredients/milk/big-milk.jpg");
    const [fruitBigImage, setFruitBigImage] = useState("../../public/images/Ingredients/fruit/big-lemon.jpg");
    const [toppingBigImage, setToppingBigImage] = useState("../../public/images/Ingredients/topping/big-boba.jpg");

    // 茶的資料清單
    const teas = [
        {
            smallImg: "../../public/images/Ingredients/tea/small-Assam.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-Assam.jpg",
            title: "阿薩姆紅茶",
            desc: "帶天然麥芽香，茶色深紅，適合搭配鮮奶。",
        },
        {
            smallImg: "../../public/images/Ingredients/tea/small-RubyBlackTea.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-RubyBlackTea.jpg",
            title: "紅玉紅茶",
            desc: "帶薄荷與肉桂香，紅茶中的精品，滋味層次豐富。",
        },
        {
            smallImg: "../../public/images/Ingredients/tea/small-CeylonBlackTea.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-CeylonBlackTea.jpg",
            title: "錫蘭紅茶",
            desc: "帶柑橘香氣，口感清爽甘甜，風味清新怡人。",
        },
        {
            smallImg: "../../public/images/Ingredients/tea/small-HoneyBlackTea.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-HoneyBlackTea.jpg",
            title: "舞鶴紅茶",
            desc: "香氣馥郁，入口甘醇細膩，餘韻悠長。",
        },
        {
            smallImg: "../../public/images/Ingredients/tea/small-Oolongtea.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-Oolongtea.jpg",
            title: "烏龍茶",
            desc: "香氣濃郁，茶湯金黃透亮，入口回甘。",
        },
        {
            smallImg: "../../public/images/Ingredients/tea/small-OrientalBeautyTea.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-OrientalBeautyTea.jpg",
            title: "東方美人茶",
            desc: "蜜果香濃郁，茶湯琥珀色澤，口感甘醇。",
        },
        {
            smallImg: "../../public/images/Ingredients/tea/small-Sijichun.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-Sijichun.jpg",
            title: "四季春",
            desc: "香氣清雅、花香濃郁，滋味清爽甘醇。",
        },
        {
            smallImg: "../../public/images/Ingredients/tea/small-JinXuanTea.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-JinXuanTea.jpg",
            title: "金萱",
            desc: "滑順奶香濃郁茶湯甘甜圓潤，適合冷泡。",
        },
        {
            smallImg: "../../public/images/Ingredients/tea/small-Gyokuro.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-Gyokuro.jpg",
            title: "玉露",
            desc: "帶海藻與草本香氣，茶湯翠綠，滋味鮮甜醇厚。",
        },
        {
            smallImg: "../../public/images/Ingredients/tea/small-Sencha.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-Sencha.jpg",
            title: "煎茶",
            desc: "帶草香與花香，清新鮮甜，茶湯清澈。",
        },
        {
            smallImg: "../../public/images/Ingredients/tea/small-BiLooChun.jpg",
            bigImg: "../../public/images/Ingredients/tea/big-BiLooChun.jpg",
            title: "碧螺春",
            desc: "鮮爽回甘，茶湯清澈翠綠，帶花果香氣，綠茶中的上乘佳品。",
        },
    ];

    // 奶的資料清單
    const milks = [
        {
            smallImg: "../../public/images/Ingredients/milk/small-milk.jpg",
            bigImg: "../../public/images/Ingredients/milk/big-milk.jpg",
            title: "小農鮮奶",
            desc: "屏東回鄉青年友善畜牧，每日清晨直送。",
        },
        {
            smallImg: "../../public/images/Ingredients/milk/small-soy.jpg",
            bigImg: "../../public/images/Ingredients/milk/big-soy.jpg",
            title: "豆漿",
            desc: "每天新鮮現製，自然的豆香與純正口感。",
        },
        {
            smallImg: "../../public/images/Ingredients/milk/small-oat.jpg",
            bigImg: "../../public/images/Ingredients/milk/big-oat.jpg",
            title: "燕麥奶",
            desc: "來自有機燕麥，細膩滑順，富含纖維與營養。",
        },
        {
            smallImg: "../../public/images/Ingredients/milk/small-nuts.jpg",
            bigImg: "../../public/images/Ingredients/milk/big-nuts.jpg",
            title: "堅果奶",
            desc: "精選優質堅果，堅果香濃郁，滿滿能量與滋養。",
        },
    ];

    // 果的資料清單
    const fruits = [
        {
            smallImg: "../../public/images/Ingredients/fruit/small.lemon.jpg",
            bigImg: "../../public/images/Ingredients/fruit/big-lemon.jpg",
            title: "檸檬果肉",
            desc: "屏東九如檸檬，酸香宜人，富含維他命C。",
        },
        {
            smallImg: "../../public/images/Ingredients/fruit/small-passionfruit.jpg",
            bigImg: "../../public/images/Ingredients/fruit/big-passionfruit.jpg",
            title: "百香果",
            desc: "酸甜濃郁，熱帶風味十足，為茶飲增添活力。",
        },
        {
            smallImg: "../../public/images/Ingredients/fruit/small-peach.jpg",
            bigImg: "../../public/images/Ingredients/fruit/big-peach.jpg",
            title: "蜜桃果肉",
            desc: "香甜柔和，果肉滑順，甜中帶微酸感。",
        },
        {
            smallImg: "../../public/images/Ingredients/fruit/small-berry.jpg",
            bigImg: "../../public/images/Ingredients/fruit/big-berry.jpg",
            title: "蔓越莓粒",
            desc: "酸甜中帶微澀，點綴茶飲同時帶來清新果味感受。",
        },
        {
            smallImg: "../../public/images/Ingredients/fruit/small-grape.jpg",
            bigImg: "../../public/images/Ingredients/fruit/big-grape.jpg",
            title: "葡萄果肉",
            desc: "高雄六龜葡萄，果肉飽滿多汁。",
        },
        {
            smallImg: "../../public/images/Ingredients/fruit/small-plum.jpg",
            bigImg: "../../public/images/Ingredients/fruit/big-plum.jpg",
            title: "梅肉",
            desc: "酸爽美味，搭配純茶的最佳選擇。",
        },
    ];

    // 料的資料清單
    const toppings = [
        {
            smallImg: "../../public/images/Ingredients/topping/small-boba.jpg",
            bigImg: "../../public/images/Ingredients/topping/big-boba.jpg",
            title: "波霸",
            desc: "更大更Q，濃甜香氣嚼勁十足。",
        },
        {
            smallImg: "../../public/images/Ingredients/topping/small-bubble.jpg",
            bigImg: "../../public/images/Ingredients/topping/big-bubble.jpg",
            title: "珍珠",
            desc: "Q彈微甜，有嚼勁。圓潤滿足又豐富。",
        },
        {
            smallImg: "../../public/images/Ingredients/topping/small-grassjelly.jpg",
            bigImg: "../../public/images/Ingredients/topping/big-grassjelly.jpg",
            title: "仙草",
            desc: "滑嫩微涼，草香清爽解膩。",
        },
        {
            smallImg: "../../public/images/Ingredients/topping/small-cocona.jpg",
            bigImg: "../../public/images/Ingredients/topping/big-cocona.jpg",
            title: "椰果",
            desc: "口感脆嫩，彈韌有嚼勁，增添趣味口感。",
        },
        {
            smallImg: "../../public/images/Ingredients/topping/small-soypudding.jpg",
            bigImg: "../../public/images/Ingredients/topping/big-soypudding.jpg",
            title: "豆花",
            desc: "嫩滑豆香，入口即化溫暖柔順。",
        },
        {
            smallImg: "../../public/images/Ingredients/topping/small-teajelly.jpg",
            bigImg: "../../public/images/Ingredients/topping/big-teajelly.jpg",
            title: "茶凍",
            desc: "茶香濃郁，口感輕盈Q彈滑嫩不膩。",
        },
        {
            smallImg: "../../public/images/Ingredients/topping/small-almondjelly.jpg",
            bigImg: "../../public/images/Ingredients/topping/big-almondjelly.jpg",
            title: "杏仁凍",
            desc: "濃郁杏香，層次豐富，滑嫩入口即化。",
        },
        {
            smallImg: "../../public/images/Ingredients/topping/small-jellycake.jpg",
            bigImg: "../../public/images/Ingredients/topping/big-jellycake.jpg",
            title: "粉粿",
            desc: "Q彈柔軟滑順，甜而不膩，層次豐富。",
        },
        {
            smallImg: "../../public/images/Ingredients/topping/small-taro.jpg",
            bigImg: "../../public/images/Ingredients/topping/big-taro.jpg",
            title: "芋圓",
            desc: "手作Q彈芋圓，滿滿芋香。",
        },
        {
            smallImg: "../../public/images/Ingredients/topping/small-pudding.jpg",
            bigImg: "../../public/images/Ingredients/topping/big-pudding.jpg",
            title: "布丁",
            desc: "軟嫩香甜，濃郁蛋奶香口感細滑綿密，帶來滿滿幸福感。",
        },
    ];


    return (
        <>
            {/* <!-- 至頂按鈕 --> */}
            <button onClick={GoTopFunction} id="myBtn" title="Gotop"><GSReveal from="top">
                <img src=".../../public/images/Ingredients/top.svg" alt="Gototop" /></GSReveal>
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
                    <div><a href="#tea">放飲純茶</a></div>
                    <div><a href="#milk">濃醇奶類</a></div>
                    <div><a href="#fruit">鮮調果粒</a></div>
                    <div><a href="#topping">FUN新嚼感</a></div>
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
                        <figure><img src="../../public/images/Ingredients/graph-TeaCircle.png" alt="裝飾圖" /></figure>
                    </div>

                    {/* 原本的大圖區 */}
                    {/* <div className="showImg-left">
                        <figure><img src=".../../public/images/ingred/tea/big-Assam.jpg" alt="" /></figure>
                    </div>
                    <div className="decorate-left">
                        <p>茶</p>
                        <figure><img src="../../public/images/ingred/graph-TeaCircle.png" alt="" /></figure>
                    </div> */}

                    {/* 小圖列表 */}
                    {teas.map((tea, index) => (
                        <div
                            key={index}
                            className="ingredient"
                            onMouseEnter={() => setTeaBigImage(tea.bigImg)} // 滑鼠移入時更新大圖
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
                        <figure><img src="../../public/images/Ingredients/graph-MilkCircle.png" alt="裝飾圖" /></figure>
                    </div>
                </section>

                {/*水果 */}
                <section id="fruit" className="fruit">
                    {/* 原本的大圖 */}
                    {/* <div className="showImg-left">
                        <figure><img src="../../public/images/Ingredients/fruit/big-lemon.jpg" alt="" /></figure>
                    </div>
                    <div className="decorate-left">
                        <p>果</p>
                        <figure><img src="../../public/images/Ingredients/graph-FruitCircle.png" alt="" /></figure>
                    </div> */}

                    {/* 大圖區 */}
                    <div className="showImg-left">
                        <figure>
                            <img src={fruitBigImage} alt="大圖顯示" />
                        </figure>
                    </div>
                    <div className="decorate-left">
                        <p>果</p>
                        <figure><img src="../../public/images/Ingredients/graph-FruitCircle.png" alt="裝飾圖" /></figure>
                    </div>

                    {/* 小圖列表 */}
                    {fruits.map((fruit, index) => (
                        <div
                            key={index}
                            className="ingredient"
                            onMouseEnter={() => setFruitBigImage(fruit.bigImg)} // 滑鼠移入時更新大圖
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
                            <figure><img src="../../public/images/Ingredients/graph-ToppingCircle.png" alt="裝飾圖" /></figure>
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



                    {/* {toppings.map((topping, index) => (
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
                        <figure><img src="../../public/images/Ingredients/graph-ToppingCircle.png" alt="裝飾圖" /></figure>
                    </div> */}
                </section>

            </main>
            {/* <!-- 頁尾區 --> */}
            <footer id="footer">
                <div className="logoFooter">
                    <img className="logoFooterImg" src="./images/funLogo.svg" alt="fun飲LOGONav" />
                    <img className="logoFooterText" src="./images/funLogoText2.svg" alt="fun飲LOGO" title="fun飲LOGO" />
                </div>
                <div className="articleFooter">
                    <ul>
                        <li>
                            <p>CONTACT</p>
                        </li>
                        <li>
                            <p>PRIVACY POLICY</p>
                        </li>
                        <li>
                            <p>放飲 FUN LAB</p>
                            <p>100台北市中正區濟南路一段321號</p>
                            <p>TEL 02-3535-3466</p>
                        </li>
                        <li className="iconFooter">
                            <img src="./images/icon/icon-LINE.svg" alt="" />
                            <img src="./images/icon/icon-ig.svg" alt="" />
                        </li>
                        <li>
                            <p>©2024 放飲, All Rights Reserved</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Ingred;