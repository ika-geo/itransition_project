import React from 'react';
import {useTranslation} from "react-i18next";

const priorityColor = (priority)=>{
    switch (priority) {
        case 'High':
            return 'text-red-500';
        case 'Medium':
            return 'text-yellow-500';
        case 'Low':
            return 'text-green-500';
        default:
            return 'text-gray-600';
    }
}

const statusColor = (status)=>{
    switch (status) {
        case 'Open':
            return 'blue-500';
        case 'Work in progress':
            return 'orange-500';
        case 'Done':
            return 'green-500';
        default:
            return 'gray-500';
    }
}

const JiraItem = ({task}) => {

    const {t} = useTranslation()

    return (
        <div className="bg-white shadow-lg rounded p-4 relative">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                    <div
                        style={{boxShadow: `${statusColor(task.status).replace('-500', '')} 0px 0px 15px 1px`}}
                        className={"w-2.5 h-2.5 rounded-full mr-2 bg-"+(statusColor(task.status))}></div>
                    <span className={"text-sm font-semibold"}>{t(task.status)}</span>
                </div>
                <p className="text-sm font-bold">{t('priority')}: <span className={priorityColor(task.priority)}>{t(task.priority)}</span></p>
            </div>
            <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
        </div>
    );
};

export default JiraItem;