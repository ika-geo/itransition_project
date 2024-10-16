import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllForms} from "../store/features/FormSlice.js";
import Loading from "../components/Loading.jsx";
import {Link} from "react-router-dom";
import FormCardItem from "../components/FormCardItem.jsx";


const Forms = () => {
    const dispatch = useDispatch()
    const forms = useSelector(state=>state.forms.forms)
    const loading = useSelector(state=>state.forms.loading)
    const user = useSelector(state=>state.auth.user)

    useEffect(() => {
        dispatch(getAllForms())
    }, []);

    if (!forms) return
    if (loading) return <Loading/>

    return (
        <div className='container pt-6'>
            <div className='flex justify-between items-start mb-4'>
                <h1 className="text-2xl font-bold text-gray-800 mb-8">Forms</h1>
                {
                    user &&
                    <Link className='button' to='/formTemplates'>Create form</Link>
                }
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {forms.map(form => (
                    <FormCardItem
                        key={form.id}
                        form={form}
                        editable={false}
                    />
                ))}
            </div>
        </div>
    );
};

export default Forms;