import React from 'react';

const OrderDetails = ({ 
    orderDetails, 
    totalPrice, 
    inputName, 
    setInputName,
    onReset,
    onRandom
}) => {
    const sugarLevels = {
        0: '無糖',
        25: '微糖',
        50: '半糖',
        75: '少糖',
        100: '全糖'
    };

    const iceLevels = {
        0: '完全去冰',
        25: '去冰',
        50: '微冰',
        75: '少冰',
        100: '正常冰'
    };

    return (
        <div id="orderArea">
            <div className="orderDetails">
                <img className="orderbg" src="/images/DIY/detailsbackground.svg" alt="" />
                <div className="orderDetailText">
                    <h3>訂單明細</h3>
                    <div className="sugarIceText">
                        <p className="sugarText">
                            {orderDetails.isHoney ? '蜂蜜' : sugarLevels[orderDetails.sugarLevel]}
                        </p>
                        <p className="iceText">
                            {orderDetails.isHot ? '熱飲' : iceLevels[orderDetails.iceLevel]}
                        </p>
                    </div>
                    
                    {orderDetails.tea && (
                        <div className="orderDetailTextAlign">
                            <p className="text">{orderDetails.tea.name}</p>
                            <p className="price">${orderDetails.tea.price}</p>
                        </div>
                    )}

                    {orderDetails.milk && (
                        <div className="orderDetailTextAlign">
                            <p className="text">{orderDetails.milk.name}</p>
                            <p className="price">${orderDetails.milk.price}</p>
                        </div>
                    )}

                    {orderDetails.toppings.map((topping, index) => (
                        <div key={index} className="orderDetailTextAlign">
                            <p className="text">{topping.name}</p>
                            <p className="price">${topping.price}</p>
                        </div>
                    ))}

                    <div className="borderArea"></div>
                    <div className="total">
                        <p>$ {totalPrice}</p>
                    </div>
                </div>
                <div className="inputName">
                    <input 
                        type="text" 
                        placeholder="幫它取個名 :" 
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        size="20%"
                    />
                </div>
            </div>
            <div className="orderButton">
                <button className="resetBtn" onClick={onReset}>
                    <img src="/images/DIY/resetbuttonicon.svg" alt="" />
                </button>
                <button className="randomBtn" onClick={onRandom}>
                    <img src="/images/DIY/randombuttonicon.svg" alt="" />
                </button>
                <button 
                    className={`doneBtn ${totalPrice > 0 && inputName.trim() ? 'active' : ''}`}
                    disabled={!(totalPrice > 0 && inputName.trim())}
                >
                    DONE
                </button>
            </div>
        </div>
    );
};

export default OrderDetails; 