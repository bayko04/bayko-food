import Header from "./header/Header"
import Intro from "./intro/Intro"
import Menu from "./menu/Menu"
import MoreInfo from "./moreInfo/MoreInfo"
import Footer from "./footer/Footer"
import Cart from "./header/cart/Cart"
import { RootState } from "../typeOfStates/RootState"
import { useSelector } from "react-redux"

const AllPages = () => {
    const cart = useSelector((state: RootState) => state.cart.cart)

    return (
        <div className="content">
            <Intro />
            <Menu />
            <MoreInfo />
            {/* {cart && <Cart />} */}
        </div>
    )
}

export default AllPages
