import React, { useEffect, useState } from 'react';

import DynamicFormBuilder from './DynamicFormBuilder';
import {useDispatch, useSelector} from "react-redux";
import {createForm, updateForm} from "../../store/features/FormSlice.js";
import Loading from "../Loading.jsx";
import {useNavigate} from "react-router-dom";
import FormMainFields from "./FormMainFields.jsx";
import {toast} from "react-toastify";


const CreateEditForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userId = useSelector(state=>state.auth.user.id)
    const loading = useSelector(state=>state.forms.loading)
    const selectedForm = useSelector(state=>state.forms.selectedForm)

    const [form, setForm] = useState(null);
    const [image, setImage] = useState([])

    useEffect(() => {
        setForm(selectedForm)
    }, [selectedForm]);

    const handleFormFieldsChange = (formFields) => {
        setForm((prevForm) => ({ ...prevForm, formFields }));
    };

    const handleRedirect = (response)=>{
        navigate(`/forms/${response.data.id}`)
    }

    const handleEdit=()=>{
        const formData = handlePrepareForm(form)
        console.log(formData)
        dispatch(updateForm({id: form.id, formData, handleRedirect}))
    }

    const handleCreateNewForm = ()=>{
        const formData = handlePrepareForm({...form, userId})
        dispatch(createForm({formData, handleRedirect}))
    }

    const handlePrepareForm = (form) => {
        const formData = new FormData();
        if (image?.length) formData.append('file', image[0].file);
        formData.append('formData', JSON.stringify(form))
        return formData;
    }

    const handleSubmit = () => {
        if (!form.formFields.length) return toast.warning('at least on question is required')
        form?.id ? handleEdit() : handleCreateNewForm();
    };

    if (loading) return <Loading/>
    if (!form) return

    return (
        <div className="p-6">
            <FormMainFields
                form={form}
                setForm={setForm}
                image={image}
                setImage={setImage}
            />
            <DynamicFormBuilder formFields={form.formFields} setFormFields={handleFormFieldsChange} setForm={setForm}/>
            <button className="button" onClick={handleSubmit}>
                {form?.id ? 'Edit' : 'Create'}
            </button>
        </div>
    );
};

export default CreateEditForm;
