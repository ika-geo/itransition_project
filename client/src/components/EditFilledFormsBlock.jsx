import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Loading from "./Loading.jsx";
import FilledFormCardItem from "./FilledFormCardItem.jsx";
import {deleteFilledForm, getAnswers} from "../store/features/FilledFormSlice.js";
import {getFormById} from "../store/features/FormSlice.js";

const EditFilledFormsBlock = ({handleGetFilledForms}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filledForms = useSelector(state => state.filledForms.filledForms)
    const loading = useSelector(state => state.filledForms.loading)

    const handleNavigate = ()=>{
        navigate(`/editFilledForm`)
    }

    const handleEdit = async (form) => {
        dispatch(getFormById({id:form.form.id}))
        dispatch(getAnswers({id:form.id, handleNavigate}))
    }

    const handleDelete = (id) => {
        dispatch(deleteFilledForm({id, handleIfSuccess:handleGetFilledForms}))
    }

    if (loading) return <Loading/>
    if (filledForms===null) return

    return (
        <div>
            <h1 className='text-3xl font-bold mb-8'>Filled my forms</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    !filledForms.length ?
                        <h2 className='text-2xl'>No filled forms</h2>
                        :
                    filledForms.map((item) => (
                    <FilledFormCardItem
                        key={item.id}
                        form={item}
                        editable={true}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default EditFilledFormsBlock;