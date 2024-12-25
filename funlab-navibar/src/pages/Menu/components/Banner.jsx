
// import styles from "./Banner.module.scss";
import { useState, useEffect } from "react";

export default function Banner() {
    // Create an array of slide objects
    const slides = [
        { url: "/public/images/banner/fruittea.jpg" },
        { url: "src/img/img6.jpg" },
        { url: "src/img/img7.jpg" },
        { url: "src/img/img8.jpg" },
    ];

    // Track the current image index using useState
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // Set up autoplay functionality using useEffect
    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide(); // Automatically switch to the next slide
        }, 3000);

        // Cleanup interval on unmount
        return () => clearInterval(autoplay);
    }, [currentImgIndex]);

    // Navigate to the next slide
    const nextSlide = () => {
        setCurrentImgIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Navigate to the previous slide
    const prevSlide = () => {
        setCurrentImgIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Arrow component for navigation
    const Arrow = ({ direction, onClick }) => (
        <div
            onClick={onClick}
            style={{
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                [direction]: "20px", // Dynamically position left or right
                color: "white"

            }}
        >
            {direction === "left" ? (
                <FaChevronLeft size={24} />
            ) : (
                <FaChevronRight size={24} />
            )}
        </div>
    );

    return (
        <>
        </>
    )
}