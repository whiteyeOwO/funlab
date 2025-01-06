import React from "react";
import Banner from "./components/Banner";
import Tab from "./components/Tab";
import "./Menu.scss";
import Footer from "../../component/Footer";


export default function Menu() {
    return (
        <div>
            <Banner /> 
                        <header>
                        <h1 className="page-title"> Menu </h1>
                        </header>
            <Tab />
            <Footer/>
        </div>
    );
}
