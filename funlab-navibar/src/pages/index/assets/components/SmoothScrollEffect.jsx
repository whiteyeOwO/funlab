import { useEffect, useRef } from "react";

const SmoothScrollEffect = ({ DIYOffset, targetSelectors }) => {
    const elementsRef = useRef([]);
    const animationFrameId = useRef(null);
    const currentYs = useRef([]); // 儲存所有目標元素的 translateY 值

    useEffect(() => {
        const sectionHeight = window.innerHeight;

        // 初始化目標元素和位置
        elementsRef.current = targetSelectors.map(selector =>
            document.querySelector(selector)
        );
        currentYs.current = targetSelectors.map(() => 0);

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (
                scrollY >= DIYOffset + sectionHeight * 3.4&&
                scrollY < DIYOffset + sectionHeight * 3.8
            ) {
                const targetY = scrollY - DIYOffset - sectionHeight * 3.4;

                // 平滑更新所有目標元素
                startSmoothTransform(targetY);
            }
        };

        const startSmoothTransform = (targetY) => {
            cancelAnimationFrame(animationFrameId.current);

            const animate = () => {
                let needAnimation = false;

                elementsRef.current.forEach((element, index) => {
                    if (!element) return;

                    const diff = targetY - currentYs.current[index];
                    const step = diff * 0.2; // 平滑度參數

                    if (Math.abs(step) > 0.5) {
                        needAnimation = true;
                        currentYs.current[index] += step;
                        element.style.transform = `translateY(${currentYs.current[index]}px)`;
                    } else {
                        // 最後一步直接設置到目標值
                        currentYs.current[index] = targetY;
                        element.style.transform = `translateY(${currentYs.current[index]}px)`;
                    }
                });

                if (needAnimation) {
                    animationFrameId.current = requestAnimationFrame(animate);
                }
            };

            animate();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, [DIYOffset, targetSelectors]);

    return null;
};

export default SmoothScrollEffect;
