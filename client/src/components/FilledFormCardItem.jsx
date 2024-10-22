import React from 'react';
import getDate from "../utils/getDate.js";
import {useDispatch} from "react-redux";
import {getFilledFormById} from "../store/features/FilledFormSlice.js";
import {useNavigate} from "react-router-dom";


const FilledFormCardItem = ({form, handleEdit, handleDelete}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNavigate = ()=>{
        dispatch(getFilledFormById({id:form.id, handleNavigate:()=>navigate('/filledFormPage')}))
    }

    return (
        <div
            className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <button onClick={handleNavigate} className="block mb-2 text-xl font-semibold text-gray-700">{form.form.title}</button>
            <p className="text-sm text-gray-500 mb-4">Filled by: {form.user.name}</p>
            <p className="text-sm text-gray-500 mb-4">
                Filled on: {getDate(form.createdAt)}
            </p>

            <div className='mt-auto flex justify-between'>
                <button
                    onClick={() => handleEdit(form)}
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(form.id)}
                    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FilledFormCardItem;