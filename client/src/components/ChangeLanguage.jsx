import React from 'react';
import i18n from "i18next";
import {useTranslation} from "react-i18next";

const ChangeLanguage = () => {

    const language =['en', 'ge']
    const {t} = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        console.log(lng)
    };
    return (
        <select
            className="bg-primary text-white rounded py-1 px-3 cursor-pointer"
            onChange={e => changeLanguage(e.target.value)}
        >
            {language.map((lng) => (
                <option
                    key={lng}
                    value={lng}
                >
                    {t(`${lng}`)}
                </option>
            ))}
        </select>
    );
};

export default ChangeLanguage;