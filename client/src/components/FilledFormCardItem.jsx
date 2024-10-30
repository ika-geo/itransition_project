import React from 'react';

import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

import getDate from "../utils/getDate.js";
import {getFilledFormById} from "../store/features/FilledFormSlice.js";

const FilledFormCardItem = ({form, handleEdit, handleDelete}) => {

    const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNavigate = ()=>{
        dispatch(getFilledFormById({id:form.id, handleNavigate:()=>navigate('/filledFormPage')}))
    }

    if (!form.form) return
    return (
        <div
            className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <button onClick={handleNavigate} className="block mb-2 text-xl font-semibold text-gray-700">{form.form.title}</button>
            <p className="text-sm text-gray-500 mb-4">{t('filledBy')}: {form.user?.name}</p>
            <p className="text-sm text-gray-500 mb-4">
                {t('filledOn')}: {getDate(form.createdAt)}
            </p>

            <div className='mt-auto flex justify-between'>
                <button
                    onClick={() => handleEdit(form)}
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 lowercase'
                >
                    {t('edit')}
                </button>
                <button
                    onClick={() => handleDelete(form.id)}
                    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 lowercase'
                >
                    {t('delete')}
                </button>
            </div>
        </div>
    );
};

export default FilledFormCardItem;