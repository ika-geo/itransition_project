import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    addAdmin,
    blockUser, deleteUser,
    getAllUsers,
    removeAdmin,
    selfDeleteFromUsers,
    unblockUser
} from "../store/features/UsersSlice.js";
import {useTranslation} from "react-i18next";
import {getMe, logout} from "../store/features/AuthSlice.js";
import {useNavigate} from "react-router-dom";
import UserItem from "../components/users/UserItem.jsx";
import UserItemHead from "../components/users/UserItemHead.jsx";

const Users = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {t} = useTranslation()
    const users = useSelector(state => state.users.users)
    const error = useSelector(state => state.users.error)
    const user = useSelector(state => state.auth.user)

    const handleGetAllUsers = async ()=>{
        await dispatch(getAllUsers())
        dispatch(selfDeleteFromUsers(user.id))
    }

    useEffect(() => {
        handleGetAllUsers()
    }, [])

    const handleCheckMe = async (id) => {
        if (id === user.id) {
            navigate('/')
            dispatch(getMe({id: id}))
        }
    }

    const handleLogout = ()=>{
        dispatch(logout())
        navigate('/')
    }

    const handleRemoveAdmin = async (id) => {
        await dispatch(removeAdmin(id))
        handleCheckMe(id)
        handleGetAllUsers()
    }

    const handleAddAdmin = async (id) => {
        await dispatch(addAdmin(id))
        handleGetAllUsers()
    }

    const handleBlockUser = async (id)=>{
        await dispatch(blockUser(id))
        if (id===user.id) return handleLogout()
        handleGetAllUsers()
    }

    const handleUnblockUser = async (id)=>{
        await dispatch(unblockUser(id))
        handleGetAllUsers()
    }

    const handleDeleteUser = async (id)=>{
        await dispatch(deleteUser(id))
        if (id===user.id) return handleLogout()
        handleGetAllUsers()
    }

    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">{t('usersPage.title')}</h1>

                <div className="bg-white shadow-md rounded-lg p-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">

                        <UserItemHead/>

                        <ol className='grid'>
                            <UserItem
                                selfUser={true}
                                userItem={user}
                                handleRemoveAdmin={handleRemoveAdmin}
                                handleAddAdmin={handleAddAdmin}
                                handleBlockUser={handleBlockUser}
                                handleUnblockUser={handleUnblockUser}
                                handleDeleteUser={handleDeleteUser}
                            />

                            {
                                error ? (
                                    <p className="p-4 text-center">Can't fetch Users</p>
                                ) : (
                                    users.map((userItem, index) => (
                                            <UserItem
                                                key={userItem.id}
                                                index={index}
                                                userItem={userItem}
                                                handleRemoveAdmin={handleRemoveAdmin}
                                                handleAddAdmin={handleAddAdmin}
                                                handleBlockUser={handleBlockUser}
                                                handleUnblockUser={handleUnblockUser}
                                                handleDeleteUser={handleDeleteUser}
                                            />
                                        )
                                    )
                                )
                            }
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;