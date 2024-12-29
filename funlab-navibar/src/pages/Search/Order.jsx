import React, { useState } from "react";
import "./Order.scss";

const PastOrder = ({ orderId, orderDate, items, totalPrice }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleOrder = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="past">
            <div className="pastContent">
                {/* Order Info */}
                <div className="orderInfo" onClick={toggleOrder}>
                    <div className="orderInfoL">
                        <p>訂單編號：{orderId}</p>
                        <div className="condition">已完成</div>
                    </div>
                    <div className="date">
                        <p>訂單日：{orderDate}</p>
                    </div>
                    <img
                        src="./images/icon-righttriangle.svg"
                        alt="Expand"
                        className={`tri ${isExpanded ? "hidden" : ""}`}
                    />
                    <img
                        src="./images/icon-downtriangle.svg"
                        alt="Collapse"
                        className={`tri ${isExpanded ? "" : "hidden"}`}
                    />
                </div>

                {/* Order Details */}
                {isExpanded && (
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
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td className="name">{item.name}</td>
                                        <td className="content">{item.content}</td>
                                        <td className="store">{item.store}</td>
                                        <td className="price">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Total Price */}
                        <div className="total">
                            <p>訂單總金額</p>
                            <p>${totalPrice}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="all"></div>
        </div>
    );
};

export default function Order() {
    const currentOrder = {
        orderId: "313286",
        orderDate: "2025/01/17",
        status: "飲品製作中",
        items: [
            { name: "極上珍珠奶茶", content: "奶茶／鮮奶／珍珠", store: "台北商業大學門市", price: 70 },
        ],
        totalPrice: 70,
    };

    const pastOrders = [
        {
            orderId: "312643",
            orderDate: "2024/12/12",
            items: [
                { name: "好喝抹茶杏仁奶", content: "抹茶／杏仁奶", store: "善導寺門市", price: 60 },
            ],
            totalPrice: 60,
        },
        {
            orderId: "312637",
            orderDate: "2024/12/05",
            items: [
                { name: "放飲特調 no. 666", content: "金萱／杏仁奶／茶凍／咖啡凍", store: "善導寺門市", price: 60 },
            ],
            totalPrice: 60,
        },
        {
            orderId: "312601",
            orderDate: "2024/12/01",
            items: [
                { name: "乓乓乓", content: "乓乓乓", store: "乓乓乓", price: 60 },
            ],
            totalPrice: 60,
        },
    ];

    return (
        <div className="order">
            <header className="title">
                <h1>訂單管理</h1>
            </header>

            {/* Current Order */}
            <div className="now">
                <header className="title">
                    <h2>當前訂單</h2>
                </header>
                <div className="nowContent">
                    <div className="orderInfo">
                        <div className="orderInfoL">
                            <p>訂單編號：{currentOrder.orderId}</p>
                            <div className="condition">{currentOrder.status}</div>
                        </div>
                        <div className="date">
                            <p>訂單日：{currentOrder.orderDate}</p>
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
                            {currentOrder.items.map((item, index) => (
                                <tr key={index}>
                                    <td className="name">{item.name}</td>
                                    <td className="content">{item.content}</td>
                                    <td className="store">{item.store}</td>
                                    <td className="price">{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="total">
                        <p>訂單總金額</p>
                        <p>${currentOrder.totalPrice}</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="divider">
                <hr className="custom-hr" />
            </div>

            {/* Past Orders */}
            <header id="pastH2">
                <h2>過去訂單</h2>
            </header>

            {pastOrders.map((order, index) => (
                <PastOrder
                    key={index}
                    orderId={order.orderId}
                    orderDate={order.orderDate}
                    items={order.items}
                    totalPrice={order.totalPrice}
                />
            ))}
        </div>
    );
}
