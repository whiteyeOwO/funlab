import { React, useState, useEffect, useRef } from "react";
import Footer from "../../component/Footer";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";
import { gsap } from "gsap";
import GSReveal from "../../component/GSReveal";
import "./Order.scss";


export default function Order() {
    const [activeOID, setActiveOID] = useState(null);
    const [orderStatus, setOrderStatus] = useState("飲品製作中"); // Default order status
    const conditionRef = useRef(null); // Ref for the condition element

    const orders = [
        {
            id: 234467,
            date: "2024/12/12",
            status: "已完成",
            items: [
                { name: "好喝抹茶杏仁奶", content: "抹茶／杏仁奶", store: "善導寺門市", price: 60 },
            ],
        },
        {
            id: 222359,
            date: "2024/12/10",
            status: "已完成",
            items: [
                { name: "極品紅茶拿鐵", content: "紅茶／鮮奶", store: "公館門市", price: 65 },
            ],
        },
        {
            id: 202445,
            date: "2024/12/08",
            status: "已完成",
            items: [
                { name: "香甜芋頭牛奶", content: "芋頭／牛奶", store: "台北車站門市", price: 70 },
            ],
        },
    ];

    // Create a ref for the collapsible content
    const contentRefs = useRef({});

    // Function to animate the order details with GSAP
    const toggleOrderDetails = (orderId) => {
        setActiveOID((prevId) => {
            const newActiveOID = prevId === orderId ? null : orderId;

            if (contentRefs.current[orderId]) {
                // Animate using GSAP
                const content = contentRefs.current[orderId];
                if (newActiveOID === orderId) {
                    gsap.to(content, {
                        duration: 0.5,
                        height: "auto", // Animate to 'auto' height
                        opacity: 1,
                        ease: "power2.out",
                    });
                } else {
                    gsap.to(content, {
                        duration: 0.5,
                        height: 0,
                        opacity: 0,
                        ease: "power2.in",
                    });
                }
            }
            return newActiveOID;
        });
    };

    // Function to animate condition element
    const animateCondition = (status) => {
        if (conditionRef.current) {
            gsap.fromTo(
                conditionRef.current,
                { opacity: 1, scale: .95 }, // Initial state
                {
                    opacity: 0.8,
                    scale: 1,
                    // backgroundColor: status === "飲品製作中" ? "yellow" : "pink", // Color changes based on status
                    duration: 1,
                    ease: "power2.out",
                }
            );
        }
    };

    // Trigger condition animation when order status changes
    useEffect(() => {
        animateCondition(orderStatus);
    }, [orderStatus]);

    return (
        <main>
            <header className="title">
                <h1>訂單管理</h1>
            </header>

            <div className="now">
                <h2 className="now">當前訂單</h2>
                <div className="nowContent">
                    <div className="orderInfo">
                        <div className="orderInfoL">
                            <p>訂單編號：313286</p>
                            <div ref={conditionRef} className="condition">
                                {orderStatus}
                            </div>
                        </div>
                        <div className="date">
                            <p>訂單日：2025/01/17</p>
                        </div>
                    </div>

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
            </div>

            <hr id="custom-hr" />

            <div className="pastWrap">
                <div className="pastOrder">
                    <h2><GSReveal from="top">過去訂單</GSReveal></h2>
                </div>

                {orders.map((order) => (
                    <div key={order.id} className="past">
                        <div className="pastContent">
                            <div className="orderInfo">
                                <div className="orderInfoL">
                                    <p>訂單編號：{order.id}</p>
                                    <div className="condition">{order.status}</div>
                                </div>
                                <div className="date">
                                    <p>訂單日：{order.date}</p>
                                </div>

                                <div
                                    onClick={() => toggleOrderDetails(order.id)}
                                    className="iconExpand"
                                >
                                    {activeOID === order.id ? (
                                        <BiSolidDownArrow color="black" />
                                    ) : (
                                        <BiSolidRightArrow color="gray" />
                                    )}
                                </div>
                            </div>

                            <div
                                ref={(el) => (contentRefs.current[order.id] = el)}
                                className="table"
                                style={{ height: 0, overflow: "hidden", opacity: 0 }}
                            >
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
                                        {order.items.map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="name">{item.name}</td>
                                                <td className="content">{item.content}</td>
                                                <td className="store">{item.store}</td>
                                                <td className="price">$ {item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="total">
                                    <p>訂單總金額</p>
                                    <p>$ {order.items.reduce((sum, item) => sum + item.price, 0)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
