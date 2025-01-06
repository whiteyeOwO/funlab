import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/Footer";
import GSReveal from "../../component/GSReveal";
import "./Search.scss";

export default function Search() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (phoneNumber.trim()) {
            navigate(`/order?phone=${phoneNumber}`);
        } else {
            alert("請輸入手機號碼");
        }
    };

    return (
        <>
            <header>
                <h1 className="page-title"> <GSReveal from="top">search</GSReveal> </h1>
            </header>
            <section className="h2">
                <div className="search">
                    <h4>手機號碼</h4>
                    <input className="input"
                        type="text"
                        placeholder="請輸入手機號碼"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <button type="button" className="submit" onClick={handleSubmit}>
                    查詢
                </button>
            </section>
            <Footer />
        </>
    );
}
