import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../_redux_slice/loginslice'

export default configureStore({
    reducer: {
        logged: loginReducer,
    },
})