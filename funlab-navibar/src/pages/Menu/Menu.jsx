import GSReveal from "../../component/GSReveal";
import React from "react";
// import Banner from "./components/Banner";
import Tab from "./components/Tab";
import Footer from "../../component/Footer";
import "./Menu.scss";


export default function Menu() {
    return (
        <div>
            <h1 className="page-title"><GSReveal from="top"> Menu </GSReveal> </h1>
            <Tab />
            {/* 裝飾 */}
            <figure className="graph-1"><GSReveal><img src="images/icon/graph-pinkLine.svg" alt="" /> </GSReveal></figure>
            <figure className="graph-2"><GSReveal><img src="images/icon/graph-pinkBall.svg" alt="" /> </GSReveal></figure>
            <figure className="graph-3"><GSReveal><img src="images/icon/graph-yellowLine.svg" alt="" /> </GSReveal></figure>

            <Footer />


        </div>
    );
}
