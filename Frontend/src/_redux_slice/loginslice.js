import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "logged",

    initialState: {
        value: false,
    },
    
    reducers: {
        Login: (state) => {
            state.value = true
        },

        Logout: (state) => {
            state.value = false
        },
    },
})

export const { Login, Logout} = loginSlice.actions

export default loginSlice.reducer