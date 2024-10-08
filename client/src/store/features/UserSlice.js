import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import handleAsyncThunk from "../../utils/handleAsyncThunk.js";
import handleErrorMessage from "../../utils/HandleErrorMessage.js";
import {toast} from "react-toastify";


const serverUrl = import.meta.env.VITE_SERVER_URL + "/auth"


export const register = createAsyncThunk('user/register', async function (data, thunkApi){
    return await handleAsyncThunk(serverUrl+"/register", 'post', data, thunkApi)
})

export const login = createAsyncThunk('user/login', async function (data, thunkApi){
    return await handleAsyncThunk(serverUrl+"/login", 'post', data, thunkApi)
})

const initialState = {
    user: null,
    error: null,
    loading: false,
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.user = null
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
            })
            .addCase(login.rejected, (state, action) => {
                handleErrorMessage(action, "Cannot login")
                state.loading = false
            })
    }
})

// Action creators are generated for each case reducer function
export const { logout } = UserSlice.actions

export default UserSlice.reducer