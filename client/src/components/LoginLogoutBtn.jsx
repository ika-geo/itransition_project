import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {logout} from "../store/features/UserSlice.js";




const LoginLogoutBtn = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(state=>state.user?.user?.name)

    const loginTitle = t('loginRegistration.login.title')
    const logoutTitle = t('logOut')

    const handleLogOut = ()=>{
        dispatch(logout())
        navigate('/')
    }

    return (
        <>
            {userName ? (
                <div className='flex items-center'>
                    <h2 className='text-3xl font-semibold text-primary mr-2'>{userName}</h2>
                    <button className='button px-2 py-2 bg-red-500' onClick={handleLogOut}>{logoutTitle}</button>
                </div>
            ) : (
                <Link className='button px-2 py-2' to='/login'>{loginTitle}</Link>
            )}
        </>
    );
};

export default LoginLogoutBtn;