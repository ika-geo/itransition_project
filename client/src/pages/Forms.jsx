import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllForms} from "../store/features/FormSlice.js";
import Loading from "../components/Loading.jsx";
import {Link} from "react-router-dom";





const Forms = () => {

    const dispatch = useDispatch()
    const forms = useSelector(state=>state.forms.forms)
    const loading = useSelector(state=>state.forms.loading)

    useEffect(() => {
        dispatch(getAllForms())
    }, []);

    console.log(forms)

    return (
        <div className='container'>
            {
                loading && <Loading/>
            }
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Forms</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {forms.map(form => (
                    <div
                        key={form.id}
                        className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                        <Link to={`/forms/${form.id}`} className="text-xl font-semibold text-gray-700 mb-2">{form.title}</Link>
                        <p className="text-sm text-gray-500 mb-4">Author: {form.user.name}</p>
                        <p className="text-gray-600 mb-4">{form.description}</p>
                        <div className="flex space-x-2">
                            {
                                form.tags.map(tag =>{
                                    return (
                                        <span
                                            key={tag}
                                            className="bg-lightPrimary text-primary py-1 px-3 rounded">
                                            {tag}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forms;