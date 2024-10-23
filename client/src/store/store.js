import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from "./features/AuthSlice.js";
import UsersSlice from "./features/UsersSlice.js";
import FormSlice from "./features/FormSlice.js";
import FilledFormSlice from "./features/FilledFormSlice.js";
import CommentSlice from "./features/CommentSlice.js";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        users: UsersSlice,
        forms: FormSlice,
        filledForms: FilledFormSlice,
        comments: CommentSlice
    },
})