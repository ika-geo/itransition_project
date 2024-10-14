import React, { useEffect, useState } from 'react';
import DynamicFormBuilder from './DynamicFormBuilder';
import { handleEditForm, handleGetForm, handleSendForm } from '../utils/sendForm';
import {useSelector} from "react-redux";

const CreateEditForm = () => {

    const userId = useSelector(state=>state.auth.user.id)

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
        form?.id ? handleEditForm(form, form.id) : handleSendForm(form, userId);
    };

    return (
        <div className="p-6">
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
                {form?.id ? 'Edit' : 'Submit'}
            </button>
        </div>
    );
};

export default CreateEditForm;
