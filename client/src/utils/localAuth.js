import CryptoJS from 'crypto-js'
import {setUser} from "../store/features/AuthSlice.js";


const encryptData = (data, secretKey) => {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
};

const decryptData = (encryptedData, secretKey) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};

export const saveUserLocally=(user)=>{
    const encryptedUser = encryptData(JSON.stringify(user), import.meta.env.VITE_SECRET_KEY)
    localStorage.setItem('user', encryptedUser)
}

export const setLocallySavedUser =(dispatch)=>{
    if(localStorage.getItem('user')){
        const decryptedUser = decryptData(localStorage.getItem('user'), import.meta.env.VITE_SECRET_KEY)
        dispatch(setUser(JSON.parse(decryptedUser)))
    }
}

const deleteLocallySavedUser = ()=>{
    localStorage.removeItem('user')
}

export const handleLogout = ()=>{
    deleteLocallySavedUser()
    window.location.reload()
}

