import React, { useEffect, useState } from 'react';

import DynamicFormBuilder from './DynamicFormBuilder';
import {useDispatch, useSelector} from "react-redux";
import {createForm, updateForm} from "../../store/features/FormSlice.js";
import Loading from "../Loading.jsx";
import {useNavigate} from "react-router-dom";
import FormMainFields from "./FormMainFields.jsx";


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
        const formData = handlePrepareForm()
        dispatch(updateForm({id: form.id, formData, handleRedirect}))
    }

    const handleCreateNewForm = ()=>{
        const formData = handlePrepareForm()
        dispatch(createForm({formData, handleRedirect}))
    }

    const handlePrepareForm = () => {
        const formData = new FormData();
        if (image?.length) formData.append('file', image[0].file);
        formData.append('formData', JSON.stringify({...form, userId}))
        return formData;
    }

    const handleSubmit = () => {
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
            <DynamicFormBuilder formFields={form.formFields} setFormFields={handleFormFieldsChange}/>
            <button className="button" onClick={handleSubmit}>
                {form?.id ? 'Edit' : 'Create'}
            </button>
        </div>
    );
};

export default CreateEditForm;
