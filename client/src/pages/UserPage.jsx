import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import EditFormsBlock from "../components/EditFormsBlock.jsx";
import EditFilledFormsBlock from "../components/EditFilledFormsBlock.jsx";
import {getFormsByUserId} from "../store/features/FormSlice.js";
import {getFilledFormsByUserId} from "../store/features/FilledFormSlice.js";
import Salesforce from "../components/Salesforce.jsx";

const UserPage = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)

    console.log(user)

    const [openSalesforce, setOpenSalesforce] = useState(false)

    const handleGetFormsByUserId = () => {
        dispatch(getFormsByUserId(user.id))
    }
    const handleGetFilledFormsByUserId = () => {
        dispatch(getFilledFormsByUserId(user.id))
    }

    const handleOpenSalesforce = () => {
        setOpenSalesforce(true)
    }

    useEffect(() => {
        handleGetFormsByUserId()
        handleGetFilledFormsByUserId()
    }, []);

    const [chosenTab, setChosenTab] = useState('forms')

    const handleChooseForms = () => {
        setChosenTab('forms')
    }

    const handleChooseFilled = () => {
        setChosenTab('filled')
    }

    return (
        <div>
            <div className='flex justify-between mb-8'>
                <div>
                    <button
                        onClick={handleChooseForms}
                        className={'button mr-4 ' + (chosenTab === "forms" ? "bg-primary" : "bg-gray-400")}>{t('forms')}
                    </button>
                    <button
                        onClick={handleChooseFilled}
                        className={'button ' + (chosenTab === "filled" ? "bg-primary" : "bg-gray-400")}>{t('filledForms')}
                    </button>
                </div>
                {
                    !user?.salesforceid
                        ?
                        <button onClick={handleOpenSalesforce} className='button'>Salesforce</button>
                        :
                        null
                }

            </div>
            {
                openSalesforce
                    ?
                    <Salesforce
                        setOpenSalesforce={setOpenSalesforce}
                    />
                    :
                    null
            }
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