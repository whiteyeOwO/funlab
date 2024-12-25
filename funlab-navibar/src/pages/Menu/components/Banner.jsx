import styles from "./Banner.module.scss";

export default function Banner() {
    const slides = [
        { url: "/images/banner/fruittea.jpg" },
        { url: "/images/banner/milk.jpg" },
        { url: "/images/banner/milktea.jpg" },
        { url: "/images/banner/puretea.jpg" },
        { url: "/images/banner/topping.jpg" },
    ];

    return (
        <div className={styles.wrapper}>
            {/* Scrolling container */}
            <div className={styles.marquee}>
                {/* Duplicate slides for seamless scrolling */}
                {[...slides, ...slides].map((slide, index) => (
                    <div
                        key={index}
                        className={styles.slide}
                        style={{ backgroundImage: `url(${slide.url})` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
