import {Link, useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import ChangeLanguage from "../components/ChangeLanguage.jsx";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {login} from "../store/features/AuthSlice.js";

const Login = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loading = useSelector(state=>state.auth.loading)
    const userName = useSelector(state=>state.auth?.user?.name)

    useEffect(() => {
        if (userName){
            navigate('/')
        }
    }, [userName]);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSetPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email ||!password) return toast.warning('Fill all fields')
        await dispatch(login({email, password}))

        // if (response.meta.requestStatus==='fulfilled'){
        //  navigate('/')
        // }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                <div className='absolute top-1 right-1'>
                    <ChangeLanguage/>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-center">{t('loginRegistration.login.title')}</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            {t('loginRegistration.email')}
                        </label>
                        <input
                            value={email}
                            onChange={e=>handleSetEmail(e)}
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder={t('loginRegistration.emailPlaceHolder')}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            {t('loginRegistration.password')}
                        </label>
                        <input
                            value={password}
                            onChange={e=>handleSetPassword(e)}
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder={t('loginRegistration.passwordPlaceHolder')}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            disabled={loading}
                            onClick={handleSubmit}
                            type="submit"
                            className="button font-semibold w-full"
                        >
                            {loading? t('loading') : t('loginRegistration.login.loginBtn')}
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-600 text-sm mt-4">
                    {t('loginRegistration.login.redirectToRegister.text')}
                    <Link to="/register" className="text-primary font-semibold">
                        {t('loginRegistration.login.redirectToRegister.linkText')}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
