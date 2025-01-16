import React, { forwardRef } from 'react';
const DrinkDisplay = forwardRef(({ liquidGradient, selectedToppings }, ref) => {

    return (
        <div id="showDrinkArea">
            <img src="images/DIY/showdrinkbackground.svg" alt="" />
            <img className="reflect" src="images/DIY/reflective.svg" alt="" />
            <div id="showDrink" ref={ref}>
                <img className="drinkcap" src="images/DIY/drinkcapfront.svg" alt="" />
                <div className="liquid" style={{background: liquidGradient}}></div>
                <div className="cupIngredients">
                    {selectedToppings.map((topping, index) => (
                        <div key={index} className={`cupIngredients-${index + 1}`}>
                            <img src={topping.inCupImage} alt={topping.name} />
                        </div>
                    ))}
                </div>
                <img className="drinkcap2" src="images/DIY/drinkcapback.svg" alt="" />
            </div>
        </div>
    );
});

export default DrinkDisplay; 