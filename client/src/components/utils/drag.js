
export const DragEndFields = (result, items, setItems) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
}


export const validateOptionValue=(optionValue, selectOptions, editingOptionIndex)=>{
    if(!optionValue.trim()) {
        alert("cannot add empty")
        return false
    }
    if (
        (selectOptions.includes(optionValue.trim()) && editingOptionIndex===null)
        ||
        (selectOptions.some((option, index) => (option.trim()===optionValue.trim()) && editingOptionIndex!==null && editingOptionIndex!== index))
    ) {
        alert(`${optionValue} is already in options`)
        return false
    }
    return true
}

export const validateFieldNameValue = (fieldName, formFields, editingIndex)=>{
    if (!fieldName.trim()) {
        alert("Please enter field name");
        return false
    }
    if (formFields.some(field => field.name.trim()===fieldName.trim()) && editingIndex===null) {
        alert("filed name already added/add mode");
        return false;
    }

    if ((formFields.some((field, index) => (field.name.trim()===fieldName.trim()) && (editingIndex!==null && editingIndex!== index) ))){
        alert("filed name already added/edit mode")
        return false;
    }
    return true
}

export const editOptionValue=(selectOptions, editingOptionIndex, optionValue, setSelectOptions, setEditingOptionIndex)=>{
    const updatedOptions = [...selectOptions];
    updatedOptions[editingOptionIndex] = optionValue;
    setSelectOptions(updatedOptions);
    setEditingOptionIndex(null);
}

export const addOptionValue = (setSelectOptions, selectOptions, optionValue)=>{
    setSelectOptions([...selectOptions, optionValue]);
}

export const editFieldName = (formFields, editingIndex, fieldName, fieldType, selectOptions, setFormFields, setEditingIndex)=>{
    const updatedFields = [...formFields];
    if (updatedFields[editingIndex].id){
        updatedFields[editingIndex] = {
            id: updatedFields[editingIndex].id,
            formId: updatedFields[editingIndex].formId,
            name: fieldName,
            type: fieldType,
            options: fieldType === 'select' ? selectOptions:null
        };
    }
    else{
        updatedFields[editingIndex] = {
            name: fieldName,
            type: fieldType,
            options: fieldType === 'select' ? selectOptions:null
        };
    }
    setFormFields(updatedFields);
    setEditingIndex(null);
}

export const addFieldName = (fieldName, fieldType, selectOptions, setFormFields, formFields)=>{
    const newField = { name: fieldName, type: fieldType };
    if (fieldType === "select") newField.options = selectOptions;
    setFormFields([...formFields, newField]);
}

export const resetFields = (setFieldName, setFieldType, setSelectOptions)=>{
    setFieldName("");
    setFieldType("text");
    setSelectOptions([]);
}