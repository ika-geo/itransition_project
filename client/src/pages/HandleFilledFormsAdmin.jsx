import React, {useEffect} from 'react';
import EditFilledFormsBlock from "../components/EditFilledFormsBlock.jsx";
import {useDispatch} from "react-redux";
import {getAllFilledForms} from "../store/features/FilledFormSlice.js";

const HandleFilledFormsAdmin = () => {

    const dispatch = useDispatch()

    const handleGetFilledForms = ()=>{
        dispatch(getAllFilledForms())
    }

    useEffect(() => {
        handleGetFilledForms()
    }, []);

    return (
        <div className='container mt-20'>
            <h1 className='text-3xl font-bold mb-8'>Manage user answers</h1>
            <EditFilledFormsBlock handleGetFilledForms={handleGetFilledForms}/>
        </div>
    );
};

export default HandleFilledFormsAdmin;