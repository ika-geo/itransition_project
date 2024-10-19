import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";
import {getFormById} from "../store/features/FormSlice.js";
import QuestionItem from "../components/QuestionItem.jsx";


const FillForm = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const form = useSelector(state=>state.forms.selectedForm)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const handleGetForm = ()=>{
        dispatch(getFormById({id}))
    }

    const handleSend=(data)=>{
        console.log(data)
    }

    useEffect(() => {
        handleGetForm()
    }, []);


    if(!form) return null

    return (
        <div className='container p-6 bg-white shadow-lg rounded-lg'>
            <h1 className='text-3xl font-extrabold text-center mb-6'>{form.title}</h1>
            <form onSubmit={handleSubmit((data) => handleSend(data))}>
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

                <button className='button w-full' type='submit'>submit</button>
            </form>

        </div>
    );
};

export default FillForm;