import React from 'react';

import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import Loading from "../components/Loading.jsx";
import getDate from "../utils/getDate.js";

const FilledFormPage = () => {

    const {t} = useTranslation()

    const answers = useSelector(state=>state.filledForms.answers)
    const loading = useSelector(state=>state.filledForms.loading)

    if (loading) return <Loading/>
    if (!answers) return

    return (
        <div>
            <div className="text-center mb-6">
                <h1 className="mainTitle">{answers.form.title}</h1>
                <h2 className="text-xl text-gray-600">{t('filledBy')}:
                    <span className="font-medium"> {answers.user?.name}</span>
                </h2>
                <p className="text-sm text-gray-500">{t('filledOn')}: {getDate(answers.createdAt)}</p>
            </div>
            <div className="space-y-6">
                {answers.items.map(item => (
                    <div key={item.id} className="p-4 border border-gray-200 rounded-md bg-gray-50">
                        <h3 className="text-lg font-medium text-gray-700">{t('question')}: {item.question}</h3>
                        <p className="text-gray-600">{t('answer')}: {item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilledFormPage;