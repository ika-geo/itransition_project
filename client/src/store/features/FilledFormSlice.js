import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import handleAsyncThunk from "../../utils/handleAsyncThunk.js";
import handleErrorMessage from "../../utils/HandleErrorMessage.js";
import {toast} from "react-toastify";


const serverUrl = import.meta.env.VITE_SERVER_URL + "/filledForm"
const initialState = {
    filledForms: [],
    editingIndex: null,
    selectedFilledForms: null,
    selectedIndex: null,
    error: null,
    loading: false,
}

export const getAllFilledForms = createAsyncThunk('filledForm/getFilledForm', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl, 'get', data, thunkApi)
})

export const getFilledFormById = createAsyncThunk('filledForm/getFilledFormById', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`${id}`, 'get', data, thunkApi)
})

export const getFilledFormsByFormId = createAsyncThunk('filledForm/getFilledFormById', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`${id}`, 'get', data, thunkApi)
})

export const getFilledFormsByUserId = createAsyncThunk('forms/getFilledFormsByUserId', async (userId, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/user/${userId}`, 'get', {}, thunkApi)
})

export const createFilledForm = createAsyncThunk('filledForm/createFilledForm', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl, 'post', {data}, thunkApi)
})

export const deleteFilledForm = createAsyncThunk('filledForm/deleteFilledForm', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/${data.id}`, 'delete', {}, thunkApi, data.handleAfterSucess)
})

export const FilledFormSlice = createSlice({
    name: 'filledForm',
    initialState,
    extraReducers: (builder) => {
        builder

            .addCase(getAllFilledForms.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllFilledForms.fulfilled, (state, action) => {
                state.loading = false
                state.filledForms = action.payload
            })
            .addCase(getAllFilledForms.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't get forms")
            })

            .addCase(createFilledForm.pending, (state) => {
                state.loading = true
            })
            .addCase(createFilledForm.fulfilled, (state) => {
                state.loading = false
                toast.success('Form has been submitted successfully')
            })
            .addCase(createFilledForm.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't fill form")
            })

            .addCase(getFilledFormsByUserId.pending, (state) => {
                state.loading = true
            })
            .addCase(getFilledFormsByUserId.fulfilled, (state, action) => {
                state.loading = false
                state.filledForms = action.payload
            })
            .addCase(getFilledFormsByUserId.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't get filled forms")
            })

            .addCase(deleteFilledForm.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteFilledForm.fulfilled, (state) => {
                state.loading = false
                toast.success('Filled form has been deleted successfully')
            })
            .addCase(deleteFilledForm.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't delete filled forms")
            })



    }
})


export default FilledFormSlice.reducer