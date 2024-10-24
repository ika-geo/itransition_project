import React, { useState } from 'react';

import {useTranslation} from "react-i18next";

import SelectOptionsItems from './SelectOptionsItems';
import { addOptionValue, editOptionValue, validateName } from '../../utils/formFunctions.js';

const SelectOptionsEditor = ({ selectOptions, setSelectOptions }) => {

    const {t} = useTranslation()

    const [optionValue, setOptionValue] = useState('');
    const [editingOptionIndex, setEditingOptionIndex] = useState(null);

    const handleAddOption = () => {
        if (!validateName(optionValue, selectOptions, editingOptionIndex, false, t)) return;
        if (editingOptionIndex !== null) {
            editOptionValue(selectOptions, editingOptionIndex, optionValue, setSelectOptions);
        } else {
            addOptionValue(setSelectOptions, selectOptions, optionValue);
        }
        handleResetOption()
    };

    const handleResetOption = ()=>{
        setEditingOptionIndex(null);
        setOptionValue('');
    }

    const handleCancelAddOption = () => {
        handleResetOption()
    };

    return (
        <div className="mb-4 ml-12">
            <p className="label">{t('selectOptions')}:</p>
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={optionValue}
                    onChange={(e) => setOptionValue(e.target.value)}
                    className="input"
                />
                {editingOptionIndex !== null && (
                    <button type="button" onClick={handleCancelAddOption} className="button bg-red-500">
                        {t('cancel')}
                    </button>
                )}
                <button type="button" onClick={handleAddOption} className="button bg-green-500">
                    {editingOptionIndex !== null ? t('saveOption') : t('addOption')}
                </button>
            </div>

            <SelectOptionsItems
                selectOptions={selectOptions}
                setSelectOptions={setSelectOptions}
                setOptionValue={setOptionValue}
                setEditingOptionIndex={setEditingOptionIndex}
                editingOptionIndex={editingOptionIndex}
            />
        </div>
    );
};

export default SelectOptionsEditor;
