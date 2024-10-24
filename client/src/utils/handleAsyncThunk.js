import axios from "axios";

const handleAsyncThunk = async (url, method, data, thunkApi, functionIfSuccess=()=>{}, functionIfReject=()=>{})=>{
    try {
        const response = await axios[method](url, data)
        functionIfSuccess(response)
        return response.data
    }
    catch (e) {
        functionIfReject()
        return thunkApi.rejectWithValue(e)
    }
}

export const handleCreateEditAsyncThunk = async (url, method, data, thunkApi, functionIfSuccess=()=>{}, functionIfReject=()=>{})=>{
    try {
        const response = await axios[method](url, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        functionIfSuccess(response)
        return response.data
    }
    catch (e) {
        functionIfReject()
        return thunkApi.rejectWithValue(e)
    }
}

export default handleAsyncThunk