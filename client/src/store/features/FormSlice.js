import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import handleAsyncThunk from "../../utils/handleAsyncThunk.js";
import {toast} from "react-toastify";
import handleErrorMessage from "../../utils/HandleErrorMessage.js";


const serverUrl = import.meta.env.VITE_SERVER_URL + "/forms"
const selectedForm = {
    title: '',
    description: 'some lorem ipsum',
    imageUrl: "http://example.com",
    tags: ['123', 'ika', 'lira'],
    formFields: []
}

export const getAllForms = createAsyncThunk('forms/getAllForms', async (formData, thunkApi)=>{
    return await handleAsyncThunk(serverUrl, 'get', formData, thunkApi)
})

export const getFormById = createAsyncThunk('forms/getFormById', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/${data.id}`, 'get', {}, thunkApi, data?.handleNavigate)
})

export const getFormsByUserId = createAsyncThunk('forms/getFormsByUserId', async (userId, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/user/${userId}`, 'get', {}, thunkApi)
})

export const refreshForm = createAsyncThunk('forms/refreshForm', async (id, thunkApi)=>{
    return await handleAsyncThunk(serverUrl`/${id}`, 'get', {}, thunkApi)
})

export const createForm = createAsyncThunk('forms/createForm', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+"/", 'post', {formData:data.formData}, thunkApi, data.handleRedirect)
})

export const updateForm = createAsyncThunk('forms/updateForm', async (formData, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/${formData.id}`, 'put', {formData: formData.formData}, thunkApi, formData.handleRedirect)
})

export const deleteForm = createAsyncThunk('forms/deleteForm', async (data, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+`/${data.id}`, 'delete', {}, thunkApi, data.handleGetFormsByUserId)
})


const initialState = {
    forms: [],
    selectedForm,
    selectedFormIndex: null,
    error: null,
    loading: false,
}

export const FormSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        setSelectedForm: (state, action) => {
            state.selectedForm = action.payload
        },
        resetForm:(state) => {
            state.selectedForm=selectedForm
        }
    },

    extraReducers: (builder) => {
        builder

            .addCase(getAllForms.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllForms.fulfilled, (state, action) => {
                state.loading = false
                state.forms = action.payload
            })
            .addCase(getAllForms.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't get forms")
            })

            .addCase(getFormById.pending, (state) => {
                state.loading = true
            })
            .addCase(getFormById.fulfilled, (state, action) => {
                state.loading = false
                state.selectedForm = action.payload
            })
            .addCase(getFormById.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't get form")
            })

            .addCase(getFormsByUserId.pending, (state) => {
                state.loading = true
            })
            .addCase(getFormsByUserId.fulfilled, (state, action) => {
                state.loading = false
                state.forms = action.payload
            })
            .addCase(getFormsByUserId.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't get forms")
            })

            .addCase(refreshForm.fulfilled, (state, action) => {
                state.selectedForm = action.payload
            })
            .addCase(refreshForm.rejected, (state, action) => {
                handleErrorMessage(action, "Can't refresh form")
            })



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

            .addCase(deleteForm.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteForm.fulfilled, (state, ) => {
                state.loading = false
                toast.success('Form has been deleted')
            })
            .addCase(deleteForm.rejected, (state, action) => {
                state.loading = false
                handleErrorMessage(action, "Can't delete form")
            })
    }
})

// Action creators are generated for each case reducer function
export const {
    setSelectedForm,
    resetForm
} = FormSlice.actions

export default FormSlice.reducer