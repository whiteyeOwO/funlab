import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BubbleAnimation from "./assets/components/BubbleAnimation";
import MarqueeEffect from "react-fast-marquee";
import PhotoOverlay from './assets/components/photoOverlay';
import WaveScroll from './assets/components/SmoothScrollEffect';
import GSReveal from './assets/components/GSReveal';
import MatterComponent from './assets/components/MatterComponent';
import DrinkCarousel from './assets/components/DrinkCarousel';
import Footer from '../../component/Footer';
import "./assets/scss/style.scss";

gsap.registerPlugin(ScrollTrigger);
function Index() {
    const featureOffset = window.innerHeight * 3 + 50;
    const DIYOffset = window.innerHeight * 5;

    const circleWrapperRef = useRef(null);
    const imgContainerRef = useRef(null);

    useEffect(() => {
        // 漢堡按鈕的點擊事件
        const handleClick = () => {
            const hamburger = document.querySelector('.hamburger');
            const navigation = document.querySelector('.navigation');
            if (hamburger && navigation) {
                hamburger.querySelector('svg').classList.toggle('active');
                navigation.classList.toggle('show');
            }
        };

        // 綁定事件
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.addEventListener('click', handleClick);
        }

        const circleWrapper = circleWrapperRef.current;
        const imgContainer = imgContainerRef.current;

        if (circleWrapper && imgContainer) {
            gsap.to(circleWrapper, {
                scale: 1,
                width: "100vw",
                height: "100vh",
                borderRadius: "0%",
                transformOrigin: "center center",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: imgContainer,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    pin: true,
                },
            });
        }

        // 清理事件和 ScrollTrigger
        return () => {
            if (hamburger) {
                hamburger.removeEventListener('click', handleClick);
            }
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <> 
            <nav className="subNavigation">
                <img src="images/index/Navigation bar.svg" alt="" />
                <ul className="subMenu">
                    <li><a href="#index-banner">UP</a></li>
                    <li><a href="#index-drink">MENU</a></li>
                    <li><a href="#index-Marquee">ABOUT</a></li>
                    <li><a href="#index-DIY">FUN LAB</a></li>
                    <li><a href="#footer">DOWN</a></li>
                </ul>
            </nav>

            {/* 主要內容區 */}
            <main>
                <section id="index-banner">
                    <div ref={imgContainerRef} className="img-container">
                        <div ref={circleWrapperRef} className="circle-wrapper">
                            <img className="circle-image" src="images/index/index.banner.webp" alt="" />
                        </div>
                        <div className='funlabWarp'>
                            <img className="goToFunlab" src="images/index/rotateText.svg" alt="" />
                        </div>
                        <div className="wrap">
                            <BubbleAnimation />
                        </div>
                    </div>
                </section>

                <div style={{ height: "100vh" }}></div>

                <section id="index-drink">
                    <div id="drinkContent">
                        <header className="title">
                            <h2>DRINK</h2>
                            <h3>Popularity Ranking</h3>
                        </header>
                        <div className="content">
                            <p>飲料熱門排行榜 <br /> 你喜愛的飲品有上榜嗎 ?</p>
                        </div>
                        <div className='btn'>
                            <a href="/menu">VIEW ALL</a>
                        </div>
                    </div>
                    <DrinkCarousel/>
                </section>

                <div id="index-Marquee">
                    <MarqueeEffect className="mt-24" pauseOnHover speed={80}>
                        <div className="marquee">
                            <p>放心好喝又過癮</p>
                            <img src="images/icon/graph-smile .svg" alt="" />
                            <p>放飲</p>
                            <img src="images/icon/graph-Heart.svg" alt="" />
                            <img src="images/icon/graph-Heart.svg" alt="" />
                        </div>
                        <div className="marquee">
                            <p>放心好喝又過癮</p>
                            <img src="images/icon/graph-smile .svg" alt="" />
                            <p>放飲</p>
                            <img src="images/icon/graph-Heart.svg" alt="" />
                            <img src="images/icon/graph-Heart.svg" alt="" />
                        </div>
                        <div className="marquee">
                            <p>放心好喝又過癮</p>
                            <img src="images/icon/graph-smile .svg" alt="" />
                            <p>放飲</p>
                            <img src="images/icon/graph-Heart.svg" alt="" />
                            <img src="images/icon/graph-Heart.svg" alt="" />
                        </div>
                        <div className="marquee">
                            <p>放心好喝又過癮</p>
                            <img src="images/icon/graph-smile .svg" alt="" />
                            <p>放飲</p>
                            <img src="images/icon/graph-Heart.svg" alt="" />
                            <img src="images/icon/graph-Heart.svg" alt="" />
                        </div>
                        <div className="marquee">
                            <p>放心好喝又過癮</p>
                            <img src="images/icon/graph-smile .svg" alt="" />
                            <p>放飲</p>
                            <img src="images/icon/graph-Heart.svg" alt="" />
                            <img src="images/icon/graph-Heart.svg" alt="" />
                        </div>
                    </MarqueeEffect>
                </div>

                <section id="index-feature">
                    <PhotoOverlay featureOffset={featureOffset}  debug={true} />
                    <div className="scroll-container">
                        <div className="sticky-content" >
                            <img className='graph1' src="images/icon/graph-pinkBall.svg" alt="" />
                            <img className='graph2' src="images/icon/graph-smile Two.svg" alt="" />
                            <img className='graph3' src="images/icon/graph-yellowLine.svg" alt="" />
                            <div className="text-section">
                                <div className="text-block active">
                                    <header className="title">
                                        <h2>#放飲多重選擇</h2>
                                    </header>
                                    <div className="content">
                                        <p >無論是經典風味、創意特調或清新果茶，在「放飲」菜單應盡有，我們相信每個人都應該享受屬於自己的特色飲品，最貼心的飲品服務。</p>
                                    </div>
                                    <a href="/about">
                                        <div className="aboutus">
                                            <p>ABOUT US</p>
                                            <img src="images/icon/icon-arrowPink.svg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="text-block">
                                    <header className="title">
                                        <h2>#嚴選新鮮食材</h2>
                                    </header>
                                    <div className="content">
                                        <p >堅持採用當季水果，為您獻上天然鮮甜的飲品體驗。每一杯飲品都蘊含著季節的氣息，讓每一口飲品帶您回歸自然，感受大地最純真的味道。</p>
                                    </div>
                                    <a href="/about">
                                        <div className="aboutus">
                                            <p>ABOUT US</p>
                                            <img src="images/icon/icon-arrowPink.svg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="text-block">
                                    <header className="title">
                                        <h2>#陪你度過每一品茶</h2>
                                    </header>
                                    <div className="content">
                                        <p >無論您喜歡清新的綠茶，還是偏愛香醇的紅茶，我們的茶葉就像您的好朋友，隨時陪伴您度過每一個心情，擁有特選產地和專業沖泡，釋放出最純粹的茶香。</p>
                                    </div>
                                    <a href="/about">
                                        <div className="aboutus">
                                            <p>ABOUT US</p>
                                            <img src="images/icon/icon-arrowPink.svg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="image-section">
                                    <figure className="feature1 image-stack"><img src="images/index/feature1.webp" alt="" /></figure>
                                    <figure className="feature2 image-stack"><img src="images/index/feature2.webp" alt="" /></figure>
                                    <figure className="feature3 image-stack"><img src="images/index/feature3.webp" alt="" /></figure>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div className="s" style={{ height: "300vh", position: 'relative', zIndex: -1 }}></div> */}

                <section id="index-DIY">
                    <WaveScroll DIYOffset={DIYOffset} targetSelectors={['.wave', '#DIYContent']} />
                    <img className='whiteWave' src="images/index/graph-whiteWaves.svg" alt="" />
                    <img className='wave' src="images/index/graph-waves.svg" alt="" />
                    <div id="DIYContent">
                        <header className="title">
                            <GSReveal from='top'>
                                <h2>FUN LAB</h2>
                                <h3>讓飲品變得獨一無二</h3>
                            </GSReveal>
                        </header>
                        {/* <GSReveal from='bottom'> */}
                            <img className='hotDrink1' src="images/index/hotDrink/hotDrink1.png" alt="" />
                            <img className='hotDrink2' src="images/index/hotDrink/hotDrink2.png" alt="" />
                        {/* </GSReveal> */}
                        {/* <GSReveal from='right'> */}
                            <div className="content">
                                <p>1. Make</p>
                                <img src="images/icon/icon-arrowYellow.svg" alt="" />
                                <p>2. share</p>
                                <img src="images/icon/icon-arrowYellow.svg" alt="" />
                                <p>3. drink</p>
                            </div>
                            <div className='DIYButton'>
                                <a href="/diy">製作專屬飲品</a>
                                <img src="images/funLogo.svg" alt="" />
                            </div>
                        {/* </GSReveal> */}
                    </div>

                </section>

                <section id="index-dropText">
                    <MatterComponent />
                </section>
                <Footer/>
            </main>

            {/* 頁尾區 */}
        </>
    )
}

export default Index
