import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteForm, getFormById} from "../store/features/FormSlice.js";
import Loading from "./Loading.jsx";
import FormCardItem from "./FormCardItem.jsx";
import FilledFormCardItem from "./FilledFormCardItem.jsx";

const UserPageFilledForms = ({handleGetFormsByUserId}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const filledForms = useSelector(state => state.filledForms.filledForms)
    const loading = useSelector(state => state.filledForms.loading)

    const handleNavigate = ()=>{
        // navigate(`/editForm`)
    }

    const handleEdit = async (id) => {
        alert(id)
        // await dispatch(getFormById({id, handleNavigate}))
    }

    const handleDelete = (id) => {
        alert(`delete ${id}`)
        // dispatch(deleteForm({id, handleAfterSucess:handleGetFormsByUserId}))
    }

    if (loading) return <Loading/>
    if (filledForms===null) return

    return (
        <div>
            <h1 className='text-3xl font-bold mb-8'>User Forms</h1>
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

export default UserPageFilledForms;