
import { React, useState } from "react";
import Footer from "../../component/Footer";
import "./Order.scss";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";

export default function Order() {
    const [activeOID, setActiveOID] = useState(null);

    // Order Data
    const order = [
        { id: 1, Q: "Order1", Ans: "Detail1" },
        { id: 2, Q: "Order2", Ans: "Detail2" },
        { id: 3, Q: "Order3", Ans: "Detail3" },
    ];

    return (
        <main>
            {/* 標題 */}
            <header className="title">
                <h1>訂單管理</h1>
            </header>

            {/* 當前訂單 */}
            <div className="now">
                <h2 className="now">當前訂單</h2>
                <div className="nowContent">
                    <div className="orderInfo">
                        <div className="orderInfoL">
                            <p>訂單編號：313286</p>
                            <div className="condition">飲品製作中</div>
                        </div>
                        <div className="date">
                            <p>訂單日：2025/01/17</p>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="name">商品名稱</th>
                                <th className="content">內容</th>
                                <th className="store">取件門市</th>
                                <th className="price">價格</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="name">極上珍珠奶茶</td>
                                <td className="content">奶茶／鮮奶／珍珠</td>
                                <td className="store">台北商業大學門市</td>
                                <td className="price">$ 70</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="total">
                        <p>訂單總金額</p>
                        <p>$ 70</p>
                    </div>
                </div>
            </div>

            {/* 分隔線 */}
            <div className="divider">
                <hr className="custom-hr" />
            </div>

            {/* 測試用的useState */}
            <div className="pastWrap">
                <div className="pastOrder">
                    <h2>過去訂單</h2>
                </div>

                {/* Mapping through past orders */}
                {order.map((o) => (
                    <div key={o.id} className="past">
                        <div className="pastContent">
                            <div className="orderInfo">
                                <div className="orderInfoL">
                                    <p>訂單編號：{o.id}</p>
                                    <div className="condition">已完成</div>
                                </div>
                                <div className="date">
                                    <p>訂單日：2024/12/12</p>
                                </div>

                                {/* Expand/Collapse Button */}
                                <div
                                    onClick={() =>
                                        setActiveOID(activeOID === o.id ? null : o.id)
                                    }
                                    className="iconExpand"
                                >
                                    {activeOID === o.id ? (
                                        <BiSolidDownArrow />
                                    ) : (
                                        <BiSolidRightArrow />
                                    )}
                                </div>
                            </div>

                            {/* Conditionally render order details */}
                            {activeOID === o.id && (
                                <div className="table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="name">商品名稱</th>
                                                <th className="content">內容</th>
                                                <th className="store">取件門市</th>
                                                <th className="price">價格</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="name">好喝抹茶杏仁奶</td>
                                                <td className="content">抹茶／杏仁奶</td>
                                                <td className="store">善導寺門市</td>
                                                <td className="price">$ 60</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="total">
                                        <p>訂單總金額</p>
                                        <p>$ 60</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="all"></div>
                    </div>
                ))}
            </div>
            <Footer />
        </main>
    );
}