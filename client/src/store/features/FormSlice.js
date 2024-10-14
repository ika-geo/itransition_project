import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import handleAsyncThunk from "../../utils/handleAsyncThunk.js";
import handleErrorMessage from "../../utils/HandleErrorMessage.js";
import {toast} from "react-toastify";


const serverUrl = import.meta.env.VITE_SERVER_URL + "/form"


// export const register = createAsyncThunk('user/register', async function (data, thunkApi){
//     return await handleAsyncThunk(serverUrl+"/register", 'post', data, thunkApi)
// })

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