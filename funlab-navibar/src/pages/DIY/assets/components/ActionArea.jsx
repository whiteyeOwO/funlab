import React from 'react';
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActionArea = ({
    onItemSelect,
    currentTab,
    setCurrentTab,
    teaItems,
    milkItems,
    fruitItems,
    toppingItems
}) => {
    // 自定義箭頭組件
    const PrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <button
                className={className}
                onClick={onClick}
                type="button"
                aria-label="Previous"
            >
                <img src="/images/DIY/button-previcon.svg" alt="Previous" />
            </button>
        );
    };

    const NextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <button
                className={className}
                onClick={onClick}
                type="button"
                aria-label="Next"
            >
                <img src="/images/DIY/button-nexticon.svg" alt="Next" />
            </button>
        );
    };

    const slickSettings = {
        infinite: true,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 4,
        focusOnSelect: false,
        cssEase: 'ease',
        speed: 800,
        draggable: false,
        lazyLoad: 'ondemand',
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        onInit: () => {
            // 強制重新計算 slider 寬度
            window.dispatchEvent(new Event('resize'));
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section id="action">
            <img className="actionbg" src="/images/DIY/actionbackground.svg" alt="" />
            <div className="tabArea">
                <div className="tabAlign">
                    {['tea', 'milk', 'fruit', 'topping'].map(tab => (
                        <button
                            key={tab}
                            className={`tab-button ${currentTab === tab ? 'active' : ''}`}
                            onClick={() => setCurrentTab(tab)}
                            style={{
                                backgroundImage: `url(/images/DIY/${tab}tab-${currentTab === tab ? 'on' : 'off'}.svg)`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* 四個獨立的輪播，使用原本的 display 控制 */}
            <div className={`carousel carousel1`} style={{ display: currentTab === 'tea' ? 'block' : 'none' }}>
                <Slider key={currentTab} {...slickSettings}>
                    {teaItems.map(item => (
                        <CarouselItem
                            key={item.id}
                            item={item}
                            onSelect={() => onItemSelect(item, 'tea')}
                        />
                    ))}
                </Slider>
            </div>

            <div className={`carousel carousel2`} style={{ display: currentTab === 'tea' ? 'block' : 'none' }}>
                <Slider key={currentTab} {...slickSettings}>
                    {milkItems.map(item => (
                        <CarouselItem
                            key={item.id}
                            item={item}
                            onSelect={() => onItemSelect(item, 'milk')}
                        />
                    ))}
                </Slider>
            </div>

            <div className={`carousel carousel3`} style={{ display: currentTab === 'tea' ? 'block' : 'none' }}>
                <Slider key={currentTab} {...slickSettings}>
                    {fruitItems.map(item => (
                        <CarouselItem
                            key={item.id}
                            item={item}
                            onSelect={() => onItemSelect(item, 'fruit')}
                        />
                    ))}
                </Slider>
            </div>

            <div className={`carousel carousel4`} style={{ display: currentTab === 'tea' ? 'block' : 'none' }}>
                <Slider key={currentTab} {...slickSettings}>
                    {toppingItems.map(item => (
                        <CarouselItem
                            key={item.id}
                            item={item}
                            onSelect={() => onItemSelect(item, 'topping')}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ActionArea; 