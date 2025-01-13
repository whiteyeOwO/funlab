import GSReveal from "../../component/GSReveal";
import React from "react";
import Banner from "./components/Banner";
import Tab from "./components/Tab";
import Footer from "../../component/Footer";
import "./Menu.scss";


export default function Menu() {
    return (
        <div>
                        <h1 className="page-title"><GSReveal from="top"> Menu </GSReveal> </h1>
            <Tab />
            <Footer/>
        </div>
    );
}
