import { configureStore } from "@reduxjs/toolkit"
import { RootState } from "../typeOfStates/RootState"
import isActiveReducer from "../reducers/isActive"
import searchReducer from "../reducers/serach"

const store = configureStore({
    reducer: {
        active: isActiveReducer,
        search: searchReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
})

export default store
