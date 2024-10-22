import React, {useEffect} from 'react';
import Loading from "../components/Loading.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {getFormById} from "../store/features/FormSlice.js";
import parse from 'html-react-parser';
import {getTagLabelByValue, getTopicValueById} from "../utils/tagsAndTopics.js";

const FormPage = () => {

    const dispatch = useDispatch()
    const {id} = useParams()

    const form = useSelector(state => state.forms.selectedForm)
    const loading = useSelector(state => state.forms.loading)
    const tags = useSelector(state => state.forms.tags)
    const topics = useSelector(state => state.forms.topics)
    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        dispatch(getFormById({id}))
    }, [])

    if (loading) return <Loading/>
    if (!form) return
    return (
        <main className="container">
            <div className="bg-white p-6 rounded shadow-sm">

                <div className='flex mb-4 gap-4'>
                    <div className={form.imageUrl ? "w-1/2" : "w-full"}>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{form.title}</h1>
                        <p className="font-semibold text-gray-800 mb-2">Author {form.user?.name}</p>

                        <div className='"mb-10"'>
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">Description:</h2>
                            <div className="text-gray-600 mb-4">{parse(form.description)}</div>
                        </div>

                        {form.tags && form.tags.length ?
                            <div className="mb-10">
                                <h2 className="text-lg font-semibold text-gray-700 mb-2">Tags:</h2>
                                <div className="flex space-x-2">
                                    {
                                        form.tags.map(tag => (
                                            <span key={tag}
                                                  className="bg-lightPrimary text-primary py-1 px-3 rounded">{getTagLabelByValue(tags, tag)}</span>
                                        ))
                                    }
                                </div>
                            </div> : null
                        }

                        <div className='"mb-10"'>
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">Topic:</h2>
                            <p className="text-gray-600 mb-4">Topic: {getTopicValueById(topics, form?.topicId)}</p>
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
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Questions</h2>
                    <ul className="space-y-4">

                        {
                            form.formFields.map((formField, index) => (
                                <li key={formField.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                    <div>
                                        <div>
                                            <span className="text-gray-800 font-semibold">Question {index + 1}: </span>
                                            <span className='font-bold text-primary'>{formField.name}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-800">Question Type: </span>
                                            <span className='font-bold text-primary capitalize'>{formField.type}</span>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {user ?
                    <div className='mb-8'>
                        <Link to={`/fillForm/${id}`} className='button text-center block w-full'>Fill form</Link>
                    </div>:null
                }


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