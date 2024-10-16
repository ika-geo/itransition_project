import React, {useEffect, useState} from 'react';
import Loading from "../components/Loading.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getFormById} from "../store/features/FormSlice.js";


const FormPage = () => {


    const dispatch = useDispatch()
    const {id} = useParams()

    const form = useSelector(state => state.forms.selectedForm)
    const loading = useSelector(state => state.forms.loading)

    useEffect(() => {
        dispatch(getFormById(id))
    }, [])


    if (loading) return <Loading/>
    if (!form) return
    return (
        <main className="container">
            <div className="bg-white p-6 rounded shadow-sm">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{form.title}</h1>
                <p className="font-semibold text-gray-800 mb-2">Author {form.user.name}</p>

                <p className="text-gray-600 mb-4">{form.description}</p>
                {
                    form.imageUrl &&
                    <div className="mb-4 h-80 overflow-hidden">
                        <img
                            className="rounded"
                            src={form.imageUrl} alt={form.title}/>
                    </div>
                }
                <div className="mb-10">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Tags:</h2>
                    <div className="flex space-x-2">
                        {
                            form.tags.map(tag => (
                                <span key={tag}
                                      className="bg-lightPrimary text-primary py-1 px-3 rounded">{tag}</span>
                            ))
                        }
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Questions</h2>
                    <ul className="space-y-4">

                        {
                            form.formFields.map((formField, index) => (
                                <li key={formField.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                    <div>
                                        <span className="text-gray-800 font-semibold">Question {index + 1}: </span>
                                        <span className='font-bold text-primary'>{formField.name}</span>
                                    </div>
                                    <p className="text-gray-500">Description: Enter your full name. or do someghitng, we
                                        need to impliment this field, because we haven't descripion yet</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Comments</h2>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <p className="text-gray-600">This is a sample comment on this template.</p>
                    </div>
                </div>

            </div>
        </main>
    )
};

export default FormPage;