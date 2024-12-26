import React from "react";
import Banner from "./components/Banner";
import Tab from "./components/Tab";
import styles from "./Menu.module.scss";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className="h"></div>
            <Banner /> 
            <img src="../public/images/menu/menu.svg" id="menuLogo" alt="menu logo" />

            <Tab />
        </div>
    );
}
