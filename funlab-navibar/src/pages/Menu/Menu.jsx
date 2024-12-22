import React from "react";
import Tab from "./components/Tab";
import Product from "./components/Product";
import styles from "./Menu.module.scss";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <h1>我是菜單</h1>
            <Tab />
            <Product />
        </div>
    );
}
