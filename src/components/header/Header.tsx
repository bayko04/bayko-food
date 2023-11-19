import styles from "../../css/Header.module.css"
import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header__row}>
                    <div className={styles.header__logo}>
                        <Link to="/">BaykoFood</Link>
                    </div>
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default Header
