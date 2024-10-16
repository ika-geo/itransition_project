import React from 'react';
import {Link} from "react-router-dom";

const FormCardItem = ({form, editable, handleEdit, handleDelete}) => {
    return (
        <div
            key={form.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <Link to={`/forms/${form.id}`} className="text-xl font-semibold text-gray-700 mb-2">{form.title}</Link>

            {!editable ?
                <p className="text-sm text-gray-500 mb-4">Author: {form.user?.name}</p> : null
            }

            <p className="text-gray-600 mb-4">{form.description}</p>
            <div className="flex mb-2 gap-2">
                {
                    form.tags.map(tag => {
                        return (
                            <span
                                key={tag}
                                className="bg-lightPrimary text-primary py-1 px-3 rounded">
                                            {tag}
                                        </span>
                        )
                    })
                }
            </div>
            {
                editable ? <p className="text-sm text-gray-500">
                        Created on: {new Date(form.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: 'numeric',
                    })}
                    </p>
                    : null
            }
            {
                editable ?
                    <div className='flex justify-between mt-4'>
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
                    :
                    null
            }

        </div>
    );
};

export default FormCardItem;