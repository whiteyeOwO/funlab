import "../Menu.scss";

export default function Banner() {
    const slides = [
        { url: "images/menu/fruittea.jpg" },
        { url: "images/menu/milk.jpg" },
        { url: "images/menu/milktea.jpg" },
        { url: "images/menu/puretea.jpg" },
        { url: "images/menu/topping.jpg" },
    ];

    return (
        <div className="wrapper">
            <div className="marquee">
                {[...slides, ...slides].map((slide, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{ backgroundImage: `url(${slide.url})` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
