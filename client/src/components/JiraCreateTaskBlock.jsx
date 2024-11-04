import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {createJiraTask, getJiraTasks, refreshJiraTasks} from "../store/features/JiraSlice.js";

const priorities = ['High', 'Medium', 'Low']

const JiraCreateTaskBlock = ({setCreateBlock, user}) => {

    const {t} = useTranslation()
    const dispatch = useDispatch()

    const [issueDetails, setIssueDetails] = useState({
        summary: "",
        description: "",
        priority: "Medium"
    })

    const handleIfSuccess =()=> {
        setCreateBlock(false)
        dispatch(refreshJiraTasks({email:user.email}))
    }

    const handleCloseBlock = () => {
        setCreateBlock(false)
    }

    const handleSendIssue = () => {
        const data = {
            data: {
                email: user.email,
                issueDetails
            },
            handleIfSuccess
        }
        dispatch(createJiraTask(data))
    }

    const handleChangeSummary = (e) => {
        setIssueDetails({...issueDetails, summary: e.target.value})
    }

    const handleChangeDescription = (e) => {
        setIssueDetails({...issueDetails, description: e.target.value})
    }

    const handleChangePriority = (e) => {
        setIssueDetails({...issueDetails, priority: e.target.value})
    }

    return (
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}
             className='fixed w-screen h-screen top-0 left-0 flex items-center justify-center'
        >
            <div className='rounded-lg p-6 bg-white'>
                <h1 className='text-3xl mb-4'>{t('newTaskJira')}</h1>

                <label className='block mb-4'>
                    <p className='label'>{t('title')}</p>
                    <input
                        value={issueDetails.summary}
                        onChange={handleChangeSummary}
                        className='input' type="text"/>
                </label>

                <label className='block mb-4'>
                    <p className='label'>{t('description')}</p>
                    <textarea
                        value={issueDetails.description}
                        onChange={handleChangeDescription}
                        className='input'></textarea>
                </label>

                <label className='block mb-4'>
                    <p className='label'>{t('priority')}</p>
                    <select
                        onChange={handleChangePriority}
                        value={issueDetails.priority}
                        className='input'
                    >
                        {
                            priorities.map((priority) => {
                                return (
                                    <option
                                        key={priority} value={priority}>{t(priority)}
                                    </option>
                                )
                            })
                        }
                    </select>
                </label>
                <div className='flex justify-between'>
                    <button onClick={handleCloseBlock} className='button bg-red-500'>{t('cancel')}</button>
                    <button onClick={handleSendIssue} className='button'>{t('create')}</button>
                </div>
            </div>
        </div>
    );
};

export default JiraCreateTaskBlock;