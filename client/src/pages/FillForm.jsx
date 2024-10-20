import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {getFormById} from "../store/features/FormSlice.js";
import QuestionItem from "../components/QuestionItem.jsx";
import {editFromObjectToArray} from "../utils/editDataForFormFIll.js";
import {createFilledForm} from "../store/features/FilledFormSlice.js";


const FillForm = ({editMode=false, filledFormId=null}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const form = useSelector(state=>state.forms.selectedForm)
    const user = useSelector(state=>state.auth.user)

    const {
        register,
        handleSubmit,
    } = useForm();

    const handleGetForm = ()=>{
        dispatch(getFormById({id}))
    }
    //
    // if (filledFormId){
    //     dispatch()
    // }

    const handleSave=(data)=>{
        let items = editFromObjectToArray(data)
        let formData = {formId: id, userId: user.id, items}
        dispatch(createFilledForm(formData))
    }

    const handleEdit=(data)=>{
        console.log('edit', data)
    }

    useEffect(() => {
        handleGetForm()
    }, []);


    if(!form) return null

    return (
        <div className='container p-6 bg-white shadow-lg rounded-lg'>
            <h1 className='text-3xl font-extrabold text-center mb-6'>{form.title}</h1>
            <form onSubmit={handleSubmit((data) => editMode ? handleEdit(data) : handleSave(data))}>
                <div className='mb-12'>
                    {
                        form?.formFields?.map(item=>{
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
                <button className='button w-full' type='submit'>{editMode ? "Edit" : "Save"}</button>
            </form>

        </div>
    );
};

export default FillForm;