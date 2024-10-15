import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import handleAsyncThunk from "../../utils/handleAsyncThunk.js";
import {toast} from "react-toastify";
import handleErrorMessage from "../../utils/HandleErrorMessage.js";


const serverUrl = import.meta.env.VITE_SERVER_URL + "/forms"


export const createForm = createAsyncThunk('forms/createForm', async (formData, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+"/", 'post', {formData}, thunkApi)
})

export const updateForm = createAsyncThunk('forms/updateForm', async (formData, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+"/"+formData.id, 'put', {formData}, thunkApi)
})

const initialState = {
    form: null,
    selectedForm: null,
    selectedFormIndex: null,
    error: null,
    loading: false,
}

export const FormSlice = createSlice({
    name: 'forms',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createForm.pending, (state) => {
                state.loading = true
            })
            .addCase(createForm.fulfilled, (state) => {
                state.loading = false
                toast.success('Form has been created')
            })
            .addCase(createForm.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't create form")
            })

            .addCase(updateForm.pending, (state) => {
                state.loading = true
            })
            .addCase(updateForm.fulfilled, (state) => {
                state.loading = false
                toast.success('Form has been edited')
            })
            .addCase(updateForm.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't edit form")
            })
    }
})

// Action creators are generated for each case reducer function
export const {  } = FormSlice.actions

export default FormSlice.reducer