import React from 'react';

const FormCommentItem = ({comment}) => {
    console.log(comment)
    return (
        <div className="mb-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-sm font-bold text-gray-500 mb-1">Author: <span className="text-gray-700">{comment.user.name}</span>
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">{comment.comment}</p>
            </div>
        </div>
    );
};

export default FormCommentItem;