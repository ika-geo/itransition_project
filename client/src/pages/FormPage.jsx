import React, {useEffect} from 'react';

import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import parse from 'html-react-parser';
import {useTranslation} from "react-i18next";

import Loading from "../components/Loading.jsx";
import {getFormById} from "../store/features/FormSlice.js";
import {getTagLabelByValue, getTopicValueById} from "../utils/tagsAndTopics.js";
import FormComment from "../components/FormComment.jsx";

const FormPage = () => {

    const {t} = useTranslation()
    const {id} = useParams()
    const dispatch = useDispatch()

    const form = useSelector(state => state.forms.selectedForm)
    const loading = useSelector(state => state.forms.loading)
    const tags = useSelector(state => state.forms.tags)
    const topics = useSelector(state => state.forms.topics)
    const user = useSelector(state => state.auth.user)

    const AuthorOrAdmin = form?.user?.id === user?.id || user?.role === 'admin'

    useEffect(() => {
        dispatch(getFormById({id}))
    }, [])

    if (loading) return <Loading/>
    if (!form) return
    return (
        <main>
            <div className="bg-white p-6 rounded-lg shadow-sm">

                <div className='flex mb-4 gap-4'>
                    <div className={form.imageUrl ? "w-1/2" : "w-full"}>
                        <h1 className="mainTitle">{form.title}</h1>
                        <p className="font-semibold text-gray-800 mb-2">{t('author')}: {form.user?.name}</p>

                        <div className='"mb-10"'>
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">{t('description')}:</h2>
                            <div className="text-gray-600 mb-4">{parse(form.description)}</div>
                        </div>

                        {form.tags && form.tags.length ?
                            <div className="mb-10">
                                <h2 className="text-lg font-semibold text-gray-700 mb-2">{t('tags')}:</h2>
                                <div className="flex space-x-2">
                                    {
                                        form.tags.map(tag => (
                                            <span key={tag}
                                                  className="bg-lightPrimary text-primary py-1 px-3 rounded">{getTagLabelByValue(tags, tag, t)}</span>
                                        ))
                                    }
                                </div>
                            </div> : null
                        }

                        <div className='"mb-10"'>
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">{t('topic')}:</h2>
                            <p className="text-gray-600 mb-4">{getTopicValueById(topics, form?.topicId, t)}</p>
                        </div>

                    </div>


                    {form.imageUrl &&
                        <div className='w-1/2'>
                            <div className="mb-4 h-80 overflow-hidden">
                                <img
                                    className="rounded"
                                    src={form.imageUrl} alt={form.title}/>
                            </div>
                        </div>
                    }
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">{t('questions')}</h2>
                    <ul className="space-y-4">
                        {
                            form.formFields.map((formField, index) => {
                                if (formField.hidden && !AuthorOrAdmin) return null
                                return (
                                    <li key={formField.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                        <div>
                                            <div>
                                            <span
                                                className="text-gray-800 font-semibold">{t('question')} {index + 1}: </span>
                                                <span className='font-bold text-primary'>{formField.name}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-800">{t('questionType')}: </span>
                                                <span className='font-bold text-primary'>{t(formField.type)}</span>
                                            </div>
                                            {
                                                AuthorOrAdmin ?
                                                    <div>
                                                        <span className="text-gray-800">{t('hiddenQuestion')}: </span>
                                                        <span
                                                            className='font-bold text-primary'>{formField.hidden ? t('yes') : t('no')}</span>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {user ?
                    <div className='mb-8'>
                        <Link to={`/fillForm/${id}`} className='button text-center block w-full'>{t('fillForm')}</Link>
                    </div>:null
                }

                <FormComment user={user} formId={form.id}/>

            </div>
        </main>
    )
};

export default FormPage;