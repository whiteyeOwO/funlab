import React from "react";
import Banner from "./components/Banner";
import Tab from "./components/Tab";
import "./Menu.scss";
import Footer from "../../component/Footer";

export default function Menu() {
    return (
        <div>
            <Banner /> 
            <Tab />
            <Footer/>
        </div>
    );
}
