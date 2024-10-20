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

export const getFilledFormsByUserId = createAsyncThunk('forms/getFilledFormsByUserId', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/${data.userId}`, 'post', data.data, thunkApi)
})

export const createFilledForm = createAsyncThunk('filledForm/createFilledForm', async (data, thunkApi)=>{
    console.log(data)
    return await handleAsyncThunk(serverUrl, 'post', {data}, thunkApi)
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
            .addCase(createFilledForm.fulfilled, (state, action) => {
                state.loading = false
                toast.success('Form has been submitted successfully')
            })
            .addCase(createFilledForm.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't fill form")
            })
    }
})


export default FilledFormSlice.reducer