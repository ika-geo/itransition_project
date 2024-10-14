import axios from "axios";


export const handleSendForm = (formData, userId)=>{
    axios.post('http://localhost:5000/api/forms', {formData:{...formData, userId}})
       .then((res) => {
            console.log(res);
        })
       .catch((err) => {
            console.error(err);
        });
}

export const handleEditForm = (formData)=>{
    axios.put('http://localhost:5000/api/form/2', {formData})
       .then((res) => {
            console.log(res);
        })
       .catch((err) => {
            console.error(err);
        });
}

export const handleGetForm = (setForm)=>{
    axios.get('http://localhost:5000/api/form/2')
        .then(res=>{
            setForm(res.data);
        })
     .catch(err=>{
            console.error(err);
        });
}