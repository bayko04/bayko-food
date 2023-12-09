import Header from "./header/Header"
import Intro from "./intro/Intro"
import Menu from "./menu/Menu"
import MoreInfo from "./moreInfo/MoreInfo"
import Footer from "./footer/Footer"
import Cart from "./header/Cart"
import { RootState } from "../typeOfStates/RootState"
import { useSelector } from "react-redux"

const AllPages = () => {
    const cart = useSelector((state: RootState) => state.cart.cart)

    return (
        <>
            <Header />
            <Intro />
            <Menu />
            <MoreInfo />
            <Footer />
            {cart && <Cart />}
        </>
    )
}

export default AllPages
