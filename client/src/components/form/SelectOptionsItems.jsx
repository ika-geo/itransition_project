import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { MdDelete, MdEdit } from 'react-icons/md';
import { DragEndFields } from '../utils/drag';

const SelectOptionsItems = ({ selectOptions, setSelectOptions, setOptionValue, setEditingOptionIndex }) => {
    const handleDragEnd = (result) => {
        DragEndFields(result, selectOptions, setSelectOptions);
    };

    const handleEditOption = (index) => {
        setOptionValue(selectOptions[index]);
        setEditingOptionIndex(index);
    };

    const handleRemoveOption = (index) => {
        const updatedOptions = [...selectOptions];
        updatedOptions.splice(index, 1);
        setSelectOptions(updatedOptions);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="options">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef} className="mt-2">
                        {selectOptions.map((option, index) => (
                            <Draggable key={option} draggableId={option} index={index}>
                                {(provided) => (
                                    <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="flex mb-2 items-center p-2 border border-gray-300 rounded"
                                    >
                                        <button type="button" onClick={() => handleEditOption(index)} className="button mr-2">
                                            <MdEdit />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveOption(index)}
                                            className="button bg-red-500 mr-2"
                                        >
                                            <MdDelete />
                                        </button>
                                        <span className="px-2 py-1 border border-gray-300 rounded">{option}</span>
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

export default SelectOptionsItems;