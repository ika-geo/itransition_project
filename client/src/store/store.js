import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from "./features/AuthSlice.js";
import UsersSlice from "./features/UsersSlice.js";
import FormSlice from "./features/FormSlice.js";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        users: UsersSlice,
        forms: FormSlice
    },
})