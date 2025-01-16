import React, { useState } from 'react';

const Hint = ({ isVisible, onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        {
            id: 1,
            title: '客製方式',
            description: `請選擇甜度(或添加蜂蜜)和溫度`,
            image: 'images/DIY/hint-step1.svg',
            alt: 'Step 1',
        },
        {
            id: 2,
            title: '客製方式',
            description: '選好茶底或奶類基底(可混搭!)水果和料最多選3種喔!',
            image: 'images/DIY/hint-step2.svg',
            alt: 'Step 2',
        },
        {
            id: 3,
            title: '客製方式',
            description: '為你的飲品命名',
            image: 'images/DIY/hint-step3.svg',
            alt: 'Step 3',
        },
        {
            id: 4,
            title: '客製方式',
            description: '最後按下送出!專屬手搖就完成啦!',
            image: 'images/DIY/hint-step4.svg',
            alt: 'Step 4',
        },
    ];

    const showStep = (step) => {
        if (step >= 1 && step <= steps.length) {
            setCurrentStep(step);
        }
    };

    const handleBackgroundClick = (e) => {
        if (e.target.id === "hintArea" || e.target.className === "hintClose") {
            onClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div id="hintArea" onClick={handleBackgroundClick}>
            <div className="popup-content">
                <img className='hintClose' onClick={handleBackgroundClick} src="images/icon/icon-close.svg" alt="" />
                {/* 動態顯示當前步驟內容 */}
                <div className="stepText">
                    <h3>{steps[currentStep - 1].title}</h3>
                    <p>{steps[currentStep - 1].alt}</p>
                    <p>{steps[currentStep - 1].description}</p>
                </div>
                <div className="stepImage">
                    <img
                        src={steps[currentStep - 1].image}
                        alt={steps[currentStep - 1].alt}
                        className="step-image"
                    />
                </div>
                <div className="navigation-buttons"
                style={{
                    justifyContent: currentStep === 1 ? 'flex-end' : 'space-between',
                  }}>
                    {/* 上一步按鈕 */}
                    {currentStep > 1 && (
                        <button onClick={() => showStep(currentStep - 1)}>
                            <img src="images/DIY/hint-button-pre.svg" alt="上一步" />
                        </button>
                    )}
                    {/* 下一步按鈕 */}
                    {currentStep < steps.length && (
                        <button onClick={() => showStep(currentStep + 1)}>
                            <img src="images/DIY/hint-button-next.svg" alt="下一步" />
                        </button>
                    )}
                </div>
                {/* 關閉提示 */}
                {/* {currentStep === 4 && (
                    <div className="close-hint">點擊灰色背景關閉提示</div>
                )} */}
            </div>
        </div>
    );
};

export default Hint;