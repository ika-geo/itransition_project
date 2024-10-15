import React, { useEffect, useState } from 'react';
import DynamicFormBuilder from './DynamicFormBuilder';
import { handleEditForm, handleGetForm } from '../utils/sendForm';
import {useDispatch, useSelector} from "react-redux";
import {createForm, updateForm} from "../../store/features/FormSlice.js";


const CreateEditForm = () => {
    const userId = useSelector(state=>state.auth.user.id)
    const loading = useSelector(state=>state.forms.loading)
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        title: '',
        description: 'some lorem ipsum',
        imageUrl: "http://example.com",
        tags: ['123', 'ika', 'lira'],
        formFields: []
    });

    useEffect(() => {
        handleGetForm(setForm);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleFormFieldsChange = (formFields) => {
        setForm((prevForm) => ({ ...prevForm, formFields }));
    };


    const handleSubmit = () => {
        const formData = {...form, userId}
        form?.id ? dispatch(updateForm(formData)) : dispatch(createForm(formData));
    };

    if (loading) return <p className='min-h-screen'>Loading...</p>

    return (
        <div className="p-6 min-h-screen">
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
