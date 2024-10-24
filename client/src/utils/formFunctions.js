import {toast} from "react-toastify";

export const DragEndFields = (result, items, setItems) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
}

const validateForEmptyValue = (value, t) => {
    if (!value) {
        toast.warning(t('enterName'));
        return false;
    }
    return true
}

const validateForUniqueValue = (list, isObject, editingIndex, trimmedValue, t) => {
    const isEditing = editingIndex !== null;
    const isDuplicate = list.some((item, index) => {
        const itemName = isObject ? item.name.trim() : item.trim();
        return itemName === trimmedValue && (isEditing ? editingIndex !== index : true);
    });

    if (isDuplicate) {
        toast.warning(`${trimmedValue} ${t('isInUse')}`);
        return false;
    }
    return true;
}

const checkForOptions = (fieldItem, t) => {
    if (fieldItem.type === 'select' && fieldItem.options.length < 2) {
        toast.warning(t('minTwoOptions'));
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

export const validateName = (value, list, editingIndex, isObject = false, t) => {
    const trimmedValue = value.trim();
    if (!validateForEmptyValue(trimmedValue, t)) return false
    if (!validateForUniqueValue(list, isObject, editingIndex, trimmedValue, t)) return false;
    return true;
};

export const editOptionValue = (selectOptions, editingOptionIndex, optionValue, setSelectOptions) => {
    const updatedOptions = [...selectOptions];
    updatedOptions[editingOptionIndex] = optionValue;
    setSelectOptions(updatedOptions);
}

export const editField = (formFields, editingIndex, fieldItem, setFormFields, resetFieldItem, t) => {
    const updatedFields = [...formFields];
    const checkedFieldItem = checkForOptions(fieldItem, t)
    if (!checkedFieldItem) return
    updatedFields[editingIndex] = {...checkedFieldItem, id:formFields[editingIndex].id}
    setFormFields(updatedFields);
    resetFieldItem()
}

export const addField = (fieldItem, setFormFields, formFields, resetFieldItem, t) => {
    const checkedFieldItem = checkForOptions(fieldItem, t)
    if (!checkedFieldItem) return
    setFormFields([...formFields, checkedFieldItem]);
    resetFieldItem()
}