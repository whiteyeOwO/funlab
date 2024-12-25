import React, { useState } from "react";
import styles from "./Tab.module.scss";
export default function Tab() {
    const [activeTab, setActiveTab] = useState("pureteaDrink");

    // Handles tab click to update activeTab state
    const handleTabClick = (targetId) => {
        setActiveTab(targetId);
    };

    return (
        <div className="drinkListTab">
            {/* Tab Buttons */}
            <ul>
                <li>
                    <a
                        className={`tab-btn ${activeTab === "pureteaDrink" ? "active" : ""}`}
                        onClick={() => handleTabClick("pureteaDrink")}
                        href="#"
                    >
                        放飲純茶
                    </a>
                </li>
                <li>
                    <a
                        className={`tab-btn ${activeTab === "toppingDrink" ? "active" : ""}`}
                        onClick={() => handleTabClick("toppingDrink")}
                        href="#"
                    >
                        FUN新嚼感
                    </a>
                </li>
                <li>
                    <a
                        className={`tab-btn ${activeTab === "milkDrink" ? "active" : ""}`}
                        onClick={() => handleTabClick("milkDrink")}
                        href="#"
                    >
                        濃醇鮮奶
                    </a>
                </li>
                <li>
                    <a
                        className={`tab-btn ${activeTab === "milkteaDrink" ? "active" : ""}`}
                        onClick={() => handleTabClick("milkteaDrink")}
                        href="#"
                    >
                        植物奶茶
                    </a>
                </li>
                <li>
                    <a
                        className={`tab-btn ${activeTab === "fruitteaDrink" ? "active" : ""}`}
                        onClick={() => handleTabClick("fruitteaDrink")}
                        href="#"
                    >
                        鮮調果粒
                    </a>
                </li>
            </ul>

            {/* Content Boxes */}
            <div className="content">
                {activeTab === "pureteaDrink" && (
                    <div id="pureteaDrink" className="listbox active">
                        <p>
                            查查查查
                            <br />
                            查查查查
                            <br />
                            查查查查
                            <br />
                            查查查查

                        </p>
                    </div>
                )}
                {activeTab === "toppingDrink" && (
                    <div id="toppingDrink" className="listbox active">
                        <p>Topping Drink Content</p>
                    </div>
                )}
                {activeTab === "milkDrink" && (
                    <div id="milkDrink" className="listbox active">
                        <p>Milk Drink Content</p>
                    </div>
                )}
                {activeTab === "milkteaDrink" && (
                    <div id="milkteaDrink" className="listbox active">
                        <p>Milk Tea Content</p>
                    </div>
                )}
                {activeTab === "fruitteaDrink" && (
                    <div id="fruitteaDrink" className="listbox active">
                        <p>Fruit Tea Content</p>
                    </div>
                )}
            </div>
        </div>
    );
}
