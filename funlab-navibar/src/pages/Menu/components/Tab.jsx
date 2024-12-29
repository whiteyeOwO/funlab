import React, { useState } from "react";
import "../Menu.scss";
export default function Tab() {
    const [activeTab, setActiveTab] = useState("pureteaDrink");

    const handleTabClick = (targetId) => {
        setActiveTab(targetId);
    };

    return (
        <div className="drinkListTab">
            {/* Tab Buttons */}
            <ul>
                <li>
                    <button
                        className={`tab-btn ${activeTab === "pureteaDrink" ? "active" : ""}`}
                        onClick={() => handleTabClick("pureteaDrink")}
                        href="#"
                    >
                        放飲純茶
                    </button>
                </li>
                <li>
                    <button
                        className={`tab-btn ${activeTab === "toppingDrink" ? "active" : ""}`}
                        onClick={() => handleTabClick("toppingDrink")}
                        href="#"
                    >
                        FUN新嚼感
                    </button>
                </li>
                <li>
                    <button
                        className={`tab-btn ${activeTab === "milkDrink" ? "active" : ""}`}
                        onClick={() => handleTabClick("milkDrink")}
                        href="#"
                    >
                        濃醇鮮奶
                    </button>
                </li>
                <li>
                    <button
                        className={`tab-btn ${activeTab === "milkteaDrink" ? "active" : ""}`}
                        onClick={() => handleTabClick("milkteaDrink")}
                        href="#"
                    >
                        植物奶茶
                    </button>
                </li>
                <li>
                    <button
                        className={`tab-btn ${activeTab === "fruitteaDrink" ? "active" : ""}`}
                        onClick={() => handleTabClick("fruitteaDrink")}
                        href="#"
                    >
                        鮮調果粒
                    </button>
                </li>
            </ul>

            {/* Content Boxes */}
            <div className="content">
                {/* 放飲純茶 */}
                {activeTab === "pureteaDrink" && (
                    <div id="pureteaDrink" className="listbox active">
                        <div className="productlist">
                            {/* 碧螺春*/}
                            <div className="product" title="birouchun">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/birouchun.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        碧螺春&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    一起品味碧螺春專屬的清新雅緻的高貴茶香
                                </p>
                            </div>

                            {/* 金萱*/}
                            <div className="product" title="gold">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/gold.webp" />
                                </div>


                                <div className="drinkText">
                                    <h2>
                                        金萱&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    通透而金黃色的金萱，總能引出茶色的甜香與奶韻
                                </p>
                            </div>

                            {/* 煎茶*/}
                            <div className="product" title="japan">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/japan.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        煎茶&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    煎茶特有的深褐綠意，襯托濃厚茶韻極其沉穩本色
                                </p>
                            </div>
                            {/* 東方美人*/}
                            <div className="product" title="orient">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/orient.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        東方美人&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    溫潤的甜潤與蜂蜜香氣，非東方美人莫屬
                                </p>
                            </div>
                            {/* 四季春*/}
                            <div className="product" title="season">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/season.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        四季春&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    清新與輕巧的特殊氣息，凸顯四季春柔和的韻味
                                </p>
                            </div>
                            {/* 舞鶴*/}
                            <div className="product" title="wuhe">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/wuhe.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        舞鶴&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    深紅棕的茶色鮮明，高雅底蘊濃縮成一口精華
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "toppingDrink" && (
                    <div id="toppingDrink" className="listbox active">
                        <div className="productlist">
                            {/*椰薩歐蕾 */}
                            <div className="product" title="yeahsa">
                                <div className="drinkImage">
                                    <img src="./images/menu/toppings/yeahsa.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        椰薩歐蕾&emsp; <span>$65</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    黃金比例的阿薩姆鮮奶茶，搭配椰果嚼勁十足
                                </p>
                            </div>

                            {/*烏波歐蕾 */}
                            <div className="product" title="wupo">
                                <div className="drinkImage">
                                    <img src="./images/menu/toppings/wupo.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        烏波歐蕾&emsp; <span>$55</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    烏龍與鮮奶香氣交織，每一口都有波霸加分
                                </p>
                            </div>

                            {/*芋遇金萱 */}
                            <div className="product" title="taroyu">
                                <div className=" drinkImage">
                                    <img src="./images/menu/toppings/taroyu.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        芋遇金萱&emsp; <span>$65</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    綿密芋圓口感，更能提升金萱茶香
                                </p>
                            </div>
                            {/*粿玉歐蕾 */}
                            <div className="product" title="oyu">
                                <div className="drinkImage">
                                    <img src="./images/menu/toppings/oyu.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        粿玉歐蕾&emsp; <span>$60</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    粉粿與鮮奶綠的完美組合
                                </p>
                            </div>
                            {/*凍蘭燕奶 */}
                            <div className="product" title="donran">
                                <div className="drinkImage">
                                    <img src="./images/menu/toppings/donran.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        凍蘭燕奶&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    植物奶搭配清茶與茶凍的雙重享受
                                </p>
                            </div>
                            {/*珍珠豆舞奶 */}
                            <div className="product" title="bobado">
                                <div className="drinkImage">
                                    <img src="./images/menu/toppings/bobado.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        珍珠豆舞奶&emsp; <span>$55</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    豆漿紅茶加珍珠的經典重現
                                </p>
                            </div>
                            {/*仙農奶 */}
                            <div className="product" title="shenlong">
                                <div className="drinkImage">
                                    <img src="./images/menu/toppings/shenlong.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        仙農奶&emsp; <span>$50</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    仙農奶仙農奶仙農奶仙農奶仙農奶仙農奶仙農奶仙農奶仙農奶仙農奶仙農奶仙農奶仙農奶
                                </p>
                            </div>
                            {/*3Q紅玉 */}
                            <div className="product" title="3Q">
                                <div className="drinkImage">
                                    <img src="./images/menu/toppings/3Q.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        3Q紅玉&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    3Q紅玉3Q紅玉3Q紅玉3Q紅玉3Q紅玉3Q紅玉3Q紅玉3Q紅玉
                                </p>
                            </div>
                            {/*凍美歐蕾 */}
                            <div className="product" title="donmei">
                                <div className="drinkImage">
                                    <img src="./images/menu/toppings/yeahsa.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        凍美歐蕾&emsp; <span>$55</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    凍美歐蕾凍美歐蕾凍美歐蕾凍美歐蕾凍美歐蕾凍美歐蕾
                                </p>
                            </div>
                        </div>                    </div>
                )}
                {activeTab === "milkDrink" && (
                    <div id="milkDrink" className="listbox active">
                        <div className="productlist">
                            {/* 紅玉歐蕾  */}
                            <div className="product" title="redjadeo">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/redjadeo.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        紅玉歐蕾&emsp; <span>$50</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    紅玉歐蕾紅玉歐蕾紅玉歐蕾紅玉歐蕾紅玉歐蕾紅玉歐蕾
                                </p>
                            </div>

                            {/* 美人歐蕾  */}
                            <div className="product" title="beauty">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/beauty.webp" />
                                </div>


                                <div className="drinkText">
                                    <h2>
                                        美人歐蕾&emsp; <span>$55</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    美人歐蕾美人歐蕾美人歐蕾美人歐蕾美人歐蕾美人歐蕾
                                </p>
                            </div>

                            {/* 金萱歐蕾  */}
                            <div className="product" title="goldo">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/goldo.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        金萱歐蕾&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    金萱歐蕾金萱歐蕾金萱歐蕾金萱歐蕾金萱歐蕾金萱歐蕾
                                </p>
                            </div>
                            {/* 玉露歐蕾  */}
                            <div className="product" title="yuru">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/yuru.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        玉露歐蕾&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    玉露歐蕾玉露歐蕾玉露歐蕾玉露歐蕾玉露歐蕾玉露歐蕾
                                </p>
                            </div>
                            {/* 四季歐蕾  */}
                            <div className="product" title="seasono">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/seasono.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        四季歐蕾&emsp; <span>$40</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    四季歐蕾四季歐蕾四季歐蕾四季歐蕾四季歐蕾
                                </p>
                            </div>
                            {/* 舞鶴歐蕾  */}
                            <div className="product" title="wuheo">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/wuheo.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        舞鶴歐蕾&emsp; <span>$60</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    舞鶴歐蕾舞鶴歐蕾舞鶴歐蕾舞鶴歐蕾舞鶴歐蕾
                                </p>
                            </div>
                            {/* 碧螺春歐蕾  */}
                            <div className="product" title="birouchuno">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/birouchuno.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        碧螺春歐蕾&emsp; <span>$60</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    碧螺春歐蕾碧螺春歐蕾碧螺春歐蕾碧螺春歐蕾碧螺春歐蕾
                                </p>
                            </div>

                        </div>
                    </div>
                )}
                {activeTab === "milkteaDrink" && (
                    <div id="milkteaDrink" className="listbox active">
                        <div className="productlist">
                            {/*紅燕奶 */}
                            <div className="product" title="redyen">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/redyen.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        紅燕奶&emsp; <span>$55</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    紅玉搭配100%燕麥奶，香甜紅玉茶香與燕麥交織的美好
                                </p>
                            </div>

                            {/*烏燕奶 */}
                            <div className="product" title="wuyen">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/wuyen.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        烏燕奶&emsp; <span>$45</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    烏燕奶烏燕奶烏燕奶烏燕奶烏燕奶烏燕奶
                                </p>
                            </div>

                            {/*金燕奶 */}
                            <div className="product" title="goldyen">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/goldyen.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        金燕奶&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    金燕奶金燕奶金燕奶金燕奶金燕奶金燕奶
                                </p>
                            </div>
                            {/*嘻嘻麥來 */}
                            <div className="product" title="mairai">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/mairai.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        嘻嘻麥來&emsp; <span>$50</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    嘻嘻麥來嘻嘻麥來嘻嘻麥來嘻嘻麥來
                                </p>
                            </div>
                            {/*豆薩奶 */}
                            <div className="product" title="dosa">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/dosa.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        豆薩奶&emsp; <span>$45</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    豆薩奶豆薩奶豆薩奶豆薩奶豆薩奶豆薩奶
                                </p>
                            </div>
                            {/*豆好鶴 */}
                            <div className="product" title="dohowhe">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/dohowhe.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        豆好鶴&emsp; <span>$60</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    豆好鶴豆好鶴豆好鶴豆好鶴豆好鶴
                                </p>
                            </div>
                            {/*豆趣雙享 */}
                            <div className="product" title="dochu">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/dochu.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        豆趣雙享&emsp; <span>$55</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    豆趣雙享豆趣雙享豆趣雙享豆趣雙享豆趣雙享
                                </p>
                            </div>
                        </div>                    </div>
                )}
                {activeTab === "fruitteaDrink" && (
                    <div id="fruitteaDrink" className="listbox active">
                        <div className="productlist">
                            {/*蜜凍珍珠奶 */}
                            <div className="product" title="birouchun">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/birouchun.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        蜜凍珍珠奶&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    碧螺春碧螺春碧螺春碧螺春碧螺春碧螺春
                                </p>
                            </div>

                            {/*珍愛百香綠 */}
                            <div className="product" title="passion">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/gold.webp" />
                                </div>


                                <div className="drinkText">
                                    <h2>
                                        珍愛百香綠&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    金萱金萱金萱金萱金萱金萱金萱金萱金萱金萱金萱金萱金萱金萱金萱金萱
                                </p>
                            </div>

                            {/*粉Q檸檬四季春 */}
                            <div className="product" title="qlemon">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/japan.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        粉Q檸檬四季春&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    煎茶煎茶煎茶煎茶煎茶煎茶煎茶煎茶煎茶煎茶
                                </p>
                            </div>
                            {/*椰果葡香烏龍 */}
                            <div className="product" title="orient">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/orient.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        椰果葡香烏龍&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    東方美人東方美人東方美人東方美人東方美人
                                </p>
                            </div>
                            {/*莓果杏仁綠 */}
                            <div className="product" title="season">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/season.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        莓果杏仁綠&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    四季春四季春四季春四季春四季春四季春四季春四季春四季春
                                </p>
                            </div>
                            {/*酸梅沁青 */}
                            <div className="product" title="wuhe">
                                <div className="drinkImage">
                                    <img src="./images/menu/puretea/wuhe.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        酸梅沁青&emsp; <span>$35</span>
                                    </h2>
                                </div>
                                <p className="drinkInfo">
                                    舞鶴舞鶴舞鶴舞鶴舞鶴舞鶴
                                </p>
                            </div>
                        </div>                    </div>
                )}
            </div>
        </div>
    );
}
