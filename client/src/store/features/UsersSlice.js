import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import handleAsyncThunk from "../../utils/handleAsyncThunk.js";
import handleErrorMessage from "../../utils/HandleErrorMessage.js";


const serverUrl = import.meta.env.VITE_SERVER_URL + "/users"


export const getAllUsers = createAsyncThunk('users/getAllUsers', async function (id, thunkApi) {
    return await handleAsyncThunk(serverUrl, 'get', {}, thunkApi)
})

export const removeAdmin = createAsyncThunk('users/removeAdmin', async function (id, thunkApi) {
    thunkApi.dispatch(removeAdminLocally(id))
    return await handleAsyncThunk(serverUrl + `/removeAdmin/${id}`, 'put', {}, thunkApi)
})

export const addAdmin = createAsyncThunk('users/addAdmin', async function (id, thunkApi) {
    thunkApi.dispatch(setAdminLocally(id))
    return await handleAsyncThunk(serverUrl + `/setAdmin/${id}`, 'put', {}, thunkApi)
})

const initialState = {
    users: [],
    error: null,
    loading: false,
}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        removeAdminLocally: (state, action) => {
            console.log('remove locally')
            state.users = state.users.map(user => user.id === action.payload ? {...user, role: 'user'} : user)
        },
        setAdminLocally: (state, action) => {
            console.log('add locally')
            state.users = state.users.map(user => user.id === action.payload ? {...user, role: 'admin'} : user)
        },
        selfDeleteFromUsers: (state, action)=>{
            state.users = state.users.filter(user => user.id!== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.error = false
                state.loading = true
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                console.log('fulfilled')
                state.loading = false
                state.users = action.payload
            })
            .addCase(getAllUsers.rejected, (state) => {
                state.loading = false
                state.error = true
                handleErrorMessage(state.error, "Cannot fetch users")
            })

            .addCase(removeAdmin.rejected, (state) => {
                handleErrorMessage(state.error, "Cannot remove from admin")
            })

            .addCase(addAdmin.rejected, (state) => {
                handleErrorMessage(state.error, "Cannot set as admin")
            })
    }
})


export const {removeAdminLocally, setAdminLocally, selfDeleteFromUsers} = UsersSlice.actions

export default UsersSlice.reducer