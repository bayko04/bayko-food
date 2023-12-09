import styles from "../../css/Header.module.css"
import { Link } from "react-router-dom"
import { setForm } from "../../reducers/signSlilce"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../typeOfStates/RootState"
import RegisterForm from "./RegisterForm"
import { setCart } from "../../reducers/cartSlice"
import { useEffect } from "react"

const Nav = () => {
    const dispatch = useDispatch()
    const form = useSelector((state: RootState) => state.sign.form)
    const cart = useSelector((state: RootState) => state.cart.cart)
    const show = useSelector((state: RootState) => state.nav.show)

    useEffect(() => {
        cart
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "")
        show
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "")
    }, [cart, show])

    return (
        <>
            <nav
                className={`${styles.header__nav} ${
                    show ? styles.header__bgNav : ""
                }`}
            >
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
                        <button
                            className={styles.header__sign_button}
                            onClick={() => {
                                dispatch(setForm())
                            }}
                        >
                            Sign in
                        </button>
                        {form && <RegisterForm />}
                    </li>
                    <li
                        className={`${styles.header__list} ${styles.header__list_cart}`}
                    >
                        <button
                            onClick={() => {
                                cart
                                    ? dispatch(setCart(false))
                                    : dispatch(setCart(true))
                                // console.log(cart)
                            }}
                            className={styles.header__cart_button}
                        >
                            Cart
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
