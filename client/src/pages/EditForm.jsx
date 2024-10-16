import React, {useEffect} from 'react';
import CreateEditForm from "../components/form/CreateEditForm.jsx";
import {useDispatch} from "react-redux";
import {getFormById} from "../store/features/FormSlice.js";
import {useParams} from "react-router-dom";


const EditForm = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFormById(id))
    }, []);

    return (
        <div className='container bg-white'>
            <CreateEditForm/>
        </div>
    );
};

export default EditForm;