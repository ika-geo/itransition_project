import {toast} from "react-toastify";
import validator from "validator";

export const validateSalesForceData = (data, t)=>{
    if (!data.name) {
        toast.warning(t('nameRequired'))
        return false
    }
    if (!data.email) {
        toast.warning(t('emailRequired'))
        return false
    }
    if (data.email && !validator.isEmail(data.email)){
        toast.warning(t('notValidEmail'))
        return false
    }
    if (data.phone && !validator.isMobilePhone(data.phone)){
        toast.warning(t('notValidPhone'))
        return false
    }
    return true
}