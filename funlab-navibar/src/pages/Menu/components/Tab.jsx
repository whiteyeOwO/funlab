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
                                        碧螺春&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        金萱&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        煎茶&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        東方美人&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        四季春&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        舞鶴&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        椰薩歐蕾&emsp; &ensp; <span>$65</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        烏波歐蕾&emsp; &ensp; <span>$55</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        芋遇金萱&emsp; &ensp; <span>$65</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        粿玉歐蕾&emsp; &ensp; <span>$60</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        凍蘭燕奶&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        珍珠豆舞奶&emsp; &ensp; <span>$55</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        仙農奶&emsp; &ensp; <span>$50</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    滑嫩Ｑ談的仙草凍，隨著濃乳香滑入口中
                                </p>
                            </div>
                            {/*3Q紅玉 */}
                            <div className="product" title="3Q">
                                <div className="drinkImage">
                                    <img src="./images/menu/toppings/3Q.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        3Q紅玉&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    一杯同時喝到3種口感，滿足喜歡配料的朋友
                                </p>
                            </div>
                            {/*凍美歐蕾 */}
                            <div className="product" title="donmei">
                                <div className="drinkImage">
                                    <img src="./images/menu/toppings/yeahsa.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        凍美歐蕾&emsp; &ensp; <span>$55</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    溫潤東方美人茶香和鮮奶交融的小步舞曲
                                </p>
                            </div>
                        </div>
                    </div>
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
                                        紅玉歐蕾&emsp; &ensp; <span>$50</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    濃郁紅玉茶融合香滑牛奶，茶香甘醇中帶有奶香的圓潤口感
                                </p>
                            </div>

                            {/* 美人歐蕾  */}
                            <div className="product" title="beauty">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/beauty.webp" />
                                </div>


                                <div className="drinkText">
                                    <h2>
                                        美人歐蕾&emsp; &ensp; <span>$55</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    東方美人的蜂蜜茶韻與奶香結合，甜潤清香令人沉醉
                                </p>
                            </div>

                            {/* 金萱歐蕾  */}
                            <div className="product" title="goldo">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/goldo.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        金萱歐蕾&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    金萱茶的奶香韻味與牛奶完美契合，香醇滑順，回味悠長
                                </p>
                            </div>
                            {/* 玉露歐蕾  */}
                            <div className="product" title="yuru">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/yuru.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        玉露歐蕾&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    細膩玉露茶香與牛奶交融，低調清甜，口感細緻
                                </p>
                            </div>
                            {/* 四季歐蕾  */}
                            <div className="product" title="seasono">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/seasono.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        四季歐蕾&emsp; &ensp; <span>$40</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    四季春的清新雅緻，搭配柔滑牛奶，輕盈卻不失層次感
                                </p>
                            </div>
                            {/* 舞鶴歐蕾  */}
                            <div className="product" title="wuheo">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/wuheo.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        舞鶴歐蕾&emsp; &ensp; <span>$60</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    舞鶴地區特產的高雅茶韻與牛奶融合，濃郁中帶著絲絲甘甜
                                </p>
                            </div>
                            {/* 碧螺春歐蕾  */}
                            <div className="product" title="birouchuno">
                                <div className="drinkImage">
                                    <img src="./images/menu/milktea/birouchuno.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        碧螺春歐蕾&emsp; &ensp; <span>$60</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    碧螺春的清新茶香與牛奶相輔相成，風味平衡
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
                                        紅燕奶&emsp; &ensp; <span>$55</span>
                                    </h2>
                                    <div className="under"></div>
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
                                        烏燕奶&emsp; &ensp; <span>$45</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    烏龍茶的淡雅回甘與燕麥奶的柔和融合
                                </p>
                            </div>

                            {/*金燕奶 */}
                            <div className="product" title="goldyen">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/goldyen.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        金燕奶&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    金萱茶的奶香搭配燕麥奶，清新中保有絲滑甜美
                                </p>
                            </div>
                            {/*嘻嘻麥來 */}
                            <div className="product" title="mairai">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/mairai.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        嘻嘻麥來&emsp; &ensp; <span>$50</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    濃郁茶香與滑順燕麥奶，可說是經典不敗組合
                                </p>
                            </div>
                            {/*豆薩奶 */}
                            <div className="product" title="dosa">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/dosa.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        豆薩奶&emsp; &ensp; <span>$45</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    阿薩姆的濃厚香氣融入豆漿，茶香與豆香完美平衡
                                </p>
                            </div>
                            {/*豆好鶴 */}
                            <div className="product" title="dohowhe">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/dohowhe.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        豆好鶴&emsp; &ensp; <span>$60</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    唯有豆漿才能帶出舞鶴紅茶專屬的高雅茶韻
                                </p>
                            </div>
                            {/*豆趣雙享 */}
                            <div className="product" title="dochu">
                                <div className="drinkImage">
                                    <img src="./images/menu/plantmilk/dochu.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        豆趣雙享&emsp; &ensp; <span>$55</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    誰能想到豆花與豆漿，竟能夠同時喝到香濃又綿密的口感
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "fruitteaDrink" && (
                    <div id="fruitteaDrink" className="listbox active">
                        <div className="productlist">
                            {/*蜜凍珍珠奶 */}
                            <div className="product" title="蜜凍珍珠奶">
                                <div className="drinkImage">
                                    <img src="./images/menu/juice/蜜凍珍珠奶.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        蜜凍珍珠奶&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    在鮮嫩蜜桃的香氣中品味珍珠，一起徜徉在鮮奶茶的美好
                                </p>
                            </div>

                            {/*珍愛百香綠 */}
                            <div className="product" title="passion">
                                <div className="drinkImage">
                                    <img src="./images/menu/juice/珍愛百香綠.webp" />
                                </div>


                                <div className="drinkText">
                                    <h2>
                                        珍愛百香綠&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    清爽綠茶搭配香甜百香果與Q彈珍珠，酸甜口感令人回味無窮
                                </p>
                            </div>

                            {/*粉Q檸檬四季春 */}
                            <div className="product" title="qlemon">
                                <div className="drinkImage">
                                    <img src="./images/menu/juice/粉Q檸檬四季春.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        粉Q檸檬四季春&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    四季春茶香融合檸檬酸甜與滑嫩粉粿，夏日解渴首選
                                </p>
                            </div>
                            {/*椰果葡香烏龍 */}
                            <div className="product" title="orient">
                                <div className="drinkImage">
                                    <img src="./images/menu/juice/椰果葡香烏龍.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        椰果葡香烏龍&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    濃郁烏龍茶襯托葡萄果香，椰果添口感，完美清新組合
                                </p>
                            </div>
                            {/*莓果杏仁綠 */}
                            <div className="product" title="season">
                                <div className="drinkImage">
                                    <img src="./images/menu/juice/莓果杏仁綠.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        莓果杏仁綠&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    綠茶清香搭配蔓越莓酸甜，杏仁凍滑嫩細膩，滋味層次豐富
                                </p>
                            </div>
                            {/*酸梅沁青 */}
                            <div className="product" title="wuhe">
                                <div className="drinkImage">
                                    <img src="./images/menu/juice/酸梅沁青.webp" />
                                </div>
                                <div className="drinkText">
                                    <h2>
                                        酸梅沁青&emsp; &ensp; <span>$35</span>
                                    </h2>
                                    <div className="under"></div>
                                </div>
                                <p className="drinkInfo">
                                    青茶甘醇融合梅肉酸鹹滋味，獨特風味帶來驚喜享受
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
