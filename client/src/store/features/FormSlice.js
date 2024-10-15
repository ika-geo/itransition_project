import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import handleAsyncThunk from "../../utils/handleAsyncThunk.js";


const serverUrl = import.meta.env.VITE_SERVER_URL + "/forms"


// export const register = createAsyncThunk('user/register', async function (data, thunkApi){
//     return await handleAsyncThunk(serverUrl+"/register", 'post', data, thunkApi)
// })


export const createForm = createAsyncThunk('user/createForm', async (formData, thunkApi)=>{
    return await handleAsyncThunk(serverUrl+"/", 'post', {formData}, thunkApi)
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

})

// Action creators are generated for each case reducer function
export const {  } = FormSlice.actions

export default FormSlice.reducer