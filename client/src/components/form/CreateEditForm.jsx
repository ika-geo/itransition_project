import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import DynamicFormBuilder from './DynamicFormBuilder';
import {useDispatch, useSelector} from "react-redux";
import {createForm, updateForm} from "../../store/features/FormSlice.js";
import Loading from "../Loading.jsx";
import {useNavigate} from "react-router-dom";


const CreateEditForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userId = useSelector(state=>state.auth.user.id)
    const loading = useSelector(state=>state.forms.loading)
    const selectedForm = useSelector(state=>state.forms.selectedForm)

    const [form, setForm] = useState(null);

    useEffect(() => {
        setForm(selectedForm)
    }, [selectedForm]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleFormFieldsChange = (formFields) => {
        setForm((prevForm) => ({ ...prevForm, formFields }));
    };

    const handleRedirect = (response)=>{
        navigate(`/forms/${response.data.id}`)
    }

    const handleSubmit = () => {
        const formData = {...form, userId}
        form?.id ? dispatch(updateForm({id: formData.id, formData, handleRedirect})) : dispatch(createForm({formData, handleRedirect}));
    };


    if (!form) return

    return (
        <div className="p-6 min-h-screen">
            {
                loading&&
                <Loading/>
            }

            <p>Title</p>
            <input
                className="mb-2"
                name="title"
                value={form.title}
                onChange={handleChange}
                type="text"
            />
            <DynamicFormBuilder formFields={form.formFields} setFormFields={handleFormFieldsChange} form={form} />
            <button className="button" onClick={handleSubmit}>
                {form?.id ? 'Edit' : 'Create'}
            </button>
        </div>
    );
};

export default CreateEditForm;
