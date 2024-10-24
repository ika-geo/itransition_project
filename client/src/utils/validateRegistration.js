import validator from 'validator';
import {toast} from "react-toastify";

export function validateRegistration(form, t) {
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
        toast.error(t('fillAllFields'))
        return false;
    }
    if (!validator.isEmail(form.email)) {
        toast.error(t('notValidEmail'))
        return false;
    }
    return true
}

export function validateLogIn(form, t) {
    if (!form.email.trim() ||!form.password.trim()) {
        toast.error(t('fillAllFields'))
        return false;
    }
    return true
}