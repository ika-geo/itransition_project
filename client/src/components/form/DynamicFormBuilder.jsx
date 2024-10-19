import React, { useState } from 'react';
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
        if (!validateName(fieldItem.name, formFields, editingIndex, true)) return;
        if (editingIndex !== null) editField(formFields, editingIndex, fieldItem, setFormFields, resetFieldItem)
        else addField(fieldItem, setFormFields, formFields, resetFieldItem)
    };

    const handleCancelAddField = () => {
        resetFieldItem()
    };

    return (
        <div>
            <h2 className="font-bold text-xl mb-2">Form Fields</h2>
            <div className="grid grid-cols-12 align-top gap-6 border border-gray-300 mb-4 rounded p-4">
                <div className="col-span-8">
                    <div className="mb-4">
                        <p className="label">Field Name:</p>
                        <input
                            type="text"
                            value={fieldItem.name}
                            onChange={(e) => setFieldName(e.target.value)}
                            className="input"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="label">Field Type:</p>
                        <select
                            value={fieldItem.type}
                            onChange={(e) => setFieldType(e.target.value)}
                            className="input"
                        >
                            <option value="text">Text</option>
                            <option value="textarea">Textarea</option>
                            <option value="select">Select</option>
                            <option value="boolean">Boolean</option>
                        </select>
                    </div>

                    {fieldItem.type === 'select' && (
                        <SelectOptionsEditor selectOptions={fieldItem.options}
                                             setSelectOptions={setSelectOptions}/>
                    )}

                    <div className="mb-4">
                        <label className="label">Hidden qustion:
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
                                Cancel
                            </button>
                        )}
                        <button type="button" onClick={handleAddField} className="button">
                            {editingIndex !== null ? 'Save Changes' : 'Add Field'}
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
