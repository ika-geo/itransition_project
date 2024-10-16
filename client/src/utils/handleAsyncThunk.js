import axios from "axios";


const handleAsyncThunk = async (url, method, data, thunkApi, functionIfSuccess=()=>{}, functionIfReject=()=>{})=>{
    try {
        const response = await axios[method](url, data)
        functionIfSuccess()
        return response.data
    }
    catch (e) {
        functionIfReject()
        return thunkApi.rejectWithValue(e)
    }
}

export default handleAsyncThunk