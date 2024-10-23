import React from 'react';

const FormCommentItem = ({comment, admin = false, deleteComment = null}) => {
    const author = comment.user.id===comment.form.userId
    return (
        <div className="mb-8">
            <div
                className={"p-6 rounded-lg shadow-gray-500 shadow-2xl "+ (author&&!admin?"bg-lightPrimary":"bg-white")}>
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-bold text-gray-500 mb-1">
                            Author: <span className="text-gray-800 font-bold">{comment.user.name} {author&&!admin?" (form author)":""}</span>
                        </p>
                        {admin && (
                            <p className="text-sm font-semibold text-gray-500 mt-2">
                                Form Title: <span className="text-gray-800 font-bold">{comment.form.title}</span>
                            </p>
                        )}
                    </div>
                    {admin && (
                        <button
                            onClick={() => deleteComment(comment.id)}
                            className="ml-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors duration-200"
                        >
                            Delete
                        </button>
                    )}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-4 border-t border-gray-200 pt-4">
                    {comment.comment}
                </p>
            </div>
        </div>

    );
};

export default FormCommentItem;