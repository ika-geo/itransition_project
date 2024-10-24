import {toast} from "react-toastify";

const messageFromServer = (message)=>{
    toast.error(message)
}

const localMessage = (message)=>{
    toast.error(message)
}

const handleErrorMessage = (action, message)=>{
    if(action?.payload?.response?.data?.message) return messageFromServer(action.payload.response.data.message)
    localMessage(message)
}

export default handleErrorMessage