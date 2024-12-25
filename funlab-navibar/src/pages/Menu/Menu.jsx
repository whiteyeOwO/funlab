import React from "react";
import Banner from "./components/Banner";
import Tab from "./components/Tab";
import styles from "./Menu.module.scss";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <h1>我是菜單</h1>
            <Banner />
            <Tab />
        </div>
    );
}
