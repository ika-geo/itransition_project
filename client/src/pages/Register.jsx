import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ChangeLanguage from "../components/ChangeLanguage.jsx";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../store/features/UserSlice.js";
import {toast} from "react-toastify";

const Register = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loading = useSelector(state=>state.user.loading)
    const userName = useSelector(state=>state.user?.user?.name)

    useEffect(() => {
        if (userName){
            navigate('/')
        }
    }, [userName]);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSetName = (e) => {
        setName(e.target.value)
    }

    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSetPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name ||!email ||!password) return toast.warning('Fill all fields')
        dispatch(register({name, email, password}))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                <div className='absolute top-1 right-1'>
                    <ChangeLanguage/>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-center">{t('loginRegistration.registration.title')}</h2>
                <form>

                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="name">
                            {t('loginRegistration.registration.name')}
                        </label>
                        <input
                            value={name}
                            onChange={e => handleSetName(e)}
                            type="text"
                            id="name"
                            className="shadow border rounded w-full py-2 px-3 focus:outline-none"
                            placeholder={t('loginRegistration.registration.namePlaceHolder')}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="email">
                            {t('loginRegistration.email')}
                        </label>
                        <input
                            value={email}
                            onChange={e => handleSetEmail(e)}
                            type="email"
                            id="email"
                            className="shadow border rounded w-full py-2 px-3 focus:outline-none"
                            placeholder={t('loginRegistration.emailPlaceHolder')}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="password">
                            {t('loginRegistration.password')}
                        </label>
                        <input
                            value={password}
                            onChange={e => handleSetPassword(e)}
                            type="password"
                            id="password"
                            className="shadow border rounded w-full py-2 px-3 focus:outline-none"
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
                            {loading? t('loading') : t('loginRegistration.registration.registerBtn')}
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-600 text-sm mt-4">
                    {t('loginRegistration.registration.redirectToLogin.text')}
                    <Link to="/login" className="text-primary font-semibold">
                        {t('loginRegistration.registration.redirectToLogin.linkText')}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;