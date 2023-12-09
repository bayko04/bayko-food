import { createSlice } from "@reduxjs/toolkit"

export interface navSliceStateType {
    show: boolean
}

const navSlice = createSlice({
    name: "nav",
    initialState: {
        show: false,
    },
    reducers: {
        setShow: (state) => {
            state.show = state.show ? false : true
        },
    },
})

export const { setShow } = navSlice.actions
export default navSlice.reducer
