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
        <EditFilledFormsBlock handleGetFilledForms={handleGetFilledForms}/>
    );
};

export default HandleFilledFormsAdmin;