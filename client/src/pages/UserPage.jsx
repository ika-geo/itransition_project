import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import EditFormsBlock from "../components/EditFormsBlock.jsx";
import EditFilledFormsBlock from "../components/EditFilledFormsBlock.jsx";
import {getFormsByUserId} from "../store/features/FormSlice.js";
import {getFilledFormsByUserId} from "../store/features/FilledFormSlice.js";

const UserPage = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()

    const userId = useSelector(state => state.auth.user.id)

    const handleGetFormsByUserId = ()=>{
        dispatch(getFormsByUserId(userId))
    }
    const handleGetFilledFormsByUserId = ()=>{
        dispatch(getFilledFormsByUserId(userId))
    }

    useEffect(() => {
        handleGetFormsByUserId()
        handleGetFilledFormsByUserId()
    }, []);

    const [chosenTab, setChosenTab] = useState('forms')

    const handleChooseForms = ()=>{
        setChosenTab('forms')
    }

    const handleChooseFilled = ()=>{
        setChosenTab('filled')
    }

    return (
        <div>
            <div className='mb-8'>
                <button
                    onClick={handleChooseForms}
                    className={'buttonSlim rounded-xl mr-4 ' + (chosenTab === "forms" ? "bg-primary" : "bg-gray-400")}>{t('forms')}
                </button>
                <button
                    onClick={handleChooseFilled}
                    className={'buttonSlim rounded-xl ' + (chosenTab === "filled" ? "bg-primary" : "bg-gray-400")}>{t('filledForms')}
                </button>
            </div>
            {
                chosenTab === 'forms' ?
                    <EditFormsBlock handleGetFormsByUserId={handleGetFormsByUserId}/>
                    :
                    <EditFilledFormsBlock handleGetFilledForms={handleGetFilledFormsByUserId}/>
            }
        </div>
    );
};

export default UserPage;