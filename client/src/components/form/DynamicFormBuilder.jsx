import React, { useState } from 'react';
import SelectOptionsEditor from './SelectOptionsEditor';
import DragableItems from './DragableItems.jsx';
import { addFieldName, editFieldName, resetFields, validateFieldNameValue } from '../utils/drag';

const DynamicFormBuilder = ({ formFields, setFormFields }) => {
    const [fieldName, setFieldName] = useState('');
    const [fieldType, setFieldType] = useState('text');
    const [selectOptions, setSelectOptions] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddField = () => {
        if (!validateFieldNameValue(fieldName, formFields, editingIndex)) return;
        if (editingIndex !== null) {
            // not fieldName but field
            editFieldName(formFields, editingIndex, fieldName, fieldType, selectOptions, setFormFields, setEditingIndex);
        } else {
            // not fieldName but field
            addFieldName(fieldName, fieldType, selectOptions, setFormFields, formFields);
        }
        resetFields(setFieldName, setFieldType, setSelectOptions);
    };

    const handleCancelAddField = () => {
        resetFields(setFieldName, setFieldType, setSelectOptions);
        //code below add to resetFields, and you dont need to use it twice (in handleAddfield also)
        setEditingIndex(null);
    };

    return (
        <div>
            <h2 className="font-bold text-xl mb-2">Form Fields</h2>
            <div className="grid grid-cols-12 align-top gap-6 border border-gray-300 mb-4 rounded p-4">
                <div className="col-span-8">
                    <div className="mb-4">
                        <p className="block mb-2 text-gray-700">Field Name:</p>
                        <input
                            type="text"
                            value={fieldName}
                            onChange={(e) => setFieldName(e.target.value)}
                            className="p-2 border border-gray-300 rounded w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="block mb-2 text-gray-700">Field Type:</p>
                        <select
                            value={fieldType}
                            onChange={(e) => setFieldType(e.target.value)}
                            className="p-2 border border-gray-300 rounded w-full"
                        >
                            <option value="text">Text</option>
                            <option value="textarea">Textarea</option>
                            <option value="select">Select</option>
                            <option value="boolean">Boolean</option>
                        </select>
                    </div>

                    {fieldType === 'select' && (
                        <SelectOptionsEditor selectOptions={selectOptions} setSelectOptions={setSelectOptions} />
                    )}

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
                    <DragableItems
                        formFields={formFields}
                        setFormFields={setFormFields}
                        setFieldName={setFieldName}
                        setFieldType={setFieldType}
                        setEditingIndex={setEditingIndex}
                        setSelectOptions={setSelectOptions}
                    />
                </div>
            </div>
        </div>
    );
};

export default DynamicFormBuilder;
