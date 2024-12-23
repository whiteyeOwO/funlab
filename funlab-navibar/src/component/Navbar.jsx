import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";  // Import SCSS module

export default function Navbar() {
    return (
        <div id="topBar" className={styles.topBar}>
            <div className={styles.logo}>
                <img src="/images/funlogoText.svg" alt="Logo" />
            </div>
            <div className={styles.navigation}>
                <div className={styles.menu}>
                    <Link className={styles.a_story} to="/about">ABOUT</Link>
                    <Link className={styles.a_menu} to="/menu">MENU</Link>
                    <Link className={styles.a_fresh} to="/ingred">FRESH</Link>
                    <Link className={styles.a_store} to="/store">STORE</Link>
                    <Link className={styles.a_search} to="/search">SEARCH</Link>
                </div>
                <div className={styles.funLab}>
                    <img src="/images/funLogo.svg" alt="FUNLAB" />
                </div>
            </div>
        </div>
    );
}
