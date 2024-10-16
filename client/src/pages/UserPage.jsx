import React, {useEffect} from 'react';
import Loading from "../components/Loading.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteForm, getFormsByUserId} from "../store/features/FormSlice.js";
import FormCardItem from "../components/FormCardItem.jsx";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


const UserPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const forms = useSelector(state => state.forms.forms)
    const loading = useSelector(state => state.forms.loading)
    const userId = useSelector(state => state.auth.user.id)

    useEffect(() => {
        handleGetFormsByUserId()
    }, []);

    const handleGetFormsByUserId = ()=>{
        dispatch(getFormsByUserId(userId))
    }

    const handleEdit = (id) => {
        navigate(`/editForm/${id}`)
    }

    const handleDelete = (id) => {
        dispatch(deleteForm({id, handleGetFormsByUserId}))
    }

    if (loading) return <Loading/>
    if (!forms) return

    return (
        <div className='container mt-20'>
            <h1 className='text-3xl font-bold mb-8'>User Forms</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {forms.map((form) => (
                    <FormCardItem
                        key={form.id}
                        form={form}
                        editable={true}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserPage;