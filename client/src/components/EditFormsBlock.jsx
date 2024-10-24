import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

import Loading from "../components/Loading.jsx";
import FormCardItem from "../components/FormCardItem.jsx";
import {deleteForm, getFormById} from "../store/features/FormSlice.js";

const EditFormsBlock = ({handleGetFormsByUserId}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const forms = useSelector(state => state.forms.forms)
    const loading = useSelector(state => state.forms.loading)


    const handleNavigate = ()=>{
        navigate(`/editForm`)
    }

    const handleEdit = async (id) => {
        await dispatch(getFormById({id, handleNavigate}))
    }

    const handleDelete = (id) => {
        dispatch(deleteForm({id, handleAfterSucess:handleGetFormsByUserId}))
    }

    if (loading) return <Loading/>
    if (!forms) return

    return (
        <div>
            <h1 className='mainTitle'>{t('myForms')}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>


                {
                    !forms.length ?
                        <h2 className='text-2xl'>{t('noForms')}</h2>
                        :
                    forms.map((form) => (
                    <FormCardItem
                        key={form.id}
                        form={form}
                        editable={true}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default EditFormsBlock;