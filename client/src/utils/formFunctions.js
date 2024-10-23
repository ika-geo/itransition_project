export const DragEndFields = (result, items, setItems) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
}

const validateForEmptyValue = (value) => {
    if (!value) {
        alert("Please enter a name");
        return false;
    }
    return true
}

const validateForUniqueValue = (list, isObject, editingIndex, trimmedValue) => {
    const isEditing = editingIndex !== null;
    const isDuplicate = list.some((item, index) => {
        const itemName = isObject ? item.name.trim() : item.trim();
        return itemName === trimmedValue && (isEditing ? editingIndex !== index : true);
    });

    if (isDuplicate) {
        alert(`${trimmedValue} is already in use`);
        return false;
    }
    return true;
}


const checkForOptions = (fieldItem) => {
    if (fieldItem.type === 'select' && fieldItem.options.length < 2) {
        alert("Please add at least two options");
        return false;
    }
    if (fieldItem.type !== 'select') {
        return {...fieldItem, options: null}
    }
    return fieldItem
}

export const addOptionValue = (setSelectOptions, selectOptions, optionValue) => {
    setSelectOptions([...selectOptions, optionValue]);
}

export const validateName = (value, list, editingIndex, isObject = false) => {
    const trimmedValue = value.trim();
    if (!validateForEmptyValue(trimmedValue)) return false
    if (!validateForUniqueValue(list, isObject, editingIndex, trimmedValue)) return false;
    return true;
};

export const editOptionValue = (selectOptions, editingOptionIndex, optionValue, setSelectOptions) => {
    const updatedOptions = [...selectOptions];
    updatedOptions[editingOptionIndex] = optionValue;
    setSelectOptions(updatedOptions);
}

export const editField = (formFields, editingIndex, fieldItem, setFormFields, resetFieldItem) => {
    const updatedFields = [...formFields];
    const checkedFieldItem = checkForOptions(fieldItem)
    if (!checkedFieldItem) return
    updatedFields[editingIndex] = {...checkedFieldItem, id:formFields[editingIndex].id}
    setFormFields(updatedFields);
    resetFieldItem()
}

export const addField = (fieldItem, setFormFields, formFields, resetFieldItem) => {
    const checkedFieldItem = checkForOptions(fieldItem)
    if (!checkedFieldItem) return
    setFormFields([...formFields, checkedFieldItem]);
    resetFieldItem()
}