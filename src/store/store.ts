import { configureStore } from "@reduxjs/toolkit"
import { RootState } from "../typeOfStates/RootState"
import isActiveReducer from "../reducers/isActiveSlice"
import searchReducer from "../reducers/serachSlice"
import cardPickedReducer from "../reducers/cardPcikedSlcie"
import signSlilceReducer from "../reducers/signSlilce"
import cartSliceReducer from "../reducers/cartSlice"
import faqSliceReducer from "../reducers/faqSlice"
import navSliceReducer from "../reducers/navSlice"

const store = configureStore({
    reducer: {
        active: isActiveReducer,
        search: searchReducer,
        cardPicked: cardPickedReducer,
        sign: signSlilceReducer,
        cart: cartSliceReducer,
        faq: faqSliceReducer,
        nav: navSliceReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
})

export default store
