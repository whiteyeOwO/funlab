import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";  // Import SCSS module
import { useEffect } from 'react';

export default function Navbar() {

    useEffect(() => {
        // 確保能正確選中元素
        const hamburgerButton = document.querySelector(`.${styles.hamburger}`);
        const navigationMenu = document.querySelector(`.${styles.navigation}`);
        const svgIcon = hamburgerButton?.querySelector('svg');

        // 漢堡按鈕點擊處理
        const handleClick = () => {
            svgIcon.classList.toggle('active'); // 切換 svg active 樣式
            navigationMenu.classList.toggle('show'); // 切換 navigation show 樣式
        };

        // 綁定事件
        hamburgerButton.addEventListener('click', handleClick);

        // 清理事件
        return () => {
            hamburgerButton.removeEventListener('click', handleClick);
        };
    }, []); // 空依賴數組，確保只在組件掛載時運行


return (
    <div id="topBar" className={styles.topBar}>
        <div className={styles.logo}>
            <img src="/images/funlogoText.svg" alt="Logo" />
        </div>


        <div className={styles.navbar}>
            {/* 漢堡按鈕  */}
            <button className={styles.hamburger} >
                <svg className="Rotate" viewBox="0 0 100 100" width="80" onclick={() => $('.Rotate').find('svg').toggleClass('active')}>
                    <path className="line top"
                        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                    <path className="line middle" d="m 30,50 h 40" />
                    <path className="line bottom"
                        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                </svg>
            </button>

            <div className={styles.navigation}>
                <div className={styles.menu}>
                    <Link className={styles.a_about} to="/about">ABOUT</Link>
                    <Link className={styles.a_menu} to="/menu">MENU</Link>
                    <Link className={styles.a_fresh} to="/ingred">FRESH</Link>
                    <Link className={styles.a_store} to="/store">STORE</Link>
                    <Link className={styles.a_search} to="/search">SEARCH</Link>
                </div>
                <div className={styles.funLab}>
                    <img src="/images/funLogo.svg" alt="FUNLAB" />
                    <p>FUNLAB</p>
                </div>
            </div>
        </div>
    </div>
);
}
