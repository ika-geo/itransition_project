import { configureStore } from '@reduxjs/toolkit'
import UserSlice from "./features/UserSlice.js";

export const store = configureStore({
    reducer: {
        user: UserSlice
    },
})