import React, { useState, useEffect } from "react";

export default function Tab() {
    const [activeTab, setActiveTab] = useState("pureteaDrink");

    useEffect(() => {
        // JavaScript code to handle DOM manipulation or custom JS logic
        const buttons = document.querySelectorAll(".tab-btn"); // All navigation buttons
        const contentBoxes = document.querySelectorAll(".listbox"); // All content boxes

        // Set the default active tab and content on component mount
        const defaultButton = document.querySelector(".tab-btn.active"); // Find the button with the 'active' class
        const defaultTargetId = defaultButton ? defaultButton.getAttribute("data-target") : "pureteaDrink"; // Get its data-target
        const defaultContent = document.getElementById(defaultTargetId); // Find the corresponding content box

        // Ensure the default content is visible
        if (defaultContent) {
            defaultContent.classList.add("active");
        } else {
            console.warn(`Content box with ID "${defaultTargetId}" not found.`);
        }

        // Add click events to buttons
        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default anchor behavior

                // Remove active state from all buttons and content boxes
                buttons.forEach((btn) => btn.classList.remove("active"));
                contentBoxes.forEach((box) => box.classList.remove("active"));

                // Add active state to the clicked button
                button.classList.add("active");

                // Get the target ID from the data-target attribute
                const targetId = button.getAttribute("data-target");
                const targetContent = document.getElementById(targetId);

                // Activate the corresponding content box if it exists
                if (targetContent) {
                    targetContent.classList.add("active");
                } else {
                    console.warn(`Content box with ID "${targetId}" not found.`);
                }
            });
        });

        // Clean up the event listeners when the component is unmounted
        return () => {
            buttons.forEach((button) => {
                button.removeEventListener("click", () => { });
            });
        };
    }, []);

    const handleTabClick = (targetId) => {
        setActiveTab(targetId);
    };

    return (
        <div className="drinkListTab">
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
            {/* Example content boxes */}
            <div id="pureteaDrink" className={`listbox ${activeTab === "pureteaDrink" ? "active" : ""}`}>
                {/* Content for Pure Tea */}
                <p>Pure Tea Content</p>
            </div>
            <div id="toppingDrink" className={`listbox ${activeTab === "toppingDrink" ? "active" : ""}`}>
                {/* Content for Topping Drink */}
                <p>Topping Drink Content</p>
            </div>
            <div id="milkDrink" className={`listbox ${activeTab === "milkDrink" ? "active" : ""}`}>
                {/* Content for Milk Drink */}
                <p>Milk Drink Content</p>
            </div>
            <div id="milkteaDrink" className={`listbox ${activeTab === "milkteaDrink" ? "active" : ""}`}>
                {/* Content for Milk Tea */}
                <p>Milk Tea Content</p>
            </div>
            <div id="fruitteaDrink" className={`listbox ${activeTab === "fruitteaDrink" ? "active" : ""}`}>
                {/* Content for Fruit Tea */}
                <p>Fruit Tea Content</p>
            </div>
        </div>
    );
}
