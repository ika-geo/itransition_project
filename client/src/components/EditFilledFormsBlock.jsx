import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

import Loading from "./Loading.jsx";
import FilledFormCardItem from "./FilledFormCardItem.jsx";
import {deleteFilledForm, getFilledFormById} from "../store/features/FilledFormSlice.js";
import {getFormById} from "../store/features/FormSlice.js";


const EditFilledFormsBlock = ({handleGetFilledForms}) => {

    const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filledForms = useSelector(state => state.filledForms.filledForms)
    const loading = useSelector(state => state.filledForms.loading)

    const handleNavigate = ()=>{
        navigate(`/editFilledForm`)
    }

    const handleEdit = async (form) => {
        dispatch(getFormById({id:form.form.id}))
        dispatch(getFilledFormById({id:form.id, handleNavigate}))
    }

    const handleDelete = (id) => {
        dispatch(deleteFilledForm({id, handleIfSuccess:handleGetFilledForms}))
    }

    if (loading) return <Loading/>

    return (
        <div>
            <h1 className='mainTitle'>{t('usersAnswers')}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    !filledForms.length ?
                        <h2 className='text-2xl'>{t('noFilledForms')}</h2>
                        :
                    filledForms.map((item) => {
                        return (
                            <FilledFormCardItem
                                key={item.id}
                                form={item}
                                editable={true}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        )
                    })}
            </div>
        </div>
    );
};

export default EditFilledFormsBlock;