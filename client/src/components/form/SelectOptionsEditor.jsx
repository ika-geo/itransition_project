import React, { useState } from 'react';
import SelectOptionsItems from './SelectOptionsItems';
import { addOptionValue, editOptionValue, validateOptionValue } from '../utils/drag';

const SelectOptionsEditor = ({ selectOptions, setSelectOptions }) => {
    const [optionValue, setOptionValue] = useState('');
    const [editingOptionIndex, setEditingOptionIndex] = useState(null);

    const handleAddOption = () => {
        if (!validateOptionValue(optionValue, selectOptions, editingOptionIndex)) return;

        if (editingOptionIndex !== null) {
            editOptionValue(selectOptions, editingOptionIndex, optionValue, setSelectOptions, setEditingOptionIndex);
        } else {
            addOptionValue(setSelectOptions, selectOptions, optionValue);
        }
        setOptionValue('');
    };

    const handleCancelAddOption = () => {
        setEditingOptionIndex(null);
        setOptionValue('');
    };

    return (
        <div className="mb-4 ml-12">
            <p className="block mb-2 text-gray-700">Select Options:</p>
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={optionValue}
                    onChange={(e) => setOptionValue(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                />
                {editingOptionIndex !== null && (
                    <button type="button" onClick={handleCancelAddOption} className="button bg-red-500 text-white">
                        Cancel
                    </button>
                )}
                <button type="button" onClick={handleAddOption} className="bg-green-500 text-white px-4 py-2 rounded">
                    {editingOptionIndex !== null ? 'Save Option' : 'Add Option'}
                </button>
            </div>

            <SelectOptionsItems
                selectOptions={selectOptions}
                setSelectOptions={setSelectOptions}
                setOptionValue={setOptionValue}
                setEditingOptionIndex={setEditingOptionIndex}
            />
        </div>
    );
};

export default SelectOptionsEditor;
