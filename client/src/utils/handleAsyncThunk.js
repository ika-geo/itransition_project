import axios from "axios";


const handleAsyncThunk = async (url, method, data, thunkApi, functionIfSuccess=()=>{}, functionIfReject=()=>{})=>{
    try {
        const response = await axios[method](url, data)
        console.log(response)
        functionIfSuccess(response)
        return response.data
    }
    catch (e) {
        functionIfReject()
        return thunkApi.rejectWithValue(e)
    }
}

export default handleAsyncThunk