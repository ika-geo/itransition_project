import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {toast} from "react-toastify";

import handleAsyncThunk from "../../utils/handleAsyncThunk.js";
import handleErrorMessage from "../../utils/HandleErrorMessage.js";
import {handleLogout, saveUserLocally} from "../../utils/localAuth.js";

const serverUrl = import.meta.env.VITE_SERVER_URL + "/auth"
const initialState = {
    user: null,
    error: null,
    loading: false,
}

export const register = createAsyncThunk('user/register', async function (data, thunkApi){
    return await handleAsyncThunk(serverUrl+"/register", 'post', data, thunkApi)
})

export const login = createAsyncThunk('user/login', async function (data, thunkApi){
    return await handleAsyncThunk(serverUrl+"/login", 'post', data, thunkApi, data.handleNavigate)
})

export const getMe = createAsyncThunk('user/getMe', async function (id, thunkApi){
    return await handleAsyncThunk(serverUrl+"/getme", 'post', id, thunkApi)
})

export const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            handleLogout()
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false
                state.user=action.payload
                saveUserLocally(action.payload)
                toast.success('User registered successfully')
            })
            .addCase(register.rejected, (state, action) => {
                handleErrorMessage(action, "Cannot register user")
                state.loading = false
            })

            .addCase(login.pending, (state) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.user=action.payload
                saveUserLocally(action.payload)
            })
            .addCase(login.rejected, (state, action) => {
                handleErrorMessage(action, "Cannot login")
                state.loading = false
            })

            .addCase(getMe.pending, (state) => {
                state.loading = true
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.loading = false
                state.user=action.payload
            })
            .addCase(getMe.rejected, (state, action) => {
                handleErrorMessage(action, "Cannot refresh me")
                state.loading = false
            })
    }
})

export const { logout, setUser } = AuthSlice.actions

export default AuthSlice.reducer