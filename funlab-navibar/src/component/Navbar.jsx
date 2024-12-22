import { Link } from "react-router-dom";
import styles from "../component/Navbar.module.scss";  // Import SCSS module

export default function Navbar() {
    return (
        <div id="topBar" className={styles.topBar}>
            <div className={styles.logo}>
                <img src="/images/funlogoText.svg" alt="Logo" />
            </div>
            <div className={styles.navigation}>
                <div className={styles.menu}>
                    <Link className={styles.a_story} to="/about">關於放飲</Link>
                    <Link className={styles.a_menu} to="/menu">飲品菜單</Link>
                    <Link className={styles.a_fresh} to="/ingred">嚴選食材</Link>
                    <Link className={styles.a_store} to="/store">門市據點</Link>
                    <Link className={styles.a_search} to="/search">訂單查詢</Link>
                </div>
                <div className={styles.funLab}>
                    <img src="/images/funLogo.svg" alt="Funlab Logo" />
                </div>
            </div>
        </div>
    );
}
