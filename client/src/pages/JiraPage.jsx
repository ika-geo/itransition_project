import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getJiraTasks} from "../store/features/JiraSlice.js";
import JiraItem from "../components/JiraItem.jsx";
import JiraCreateTaskBlock from "../components/JiraCreateTaskBlock.jsx";
import {useTranslation} from "react-i18next";
import Loading from "../components/Loading.jsx";

const JiraPage = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()

    const user = useSelector(state=>state.auth.user)

    const [createBlock, setCreateBlock] = useState(false)

    const jiraTasks = useSelector(state=>state.jira.tasks)
    const loading = useSelector(state=>state.jira.loading)

    useEffect(() => {
        dispatch(getJiraTasks({email: user.email}))
    }, []);

    const handleOpenCreateBlock = ()=>{
        setCreateBlock(true)
    }

    if (loading) return <Loading/>
    return (
        <div>
            <h1 className='mainTitle'>{t('jiraTasks')}</h1>
            <button onClick={handleOpenCreateBlock} className='button ml-auto mb-4'>{t('createTask')}</button>
            <ul className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    jiraTasks.length === 0 ? <h2 className='text-xl'>{t('noJiraTasks')}</h2> :
                    jiraTasks.map((task) => (
                    <li key={task.id}>
                        <JiraItem
                            task={task}
                        />
                    </li>
                ))
                }
            </ul>
            {
                createBlock ?
                <JiraCreateTaskBlock
                    user={user}
                    setCreateBlock={setCreateBlock}
                />
                    :
                    null
            }
        </div>
    );
};

export default JiraPage;