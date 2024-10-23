import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Loading from "../components/Loading.jsx";
import {deleteComment, deleteCommentLocally, getAllComments, refreshComments} from "../store/features/CommentSlice.js";
import FormCommentItem from "../components/FormCommentItem.jsx";

const HandleCommentsAdmin = () => {

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

    console.log(comments)

    if (loading) return <Loading/>
    if (!comments) return

    return (
        <div className='container'>
            <h1 className='mainTitle'>All Comments</h1>
            <div className='grid grid-cols-3 gap-4'>
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