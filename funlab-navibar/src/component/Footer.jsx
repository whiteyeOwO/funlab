import React from "react";
import "./Footer.scss";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="logoFooter">
                <img
                    className="logoFooterImg"
                    src="/images/funLogo.svg"
                    alt="fun飲LOGONav"
                />
                <img
                    className="logoFooterText"
                    src="/images/funLogoText2.svg"
                    alt="fun飲LOGO"
                    title="fun飲LOGO"
                />
            </div>
            <div className="articleFooter">
                <ul>
                    <li>
                        <p>CONTACT</p>
                    </li>
                    <li>
                        <p>PRIVACY POLICY</p>
                    </li>
                    <li>
                        <p>放飲 FUN LAB</p>
                        <p>100台北市中正區濟南路一段321號</p>
                        <p>TEL 02-3535-3466</p>
                    </li>
                    <li className="iconFooter">
                        <img src="/images/icon/icon-ig.svg" alt="Instagram Icon" />
                        <img src="/images/icon/icon-LINE.svg" alt="LINE Icon" />
                    </li>
                    <li>
                        <p>©2024 放飲, All Rights Reserved</p>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
