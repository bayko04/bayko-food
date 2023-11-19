import styles from "../../css/Header.module.css"
import { Link } from "react-router-dom"
import cardSvg from "../../images/svg/add_shopping_cart.svg"
import LoginSvg from "../../images/svg/login.svg"

const Nav = () => {
    return (
        <>
            <nav className={styles.header__nav}>
                <ul className={styles.header__menu}>
                    <li className={styles.header__list}>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li className={styles.header__list}>
                        <Link to="/menu">Contacts</Link>
                    </li>
                    <li
                        className={`${styles.header__list} ${styles.header__list_sign}`}
                    >
                        <Link to="/menu">Sign in</Link>
                    </li>
                    <li
                        className={`${styles.header__list} ${styles.header__list_cart}`}
                    >
                        <Link to="/menu">Cart</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
