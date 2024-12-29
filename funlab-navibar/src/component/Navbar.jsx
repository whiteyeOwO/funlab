import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.scss";

export default function Navbar() {
    useEffect(() => {
        // Select elements using plain class names
        const hamburgerButton = document.querySelector(".hamburger");
        const navigationMenu = document.querySelector(".navigation");
        const svgIcon = hamburgerButton?.querySelector("svg");

        // Handle click
        const handleClick = () => {
            svgIcon.classList.toggle("active"); // Toggle SVG active style
            navigationMenu.classList.toggle("show"); // Toggle navigation menu visibility
        };

        // Bind event listener
        hamburgerButton.addEventListener("click", handleClick);

        // Cleanup
        return () => {
            hamburgerButton.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div id="topBar" className="topBar">
            <div className="logo">
                <Link to="/">
                    <img src="/images/funlogoText.svg" alt="Logo" />
                </Link>
            </div>

            <div className="navbar">
                {/* Hamburger Button */}
                <button className="hamburger">
                    <svg className="Rotate" viewBox="0 0 100 100" width="80">
                        <path className="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                        <path className="line middle" d="m 30,50 h 40" />
                        <path className="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                    </svg>
                </button>

                <div className="navigation">
                    <div className="menu">
                        <Link className="a_about" to="/about">ABOUT</Link>
                        <Link className="a_menu" to="/menu">MENU</Link>
                        <Link className="a_fresh" to="/ingred">FRESH</Link>
                        <Link className="a_store" to="/store">STORE</Link>
                        <Link className="a_search" to="/search">SEARCH</Link>
                    </div>
                    <Link to="/diy">
                        <div className="funLab">

                            <img src="/images/funLogo.svg" alt="FUNLAB" />
                            <p>FUNLAB</p>

                        </div>   
                        </Link>


                </div>
            </div>
        </div>
    );
}
