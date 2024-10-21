import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import handleAsyncThunk from "../../utils/handleAsyncThunk.js";
import handleErrorMessage from "../../utils/HandleErrorMessage.js";
import {toast} from "react-toastify";


const serverUrl = import.meta.env.VITE_SERVER_URL + "/filledForm"
const initialState = {
    filledForms: [],
    selectedIndex: null,
    selectedFilledForm: null,
    answers: null,
    error: null,
    loading: false,
}

export const getAllFilledForms = createAsyncThunk('filledForm/getFilledForm', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl, 'get', data, thunkApi)
})

export const getFilledFormById = createAsyncThunk('filledForm/getFilledFormById', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/${id}`, 'get', {}, thunkApi)
})

export const getAnswers = createAsyncThunk('filledForm/getAnswers', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/${data.id}`, 'get', {}, thunkApi, data.handleNavigate)
})

export const getFilledFormsByFormId = createAsyncThunk('filledForm/getFilledFormById', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`${id}`, 'get', data, thunkApi)
})

export const getFilledFormsByUserId = createAsyncThunk('forms/getFilledFormsByUserId', async (userId, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/user/${userId}`, 'get', {}, thunkApi)
})

export const createFilledForm = createAsyncThunk('filledForm/createFilledForm', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl, 'post', data, thunkApi, data.handleIfSuccess)
})

export const editFilledForm = createAsyncThunk('filledForm/editFilledForm', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl, 'put', {data:data.data}, thunkApi, data.handleIfSuccess)
})

export const deleteFilledForm = createAsyncThunk('filledForm/deleteFilledForm', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/${data.id}`, 'delete', {}, thunkApi, data.handleIfSuccess)
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

            .addCase(getAnswers.pending, (state) => {
                state.loading = true
            })
            .addCase(getAnswers.fulfilled, (state, action) => {
                state.loading = false
                state.answers = action.payload
            })
            .addCase(getAnswers.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't get filled form")
            })

            .addCase(editFilledForm.pending, (state) => {
                state.loading = true
            })
            .addCase(editFilledForm.fulfilled, (state, action) => {
                state.loading = false
                toast.success(action, "Filled form has been changed")
            })
            .addCase(editFilledForm.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't change filled form")
            })
    }
})


export default FilledFormSlice.reducer