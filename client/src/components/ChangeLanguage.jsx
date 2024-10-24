import React from 'react';
import i18n from "i18next";
import Select from 'react-select';

const ChangeLanguage = () => {

    const languages = [
        { value: 'en', label: 'en' },
        { value: 'ge', label: 'ge' }
    ]

    const changeLanguage = (e)=>{
        i18n.changeLanguage(e.value);
    }

    return (
        <Select
            defaultValue={languages[0]}
            onChange={changeLanguage}
            options={languages}
        />
    );
};

export default ChangeLanguage;