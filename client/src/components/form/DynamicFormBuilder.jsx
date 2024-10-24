import React, { useState } from 'react';

import {useTranslation} from "react-i18next";

import SelectOptionsEditor from './SelectOptionsEditor';
import FormFieldItems from './FormFieldItems.jsx';
import {addField, validateName, editField} from '../../utils/formFunctions.js';

const fieldItemTemplate = {
    name: '',
    type: 'text',
    selectOptions: null,
    hidden: false
}

const DynamicFormBuilder = ({ formFields, setFormFields, setForm }) => {

    const {t} = useTranslation()

    const [editingIndex, setEditingIndex] = useState(null);
    const [fieldItem, setFieldItem] = useState(fieldItemTemplate)

    const resetFieldItem = ()=>{
        setEditingIndex(null);
        setFieldItem(fieldItemTemplate)
    }

    const handleSetFieldItem = (changeValue) => {
        setFieldItem(prevState => ({
            ...prevState,
            ...changeValue
        }));
    }

    const setFieldName = (name)=>{
        handleSetFieldItem({name});
    }

    const setFieldType = (type)=>{
        handleSetFieldItem({type});
        if (type === 'select') {
            setSelectOptions([]);
        }
    }

    const setSelectOptions = (options) => {
        handleSetFieldItem({options: options });
    }

    const setFieldHidden = (value)=>{
        handleSetFieldItem({hidden: value });
    }

    const handleAddField = () => {
        if (!validateName(fieldItem.name, formFields, editingIndex, true, t)) return;
        if (editingIndex !== null) editField(formFields, editingIndex, fieldItem, setFormFields, resetFieldItem, t)
        else addField(fieldItem, setFormFields, formFields, resetFieldItem, t)
    };

    const handleCancelAddField = () => {
        resetFieldItem()
    };

    return (
        <div>
            <h2 className="font-bold text-xl mb-2">{t('formFields')}</h2>
            <div className="grid grid-cols-12 align-top gap-6 border border-gray-300 mb-4 rounded p-4">
                <div className="col-span-8">
                    <div className="mb-4">
                        <p className="label">{t('fieldName')}:</p>
                        <input
                            type="text"
                            value={fieldItem.name}
                            onChange={(e) => setFieldName(e.target.value)}
                            className="input"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="label">{t('fieldType')}:</p>
                        <select
                            value={fieldItem.type}
                            onChange={(e) => setFieldType(e.target.value)}
                            className="input"
                        >
                            <option value="text">{t('text')}</option>
                            <option value="textarea">{t('textarea')}</option>
                            <option value="select">{t('select')}</option>
                            <option value="boolean">{t('boolean')}</option>
                        </select>
                    </div>

                    {fieldItem.type === 'select' && (
                        <SelectOptionsEditor selectOptions={fieldItem.options}
                                             setSelectOptions={setSelectOptions}/>
                    )}

                    <div className="mb-4">
                        <label className="label">{t('hiddenQuestion')}:
                        <input
                            className='ml-4'
                            type="checkbox"
                            checked={fieldItem.hidden}
                            onChange={(e) => setFieldHidden(e.target.checked)}
                        />
                        </label>
                    </div>

                    <div className="flex mb-4">
                        {editingIndex !== null && (
                            <button type="button" onClick={handleCancelAddField} className="button bg-red-500 mr-2">
                                {t('cancel')}
                            </button>
                        )}
                        <button type="button" onClick={handleAddField} className="button">
                            {editingIndex !== null ? t('saveChanges') : t('addField')}
                        </button>
                    </div>
                </div>

                <div className="col-span-4">
                    <FormFieldItems
                        formFields={formFields}
                        setFormFields={setFormFields}
                        setFieldName={setFieldName}
                        setFieldType={setFieldType}
                        setEditingIndex={setEditingIndex}
                        setSelectOptions={setSelectOptions}
                        setFieldHidden={setFieldHidden}
                        editingIndex={editingIndex}
                        setForm={setForm}
                    />
                </div>
            </div>
        </div>
    );
};

export default DynamicFormBuilder;
