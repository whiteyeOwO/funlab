import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GSReveal = ({ children, from = 'bottom', duration = 3, delay = 0 }) => {
    const ref = useRef(null);

    const animateFrom = (elem, direction = 1) => {
        let x = 0,
            y = direction * 100;

        if (from === 'left') {
            x = -100;
            y = 0;
        } else if (from === 'right') {
            x = 100;
            y = 0;
        } else if (from === 'top') {
            x = 0;
            y = -100;
        } else if (from === 'bottom') {
            x = 0;
            y = 100;
        }

        gsap.fromTo(
            elem,
            { x, y, autoAlpha: 0 },
            {
                duration,
                delay,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: 'expo',
                overwrite: 'auto',
            }
        );
    };

    const hide = (elem) => {
        gsap.set(elem, { autoAlpha: 0 });
    };

    useEffect(() => {
        const elem = ref.current;
        if (!elem) return;

        const child = elem.children[0]; // 假設只有一個子元素
        if (child) {
            // 獲取子元素的樣式
            const computedStyle = getComputedStyle(child);
            const position = computedStyle.position;
            const top = computedStyle.top;
            const bottom = computedStyle.bottom;
            const left = computedStyle.left;
            const right = computedStyle.right;

            // 應用到外層元素
            elem.style.position = position !== 'static' ? position : 'relative';
            elem.style.top = top !== 'auto' ? top : '';
            elem.style.bottom = bottom !== 'auto' ? bottom : '';
            elem.style.left = left !== 'auto' ? left : '';
            elem.style.right = right !== 'auto' ? right : '';
        }

        // 初始化隱藏
        hide(elem);

        // ScrollTrigger 創建
        const trigger = ScrollTrigger.create({
            trigger: elem,
            onEnter: () => animateFrom(elem),
            onEnterBack: () => animateFrom(elem, -1),
            onLeave: () => hide(elem),
        });

        // 清理
        return () => trigger.kill();
    }, [from, duration, delay]);

    return (
        <div ref={ref} className="gs_reveal">
            {children}
        </div>
    );
};

export default GSReveal;
