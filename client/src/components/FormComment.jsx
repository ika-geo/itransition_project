import React, { useEffect, useState } from 'react';
import FormCommentItem from './FormCommentItem.jsx';
import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SERVER_URL.replace('/api', '')

const FormComment = ({ formId, user }) => {
    const [comment, setComment] = useState('');
    const [socket, setSocket] = useState(null);
    const [comments, setComments] = useState([]);

    const handleSetComment = (e) => setComment(e.target.value);
    useEffect(() => {
        const socketInstance = io(SOCKET_URL, { query: { formId } });
        setSocket(socketInstance);
        socketInstance.on('updateComments', (data) => {
            setComments(data);
        });
        socketInstance.emit('getComments', formId);
        return () => {
            socketInstance.disconnect();
        };
    }, [formId]);
    const handleSaveComment = () => {
        if (comment.trim()) {
            socket.emit('addComment', {
                formId,
                userId: user.id,
                comment,
            });
            setComment('');
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Comments</h2>
            {user && (
                <div className="mb-4">
                    <textarea
                        value={comment}
                        onChange={handleSetComment}
                        className="input mb-2"
                        placeholder="Write a comment..."
                    />
                    <button
                        onClick={handleSaveComment}
                        className="buttonSlim w-full mb-2"
                    >
                        Write comment
                    </button>
                </div>
            )}
            {comments.length > 0 ? (
                comments.map((comment, index) => {
                    return (
                        <FormCommentItem key={index} comment={comment} />
                    )
                })
            ) : (
                <p>No comments</p>
            )}
        </div>
    );
};

export default FormComment;
