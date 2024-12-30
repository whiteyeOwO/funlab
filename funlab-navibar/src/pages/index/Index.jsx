import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BubbleAnimation from "./assets/components/BubbleAnimation";
import MarqueeEffect from "react-fast-marquee";
import $ from 'jquery';
import PhotoOverlay from './assets/components/photoOverlay';
import WaveScroll from './assets/components/SmoothScrollEffect';
import GSReveal from './assets/components/GSReveal';
import MatterComponent from './assets/components/MatterComponent';
import DrinkCarousel from './assets/components/DrinkCarousel';
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
                scale: 6,
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
            {/* 頁首區 */}
            <header id="topBar">
                {/* logo區 */}
                <h1 className="logo">
                    <a href="./index.html">
                        {/* svg預設會自動寬度100% */}
                        <img src="../public/images/funlogoText.svg" alt="fun飲LOGO" title="fun飲LOGO" />
                    </a>
                </h1>
                <div className="navbar">
                    {/* 漢堡按鈕 */}
                    <button className="hamburger">
                        <svg className="Rotate" viewBox="0 0 100 100" width="80" onClick={() => $('.Rotate').find('svg').toggleClass('active')}>
                            <path className="line top"
                                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                            <path className="line middle" d="m 30,50 h 40" />
                            <path className="line bottom"
                                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                        </svg>

                    </button>
                    {/* 導覽列 */}
                    <nav className="navigation">
                        {/* 主選單 */}
                        <ul className="menu">
                            <li><a className="a_about" href="">ABOUT</a></li>
                            <li><a className="a_menu" href="">MENU</a></li>
                            <li><a className="a_fresh" href="">FRESH</a></li>
                            <li><a className="a_store" href="">STORE</a></li>
                            <li><a className="a_search" href="">SEARCH</a></li>
                        </ul>
                        <ul>
                            <a href="" className="funLab">
                                <li><img src="../public/images/funLogo.svg" alt="fun飲LOGONav" /></li>
                                <li>FUN LAB</li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </header>

            <nav className="subNavigation">
                <img src="../public/images/index/Navigation bar.svg" alt="" />
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
                            <img className="circle-image" src="../public/images/index/index.banner.webp" alt="" />
                        </div>
                        <div className='funlabWarp'>
                            <img className="goToFunlab" src="../public/images/index/rotateText.svg" alt="" />
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
                            <a href="">VIEW ALL</a>
                        </div>
                    </div>
                    <DrinkCarousel/>
                </section>

                <div id="index-Marquee">
                    <MarqueeEffect className="mt-24" pauseOnHover speed={80}>
                        <div className="marquee">
                            <p>放心好喝又過癮</p>
                            <img src="../public/images/icon/graph-smile .svg" alt="" />
                            <p>放飲</p>
                            <img src="../public/images/icon/graph-Heart.svg" alt="" />
                            <img src="../public/images/icon/graph-Heart.svg" alt="" />
                        </div>
                        <div className="marquee">
                            <p>放心好喝又過癮</p>
                            <img src="../public/images/icon/graph-smile .svg" alt="" />
                            <p>放飲</p>
                            <img src="../public/images/icon/graph-Heart.svg" alt="" />
                            <img src="../public/images/icon/graph-Heart.svg" alt="" />
                        </div>
                        <div className="marquee">
                            <p>放心好喝又過癮</p>
                            <img src="../public/images/icon/graph-smile .svg" alt="" />
                            <p>放飲</p>
                            <img src="../public/images/icon/graph-Heart.svg" alt="" />
                            <img src="../public/images/icon/graph-Heart.svg" alt="" />
                        </div>
                        <div className="marquee">
                            <p>放心好喝又過癮</p>
                            <img src="../public/images/icon/graph-smile .svg" alt="" />
                            <p>放飲</p>
                            <img src="../public/images/icon/graph-Heart.svg" alt="" />
                            <img src="../public/images/icon/graph-Heart.svg" alt="" />
                        </div>
                        <div className="marquee">
                            <p>放心好喝又過癮</p>
                            <img src="../public/images/icon/graph-smile .svg" alt="" />
                            <p>放飲</p>
                            <img src="../public/images/icon/graph-Heart.svg" alt="" />
                            <img src="../public/images/icon/graph-Heart.svg" alt="" />
                        </div>
                    </MarqueeEffect>
                </div>

                <section id="index-feature">
                    <PhotoOverlay featureOffset={featureOffset} />
                    <img className='graph1' src="../public/images/icon/graph-pinkBall.svg" alt="" />
                    <img className='graph2' src="../public/images/icon/graph-smile Two.svg" alt="" />
                    <img className='graph3' src="../public/images/icon/graph-yellowLine.svg" alt="" />
                    <div className="scroll-container">
                        <div className="sticky-content" >
                            <div className="text-section">
                                <div className="text-block active">
                                    <header className="title">
                                        <h2>#放飲多重選擇</h2>
                                    </header>
                                    <div className="content">
                                        <p >無論是經典風味、創意特調或清新果茶，在「放飲」菜單應盡有，我們相信每個人都應該享受屬於自己的特色飲品，最貼心的飲品服務。</p>
                                    </div>
                                    <a href="">
                                        <div className="aboutus">
                                            <p>ABOUT US</p>
                                            <img src="../public/images/icon/icon-arrowPink.svg" alt="" />
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
                                    <a href="">
                                        <div className="aboutus">
                                            <p>ABOUT US</p>
                                            <img src="../public/images/icon/icon-arrowPink.svg" alt="" />
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
                                    <a href="">
                                        <div className="aboutus">
                                            <p>ABOUT US</p>
                                            <img src="../public/images/icon/icon-arrowPink.svg" alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="image-section">
                                    <figure className="feature1 image-stack"><img src="../public/images/index/feature1.webp" alt="" /></figure>
                                    <figure className="feature2 image-stack"><img src="../public/images/index/feature2.webp" alt="" /></figure>
                                    <figure className="feature3 image-stack"><img src="../public/images/index/feature3.webp" alt="" /></figure>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="s" style={{ height: "300vh", position: 'relative', zIndex: -1 }}></div>

                <section id="index-DIY">
                    <WaveScroll DIYOffset={DIYOffset} targetSelectors={['.wave', '#DIYContent']} />
                    <img className='whiteWave' src="../public/images/index/graph-whiteWaves.svg" alt="" />
                    <img className='wave' src="../public/images/index/graph-waves.svg" alt="" />
                    <div id="DIYContent">
                        <header className="title">
                            <GSReveal from='top'>
                                <h2>FUN LAB</h2>
                                <h3>讓飲品變得獨一無二</h3>
                            </GSReveal>
                        </header>
                        <GSReveal from='bottom'>
                            <img className='hotDrink1' src="../public/images/index/hotDrink/hotDrink1.png" alt="" />
                            <img className='hotDrink2' src="../public/images/index/hotDrink/hotDrink2.png" alt="" />
                        </GSReveal>
                        <GSReveal from='right'>
                            <div className="content">
                                <p>1. Make</p>
                                <img src="../public/images/icon/icon-arrowYellow.svg" alt="" />
                                <p>2. share</p>
                                <img src="../public/images/icon/icon-arrowYellow.svg" alt="" />
                                <p>3. drink</p>
                            </div>
                            <div className='DIYButton'>
                                <a href="">製作專屬飲品</a>
                                <img src="../public/images/funLogo.svg" alt="" />
                            </div>
                        </GSReveal>
                    </div>

                </section>

                <section id="index-dropText">
                    <MatterComponent />
                </section>
            </main>

            {/* 頁尾區 */}
            <footer id="footer">
                <div className="logoFooter">
                    <img className="logoFooterImg" src="../public/images/funLogo.svg" alt="fun飲LOGONav" />
                    <img className="logoFooterText" src="../public/images/funLogoText2.svg" alt="fun飲LOGO" title="fun飲LOGO" />
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
                            <img src="../public/images/icon/icon-ig.svg" alt="" />
                            <img src="../public/images/icon/icon-LINE.svg" alt="" />
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

export default Index
