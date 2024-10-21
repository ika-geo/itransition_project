import React from 'react';


const FilledFormCardItem = ({form, handleEdit, handleDelete}) => {
    return (
        <div
            className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <h1 className="block mb-2 text-xl font-semibold text-gray-700">{form?.form.title}</h1>
            <p className="text-sm text-gray-500 mb-4">Filled by: {form.userItem.name}</p>
            <p className="text-sm text-gray-500 mb-4">
                Filled on: {new Date(form.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: 'numeric',
            })}
            </p>

            <div className='mt-auto flex justify-between'>
                <button
                    onClick={() => handleEdit(form.id)}
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(form.id)}
                    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FilledFormCardItem;