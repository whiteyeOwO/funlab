import styles from "./Banner.module.scss";

export default function Banner() {
    const slides = [
        { url: "/public/images/menu/fruittea.jpg" },
        { url: "/public/images/menu/milk.jpg" },
        { url: "/public/images/menu/milktea.jpg" },
        { url: "/public/images/menu/puretea.jpg" },
        { url: "/public/images/menu/topping.jpg" },
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
