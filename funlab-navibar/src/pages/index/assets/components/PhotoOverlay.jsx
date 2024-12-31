import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
const PhotoOverlay = ({ featureOffset}) => {
    useEffect(() => {
        ScrollTrigger.refresh();
        const textBlocks = document.querySelectorAll(".text-block");
        const imageStacks = document.querySelectorAll(".image-stack");
        const sectionHeight = window.innerHeight; // 每個區塊的高度
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // 只有在滚动到 feature 区域后才开始变换
            if (scrollY >= featureOffset) {
                const activeIndex = Math.floor((scrollY - featureOffset) / sectionHeight);
                if (activeIndex < textBlocks.length) {
                    updateContent(activeIndex);
                }
            }
        };
        const updateContent = (activeIndex) => {
            textBlocks.forEach((block, index) => {
                block.classList.toggle("active", index === activeIndex);
            });
            imageStacks.forEach((img, index) => {
                if (index < activeIndex) {
                    img.classList.add("inactive"); // 變透明
                } else {
                    img.classList.remove("inactive"); // 恢復顯示
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        // 清理事件監聽器
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            window.removeEventListener("scroll", handleScroll);
        };
    }, [featureOffset]);
    // 不返回任何内容
    return null;
    ;
}// 该组件不需要渲染任何内容
export default PhotoOverlay