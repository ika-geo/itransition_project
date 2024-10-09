import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addAdmin, getAllUsers, removeAdmin} from "../store/features/UsersSlice.js";
import {useTranslation} from "react-i18next";
import {getMe} from "../store/features/AuthSlice.js";
import {useNavigate} from "react-router-dom";


const Users = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {t} = useTranslation()
    const users = useSelector(state => state.users.users)
    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const handleGetMe = async (id) => {
        if (id === user.id) dispatch(getMe({id: id}))
        navigate('/')
    }

    const handleRemoveAdmin = async (id) => {
        await dispatch(removeAdmin(id))
        handleGetMe(id)
        dispatch(getAllUsers())
    }

    const handleAddAdmin = async (id) => {
        await dispatch(addAdmin(id))
        dispatch(getAllUsers())
    }

    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">{t('usersPage.title')}</h1>

                <div className="bg-white shadow-md rounded-lg p-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">

                        <div className="grid grid-cols-12 bg-primary text-white">
                            <p className="col-span-1 p-4 text-center"></p>
                            <p className="col-span-2 p-4 text-center">{t('usersPage.name')}</p>
                            <p className="col-span-3 p-4 text-center">{t('usersPage.role')}</p>
                            <p className="col-span-3 p-4 text-center">{t('usersPage.email')}</p>
                            <p className="col-span-3 p-4 text-center">{t('usersPage.actions')}</p>
                        </div>

                        {
                            <div
                                className={"grid grid-cols-12 " + (user.id === user.id ? "bg-lightPrimary hover:bg-opacity-10" : "hover:bg-gray-100")}>
                                <p className="border col-span-1 px-4 py-2 text-center">1</p>
                                <p className="border col-span-2 px-4 py-2 text-center">{user.name} {t('usersPage.me')} </p>
                                <p className="border col-span-3 px-4 py-2 text-center capitalize">
                                    {t('usersPage.admin')}
                                </p>
                                <p className="border col-span-3 px-4 py-2 text-center">{user.email}</p>
                                <div className="border col-span-3 px-4 py-2 text-center">
                                <button onClick={() => handleRemoveAdmin(user.id)} className="buttonSlim bg-red-500">{t('usersPage.removeAdminBtn')}</button>
                                </div>
                            </div>
                        }

                        <ol className='grid'>
                            {users?.map((userItem, index) => {
                                if (userItem.id === user.id) return
                                return (<li
                                        key={index}
                                        className={"grid grid-cols-12 " + (userItem.id === user.id ? "bg-lightPrimary hover:bg-opacity-10" : "hover:bg-gray-100")}>
                                        <p className="border col-span-1 px-4 py-2 text-center">{index + 1}</p>
                                        <p className="border col-span-2 px-4 py-2 text-center">{userItem.name}{userItem.id === user.id && ` (${t('usersPage.me')})`} </p>
                                        <p className="border col-span-3 px-4 py-2 text-center capitalize">
                                            {userItem.role === 'admin' ? t('usersPage.admin') : t('usersPage.user')}
                                        </p>
                                        <p className="border col-span-3 px-4 py-2 text-center">{userItem.email}</p>
                                        <div className="border col-span-3 px-4 py-2 text-center">
                                            {
                                                userItem.role === "admin"
                                                    ? <button onClick={() => handleRemoveAdmin(userItem.id)}
                                                              className="buttonSlim bg-red-500">{t('usersPage.removeAdminBtn')}</button>
                                                    :
                                                    <button onClick={() => handleAddAdmin(userItem.id)}
                                                            className="buttonSlim bg-blue-500">{t('usersPage.setAdminBtn')}</button>
                                                }
                                            </div>
                                        </li>
                                    )
                                }
                            )}
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;