import './css/about.css'
import $ from 'jquery';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'
import { useEffect } from 'react';


gsap.registerPlugin(ScrollTrigger);


function App() {

  // 動畫與隱藏的函數
  function animateFrom(elem, direction = 1) {
    let x = 0, y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100; y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100; y = 0;
    } else if (elem.classList.contains("gs_reveal_fromTop")) {
      x = 0; y = -100;
    } else if (elem.classList.contains("gs_reveal_fromBottom")) {
      x = 0; y = 100;
    }
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = "0";

    gsap.fromTo(elem, { x, y, autoAlpha: 0 }, {
      duration: 5,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }
  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }


  useEffect(() => {
    gsap.utils.toArray(".gs_reveal").forEach((elem) => {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter: () => animateFrom(elem),
        onEnterBack: () => animateFrom(elem, -1),
        onLeave: () => hide(elem)
      });
    });

    // 漢堡按鈕
    const handleClick = () => {
      $('.hamburger').find('svg').toggleClass('active');
      $('.navigation').toggleClass('show');
    };

    // 綁定事件
    $('.hamburger').on('click', handleClick);

    // 在 useEffect 清理階段中移除事件綁定
    return () => {
      $('.hamburger').off('click', handleClick);
    };

  }, []);




  return (
    <>
      {/* 頁首區 */}
      <header id="topBar">
        {/* logo區 */}
        <h1 className="logo">
          <a href="./index.html">
            <img src="images/funlogoText.svg" alt="fun飲LOGO" title="fun飲LOGO" />
          </a>
        </h1>
        <div className="navbar">
          {/* 漢堡按鈕  */}
          <button className="hamburger">
            <svg className="Rotate" viewBox="0 0 100 100" width="80" onclick="this.classNameList.toggle('active')">
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
              <li><a className="a_story" href="">STORY</a></li>
              <li><a className="a_menu" href="">MENU</a></li>
              <li><a className="a_fresh" href="">FRESH</a></li>
              <li><a className="a_store" href="">STORE</a></li>
              <li><a className="a_search" href="">SEARCH</a></li>
            </ul>
            <ul>
              <a href="" className="funLab">
                <li><img src="images/funLogo.svg" alt="fun飲LOGONav" /></li>
                <li>FUN LAB</li>
              </a>
            </ul>
          </nav>
        </div>
      </header>

      {/* BANNER區 */}
      <section id="banner">
        <div className="title gs_reveal gs_reveal_fromTop">
          <h1 className="ch">放飲</h1>
          <h1 className="en">ABOUT</h1>
        </div>
        <figure><img src="./images/about/about-banner.webp" alt="" />
        </figure>
      </section>


      {/* about區 */}
      <section id="about">
        <div className="item">
          <div className="content">
            <h2 className="gs_reveal gs_reveal_fromLeft">「靈感隨手搖，創意放手喝！」</h2>
            <p>在放飲 Lab，我們不僅提供飲料，更帶來一場與靈感的碰撞。每一杯都是一次創作，每一口都是驚喜。我們希望將飲料變成日常生活中的快樂創作，讓每個人都能透過飲品，表達自己，分享趣味。
              無論是隨興放鬆還是熱鬧聚會，放飲 Lab 都是你不可或缺的陪伴者。</p>
            <figure className="circleImage "><img src="./images/about/about1.webp" alt="" /></figure>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-content">
            <p>ABOUT US ABOUT US ABOUT US</p>
          </div>
          <div className="marquee-content2">
            <p>ABOUT US ABOUT US ABOUT US</p>
          </div>
        </div>

        <figure className="whiteBack"><img src="./images/about/about-background.svg" alt="" /></figure>

        {/* 裝飾 */}
        <figure className="graph-1 gs_reveal"><img src="./images/icon/graph-pinkLine.svg" alt="" /></figure>
        <figure className="graph-2 gs_reveal"><img src="./images/icon/graph-blueBall.svg" alt="" /></figure>
      </section>

      {/* about2區 */}
      <section id="about2">

        <div className="item gs_reveal gs_reveal_fromLeft">
          <div className="content1">
            <h3>「經營理念」</h3>
            <p>放飲
              Lab，成立於2024年，是一個致力於創意手搖飲體驗的新生代品牌。我們將「自由創作」融入飲品文化，讓每位顧客都能探索飲料的無限可能，創造屬於自己的專屬滋味。讓飲料不僅是解渴的選擇，更是生活中充滿驚喜與分享的體驗！
            </p>
          </div>
          <figure className="photo1"><img src="./images/about/about3.webp" alt="" /></figure>
        </div>
        <div className="item gs_reveal gs_reveal_fromLeft">
          <figure className="photo2"><img src="./images/about/about2.jpg" alt="" /></figure>
          <div className="content2">
            <h3>「企業願景」</h3>
            <p>「成為全球最具創意的飲品品牌，讓每一杯都訴說你的故事！」
              放飲 Lab 以創新為核心，重新定義手搖文化。我們的願景是成為一個能激發靈感的品牌，透過飲品打造更多互動與分享的機會。</p>
          </div>
        </div>


        {/* 裝飾圖 */}
        <figure className="graph-3 gs_reveal"><img src="./images/icon/graph-buble.svg" alt="" /></figure>
        <figure className="graph-4 gs_reveal"><img src="./images/icon/graph-buble.svg" alt="" /></figure>
        <figure className="graph-5 "><img src="./images/icon/graph-yellowLine.svg" alt="" /></figure>
        <figure className="graph-6 "><img src="./images/icon/graph-blueLine.svg" alt="" /></figure>
      </section>


      {/* 頁尾區 */}
      <footer id="footer">
        <div class="logoFooter">
          <img class="logoFooterImg" src="./images/funLogo.svg" alt="fun飲LOGONav" />
          <img class="logoFooterText" src="./images/funLogoText2.svg" alt="fun飲LOGO" title="fun飲LOGO" />
        </div>
        <div class="articleFooter">
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
            <li class="iconFooter">
              <img src="./images/icon/icon-line.svg" alt="" />
              <img src="./images/icon/icon-ig.svg" alt="" />
            </li>
          </ul>
          <p>©2024 放飲, All Rights Reserved</p>
        </div>



      </footer>
    </>
  )
}

export default App
