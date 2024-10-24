import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import Loading from "../components/Loading.jsx";
import FormCommentItem from "../components/FormCommentItem.jsx";
import {deleteComment, deleteCommentLocally, getAllComments, refreshComments} from "../store/features/CommentSlice.js";

const HandleCommentsAdmin = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()

    const comments = useSelector(state=>state.comments.comments)
    const loading = useSelector(state=>state.comments.loading)

    useEffect(() => {
        dispatch(getAllComments())
    }, []);

    const handleDeleteComment = async (id)=>{
        dispatch(deleteCommentLocally(id))
        await dispatch(deleteComment({id}))
        dispatch(refreshComments())
    }

    if (loading) return <Loading/>
    if (!comments) return

    return (
        <div>
            <h1 className='mainTitle'>{t('allComments')}</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    comments.length === 0?
                        <h2 className='text-2xl'>{t('noComments')}</h2>
                        :
                        null
                }
                {comments.map(comment => {
                    return (
                        <div
                            className='col-span-1'
                            key={comment.id}
                        >
                            <FormCommentItem
                                comment={comment}
                                admin={true}
                                deleteComment={handleDeleteComment}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default HandleCommentsAdmin;