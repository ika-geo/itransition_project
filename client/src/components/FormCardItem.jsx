import React from 'react';
import {Link} from "react-router-dom";
import parse from "html-react-parser";
import {useSelector} from "react-redux";
import {getTagLabelByValue} from "../utils/tagsAndTopics.js";
import getDate from "../utils/getDate.js";

const FormCardItem = ({form, editable=false, handleEdit, handleDelete, adminRole=false}) => {
    const tags = useSelector(state=>state.forms.tags)

    return (
        <div
            className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <Link to={`/forms/${form.id}`} className="block mb-2 text-xl font-semibold text-gray-700">{form.title}</Link>

            {!editable || adminRole ?
                <p className="text-sm text-gray-500 mb-4">Author: {form.user?.name}</p> : null
            }

            <div className="text-gray-600 line-clamp-3 mb-4">{parse(form.description)}</div>
            <div className="flex mb-2 gap-2">
                {
                    form.tags.map(tag => {
                        return (
                            <span
                                key={tag}
                                className="bg-lightPrimary text-primary py-1 px-3 rounded">
                                            {getTagLabelByValue(tags, tag)}
                                        </span>
                        )
                    })
                }
            </div>
            {
                editable ? <p className="text-sm text-gray-500 mb-4">
                        Created on: {getDate(form.createdAt)}
                    </p>
                    : null
            }
            {
                editable ?
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
                    :
                    null
            }
        </div>
    );
};

export default FormCardItem;