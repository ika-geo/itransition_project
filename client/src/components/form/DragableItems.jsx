import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { MdDelete, MdEdit } from 'react-icons/md';
import { DragEndFields } from '../utils/drag';

const DragableItems = ({ formFields, setFormFields, setFieldName, setFieldType, setEditingIndex, setSelectOptions }) => {
    const handleDragEnd = (result) => {
        DragEndFields(result, formFields, setFormFields);
    };

    const handleEditField = (index) => {
        const fieldToEdit = formFields[index];
        setFieldName(fieldToEdit.name);
        setFieldType(fieldToEdit.type);
        setEditingIndex(index);

        if (fieldToEdit.type === 'select') {
            setSelectOptions(fieldToEdit.options || []);
        }
    };

    const handleRemoveField = (index) => {
        const updatedFields = [...formFields];
        updatedFields.splice(index, 1);
        setFormFields(updatedFields);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="formFields">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef} className="mt-2">
                        {formFields.map((field, index) => (
                            <Draggable key={field.name} draggableId={field.name} index={index}>
                                {(provided) => (
                                    <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="flex mb-2 items-center p-2 border border-gray-300 rounded"
                                    >
                                        <button type="button" onClick={() => handleEditField(index)} className="button mr-2">
                                            <MdEdit />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveField(index)}
                                            className="button bg-red-500 mr-2"
                                        >
                                            <MdDelete />
                                        </button>
                                        <span className="px-2 py-1 border border-gray-300 rounded">
                      {field.name} ({field.type})
                    </span>
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DragableItems;
