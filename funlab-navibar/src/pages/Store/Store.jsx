import './store.scss';
import GSReveal from '../../component/GSReveal';
import { useEffect } from 'react';





function Store() {

    useEffect(() => {
        // 按鈕切換
        const buttons = document.querySelectorAll(".tab-btn"); // 获取所有按钮
        const contentBoxes = document.querySelectorAll(".listbox"); // 获取所有内容区域

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                // 清除所有按钮和内容区域的激活状态
                buttons.forEach(btn => btn.classList.remove("active"));
                contentBoxes.forEach(box => {
                    box.classList.remove("active"); // 移除所有内容区域的 active 类
                    box.style.display = "none"; // 隐藏所有内容区域
                });

                // 为当前按钮添加激活状态
                button.classList.add("active");

                // 获取按钮的 data-target 属性，并获取对应的内容区域
                const targetId = button.getAttribute("data-target");
                const targetContent = document.getElementById(targetId);

                // 设置内容区域为可见，并重置动画
                targetContent.style.display = "flex"; // 先显示
                targetContent.style.opacity = "0"; // 初始透明度为0
                targetContent.style.transform = "translateY(40px)"; // 初始向下偏移

                // 延迟触发动画
                setTimeout(() => {
                    targetContent.classList.add("active"); // 添加 active 类来触发动画
                    targetContent.style.transition = "opacity 0.4s ease-out, transform 0.4s ease-out"; // 設定 transition 為 ease-in
                    targetContent.style.opacity = "1"; // 设置透明度为1
                    targetContent.style.transform = "translateY(0)"; // 位置恢复
                }, 200); // 加入微小延迟，确保动画能正确触发
            });
        });

    }, []);

    return (
        <>
            {/* 主要內容 */}
            <main>
                {/* banner */}
                <div id="banner">
                    <img src="images/store/store-banner.jpg" alt="店家概念照" title="店家概念照" />
                </div>

                {/* 標題 */}
                <div>
                    <GSReveal from='top'>
                        <h1 className="gs_reveal gs_reveal_fromTop">STORE</h1>
                    </GSReveal>
                </div>

                {/* 店家地區分類 */}
                <div className="shopListTab">
                    <ul>
                        <li><a className="tab-btn active" data-target="North">北部</a></li>
                        <li><a className="tab-btn" data-target="Central">中部</a></li>
                        <li><a className="tab-btn" data-target="South">南部</a></li>
                        <li><a className="tab-btn" data-target="East">東部</a></li>
                    </ul>
                </div>


                {/* 分店區塊
                {/* 北部區 */}
                <div id="North" className="listbox active">

                    <div className="card" >

                        <a href="https://www.google.com/maps/search/台北北商店" target="_blank">
                            <figure>
                                <img src="images/store/store1.jpg" alt="門市照片" title="門市照片" />
                            </figure>
                            <div className="gotomap">
                                <p>前往地圖</p>
                            </div>
                        </a>

                        <div className="content-text">
                            <h3>台北北商店
                            </h3>
                            <div className="paragraph">
                                <img src="images/icon/icon-phone.svg" alt="" id="content-image1" />
                                <p>02-12345678

                                </p>
                            </div>
                            <div className="paragraph">
                                <img src="images/icon/icon-address.svg" alt="" id="content-image2" />
                                <p>新北市板橋區中山路一段101號</p>
                            </div>
                        </div>

                    </div>

                    <div className="card ">
                        <a href="https://www.google.com/maps/search/台北北商店" target="_blank">
                            <figure>
                                <img src="images/store/store2.jpg" alt="門市照片" title="門市照片" />
                            </figure>
                            <div className="gotomap">
                                <p>前往地圖</p>
                            </div>
                        </a>

                        <div className="content-text">
                            <h3>新北市板橋店
                            </h3>
                            <div className="paragraph">
                                <img src="images/icon/icon-phone.svg" alt="" id="content-image1" />
                                <p>02-22334455

                                </p>
                            </div>
                            <div className="paragraph">
                                <img src="images/icon/icon-address.svg" alt="" id="content-image2" />
                                <p>新北市板橋區中山路一段101號</p>
                            </div>
                        </div>
                    </div>

                    <div className="card ">
                        <a href="https://www.google.com/maps/search/台北北商店" target="_blank">
                            <figure>
                                <img src="images/store/store3.webp" alt="門市照片" title="門市照片" />
                            </figure>
                            <div className="gotomap">
                                <p>前往地圖</p>
                            </div>
                        </a>

                        <div className="content-text">
                            <h3>台北市信義店</h3>
                            <div className="paragraph">
                                <img src="images/icon/icon-phone.svg" alt="" id="content-image1" />
                                <p>02-12345678</p>
                            </div>
                            <div className="paragraph">
                                <img src="images/icon/icon-address.svg" alt="" id="content-image2" />
                                <p>台北市信義區忠孝東路五段68號</p>
                            </div>
                        </div>
                    </div>



                    {/* 裝飾素材 */}
                    <figure className="graph-1"><GSReveal><img src="images/icon/graph-blueBall.svg" alt="" /></GSReveal></figure>
                    <figure className="graph-2"><img src="/images/icon/graph-bubleTwo.svg" alt="" /></figure>
                    <figure className="graph-3"><GSReveal><img src="images/icon/graph-yellowLine.svg" alt="" /></GSReveal></figure>
                    <figure className="graph-4"><img src="images/icon/graph-blueLine.svg" alt="" /></figure>

                </div>

                {/* 中部區 */}
                <div id="Central" className="listbox">

                    <div className="card ">
                        <a href="https://www.google.com/maps/search/台北北商店" target="_blank">
                            <figure>
                                <img src="images/store/store4.jpg" alt="門市照片" title="門市照片" />
                            </figure>
                            <div className="gotomap">
                                <p>前往地圖</p>
                            </div>
                        </a>

                        <div className="content-text">
                            <h3>台中市逢甲店</h3>
                            <div className="paragraph">
                                <img src="images/icon/icon-phone.svg" alt="" id="content-image1" />
                                <p>04-33225566</p>
                            </div>
                            <div className="paragraph">
                                <img src="images/icon/icon-address.svg" alt="" id="content-image2" />
                                <p>台中市西屯區逢甲路20號</p>
                            </div>
                        </div>
                    </div>

                    <div className="card ">
                        <a href="https://www.google.com/maps/search/台北北商店" target="_blank">
                            <figure>
                                <img src="images/store/store5.jpg" alt="門市照片" title="門市照片" />
                            </figure>
                            <div className="gotomap">
                                <p>前往地圖</p>
                            </div>
                        </a>

                        <div className="content-text">
                            <h3>台中市草悟道店</h3>
                            <div className="paragraph">
                                <img src="images/icon/icon-phone.svg" alt="" id="content-image1" />
                                <p>04-55667788</p>
                            </div>
                            <div className="paragraph">
                                <img src="images/icon/icon-address.svg" alt="" id="content-image2" />
                                <p>台中市西區美村路一段99號</p>
                            </div>
                        </div>
                    </div>

                    {/* 裝飾素材 */}
                    <figure className="graph-1"><GSReveal><img src="images/icon/graph-blueBall.svg" alt="" /></GSReveal></figure>
                    <figure className="graph-2"><img src="/images/icon/graph-bubleTwo.svg" alt="" /></figure>
                    <figure className="graph-3"><GSReveal><img src="images/icon/graph-yellowLine.svg" alt="" /></GSReveal></figure>
                    <figure className="graph-4"><img src="images/icon/graph-blueLine.svg" alt="" /></figure>

                </div>


                {/* 南部區 */}
                <div id="South" className="listbox">
                    <div className="card ">
                        <a href="https://www.google.com/maps/search/台北北商店" target="_blank">
                            <figure>
                                <img src="images/store/store6.jpg" alt="門市照片" title="門市照片" />
                            </figure>
                            <div className="gotomap">
                                <p>前往地圖</p>
                            </div>
                        </a>

                        <div className="content-text">
                            <h3>台南市東安店</h3>
                            <div className="paragraph">
                                <img src="images/icon/icon-phone.svg" alt="" id="content-image1" />
                                <p>06-33445566</p>
                            </div>
                            <div className="paragraph">
                                <img src="images/icon/icon-address.svg" alt="" id="content-image2" />
                                <p>台南市東區安平路33號</p>
                            </div>
                        </div>
                    </div>

                    <div className="card ">
                        <a href="https://www.google.com/maps/search/台北北商店" target="_blank">
                            <figure>
                                <img src="images/store/store7.webp" alt="門市照片" title="門市照片" />
                            </figure>
                            <div className="gotomap">
                                <p>前往地圖</p>
                            </div>
                        </a>

                        <div className="content-text">
                            <h3>高雄市夢時代店</h3>
                            <div className="paragraph">
                                <img src="images/icon/icon-phone.svg" alt="" id="content-image1" />
                                <p>07-98765432</p>
                            </div>
                            <div className="paragraph">
                                <img src="images/icon/icon-address.svg" alt="" id="content-image2" />
                                <p>高雄市前鎮區中華五路789號</p>
                            </div>
                        </div>
                    </div>



                    {/* 裝飾素材 */}
                    <figure className="graph-1"><GSReveal><img src="images/icon/graph-blueBall.svg" alt="" /></GSReveal></figure>
                    <figure className="graph-2"><img src="/images/icon/graph-bubleTwo.svg" alt="" /></figure>
                    <figure className="graph-3"><GSReveal><img src="images/icon/graph-yellowLine.svg" alt="" /></GSReveal></figure>
                    <figure className="graph-4"><img src="images/icon/graph-blueLine.svg" alt="" /></figure>
                </div>

                {/* 東部區 */}
                <div id="East" className="listbox">
                    <div className="card ">
                        <a href="https://www.google.com/maps/search/台北北商店" target="_blank">
                            <figure>
                                <img src="images/store/store8.jpg" alt="門市照片" title="門市照片" />
                            </figure>
                            <div className="gotomap">
                                <p>前往地圖</p>
                            </div>
                        </a>

                        <div className="content-text">
                            <h3>花蓮市中山店</h3>
                            <div className="paragraph">
                                <img src="images/icon/icon-phone.svg" alt="" id="content-image1" />
                                <p>03-83334455</p>
                            </div>
                            <div className="paragraph">
                                <img src="images/icon/icon-address.svg" alt="" id="content-image2" />
                                <p>花蓮市中山路120號</p>
                            </div>
                        </div>
                    </div>

                    {/* 裝飾素材 */}
                    <figure className="graph-1"><GSReveal><img src="images/icon/graph-blueBall.svg" alt="" /></GSReveal></figure>
                    <figure className="graph-2"><img src="/images/icon/graph-bubleTwo.svg" alt="" /></figure>
                    <figure className="graph-3"><GSReveal><img src="images/icon/graph-yellowLine.svg" alt="" /></GSReveal></figure>
                    <figure className="graph-4"><img src="images/icon/graph-blueLine.svg" alt="" /></figure>
                </div>

            </main>

            
        {/* 頁尾區 */}
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
                        <p>PEIVACY POLICY</p>
                    </li>
                    <li>
                        <p>放飲 FUN LAB</p>
                        <p>100台北市中正區濟南路一段321號</p>
                        <p>TEL 02-3535-3466</p>
                    </li>
                    <li className="iconFooter">
                        <img src="./images/icon/icon-line.svg" alt="" />
                        <img src="./images/icon/icon-ig.svg" alt="" />
                    </li>
                    <li>
                        <p>©2024 放飲, All Rights Reserved</p>
                    </li>
                </ul>
            </div>
        </footer>
        </>
    )
}

export default Store
