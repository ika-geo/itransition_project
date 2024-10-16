import React from 'react';


import {useDispatch} from "react-redux";
import {resetForm, setSelectedForm} from "../store/features/FormSlice.js";
import {useNavigate} from "react-router-dom";
import {templates} from "./templates.js";

const FormTemplates = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleCreateNewForm = () => {
        dispatch(resetForm())
        navigate('/createForm')
    }

    const handleCreateFormFromTemplate = (template) => {
        dispatch(setSelectedForm(template))
        navigate('/createForm')
    }

    return (
        <div className='container mt-10'>

            <div className='flex justify-between items-center mb-8'>
                <h1 className="text-4xl font-bold text-gray-800">Choose template to create</h1>
                <button
                    className="bg-primary text-white py-2 px-4 rounded shadow"
                    onClick={handleCreateNewForm}
                >
                    Create new form
                </button>
            </div>
            <div className='grid grid-cols-3 gap-8'>
                {
                    templates.map((template) => {
                        return (
                            <button
                                className="bg-white border border-gray-300 p-6 rounded-lg shadow hover:shadow-lg transition text-left"
                                onClick={() => handleCreateFormFromTemplate(template)}
                                key={template.id}>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{template.title}</h2>
                                <p className="text-gray-600 mb-4">{template.description}</p>
                                <p className="text-gray-500 mb-4">Questions: {template.formFields?.length || 0}</p>
                            </button>
                        )}
                    )
                }
            </div>
        </div>
    );
};

export default FormTemplates;