import React from 'react';

import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const FormCommentItem = ({comment, admin = false, deleteComment = null}) => {

    const {t} = useTranslation()

    const author = comment.user.id===comment.form.userId

    return (
        <div className="mb-8">
            <div
                className={"p-6 rounded-lg shadow-gray-500 shadow-2xl "+ (author&&!admin?"bg-lightPrimary":"bg-white")}>
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-bold text-gray-500 mb-1">
                            {t('author')}: <span className="text-gray-800 font-bold">{comment.user.name} {author&&!admin?` (${t('formAuthor')})`:""}</span>
                        </p>

                        {admin && (
                            <p className="text-sm font-semibold text-gray-500 mt-2">
                                {t('formTitle')}: <Link to={`/forms/${comment.form.id}`} className="text-primary font-bold">{comment.form.title}</Link>
                            </p>
                        )}

                    </div>
                    {admin && (
                        <button
                            onClick={() => deleteComment(comment.id)}
                            className="ml-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors duration-200"
                        >
                            {t('delete')}
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