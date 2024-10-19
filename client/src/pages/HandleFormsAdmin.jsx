import React, {useEffect} from 'react';
import Loading from "../components/Loading.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteForm, getAllForms, getFormById, getFormsByUserId} from "../store/features/FormSlice.js";
import FormCardItem from "../components/FormCardItem.jsx";
import {useNavigate} from "react-router-dom";
import AdminFormSearchBar from "../components/AdminFormSearchBar.jsx";


const HandleFormsAdmin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const forms = useSelector(state => state.forms.forms)
    const loading = useSelector(state => state.forms.loading)
    const userId = useSelector(state => state.auth.user.id)

    useEffect(() => {
        handleGetForms()
    }, []);

    const handleGetForms = ()=>{
        dispatch(getAllForms())
    }

    const handleNavigate = ()=>{
        navigate(`/editForm`)
    }

    const handleEdit = async (id) => {
        await dispatch(getFormById({id, handleNavigate}))
    }

    const handleDelete = (id) => {
        dispatch(deleteForm({id, handleAfterSucess: handleGetForms}))
    }

    if (loading) return <Loading/>
    if (!forms) return

    return (
        <div className='container mt-20'>
            <h1 className='text-3xl font-bold mb-8'>User Forms</h1>
            <AdminFormSearchBar/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {forms.map((form) => (
                    <FormCardItem
                        key={form.id}
                        form={form}
                        editable={true}
                        adminRole={true}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default HandleFormsAdmin;