import axios from "axios";

const handleAsyncThunk = async (url, method, data, thunkApi)=>{
    try {
        const response = await axios[method](url, data)
        return response.data
    }
    catch (e) {
        return thunkApi.rejectWithValue(e)
    }
}

export default handleAsyncThunk