import validator from 'validator';
import {toast} from "react-toastify";


export function validation(form) {
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
        toast.error('Enter all required fields')
        return false;
    }
    if (!validator.isEmail(form.email)) {
        toast.error('Invalid email address')
        return false;
    }
    return true
}

export function validateLogIn(form) {
    if (!form.email.trim() ||!form.password.trim()) {
        toast.error('Enter all required fields')
        return false;
    }
    return true
}