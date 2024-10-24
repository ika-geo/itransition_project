import React, {useEffect} from 'react';

import {useNavigate, useParams} from "react-router-dom";
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import Loading from "../components/Loading.jsx";
import QuestionItem from "../components/QuestionItem.jsx";
import {arrayToObjectWithId, editFromArrayToObject, editFromObjectToArray} from "../utils/editDataForFormFill.js";
import {createFilledForm, editFilledForm, getFilledFormById} from "../store/features/FilledFormSlice.js";
import {getFormById} from "../store/features/FormSlice.js";

const FillForm = ({editMode=false}) => {

    const {t} = useTranslation()
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const form = useSelector(state=>state.forms.selectedForm)
    const loading = useSelector(state=>state.forms.loading)
    const answers = useSelector(state=>state.filledForms.answers)
    const user = useSelector(state=>state.auth.user)

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const handleGetForm = ()=>{
        if (!editMode) dispatch(getFormById({id}))
    }

    const handleNavigate = async()=>{
        if (editMode){
            dispatch(getFilledFormById({id:answers.id, handleNavigate: ()=>navigate(`/filledFormPage`)}))
        }
        else navigate(`/forms`)
    }

    const handleSetDefaultAnswers =()=>{
        if (editMode&&answers?.items){
           reset(editFromArrayToObject(answers.items))
        }
    }

    useEffect(() => {
        handleSetDefaultAnswers()
        handleGetForm()
    }, []);

    const handleSave=(data)=>{
        let items = editFromObjectToArray(data)
        let formData = {formId: id, userId: user.id, items}
        dispatch(createFilledForm({data:formData, handleIfSuccess:handleNavigate}))
    }
    const handleEdit=(data)=>{
        dispatch(editFilledForm({data:arrayToObjectWithId(data, answers.items), handleIfSuccess:handleNavigate}))
    }

    if (loading) return <Loading/>
    if(!form?.title) return null

    return (
        <div className='p-6 bg-white shadow-lg rounded-lg'>
            <h1 className='mainTitle'>{form.title}</h1>
            <form onSubmit={handleSubmit((data) => editMode ? handleEdit(data) : handleSave(data))}>
                <div className='mb-12'>
                    {
                        form?.formFields?.map(item=>{
                            if(item.hidden) return null
                            return (
                                <div key={item.name} className='mb-6'>
                                    <label>
                                        <p className='mb-2 text-lg font-semibold text-gray-700'>{item.name}</p>
                                        <QuestionItem
                                            item={item}
                                            register={register}
                                        />
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
                <button className='button w-full' type='submit'>{editMode ? t('edit') : t('save')}</button>
            </form>

        </div>
    );
};

export default FillForm;