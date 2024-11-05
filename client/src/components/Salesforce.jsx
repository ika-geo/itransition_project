import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {salesForce} from "../store/features/AuthSlice.js";
import Loading from "./Loading.jsx";
import {validateSalesForceData} from "../utils/validation.js";

const Salesforce = ({setOpenSalesforce}) => {

    const {t} = useTranslation()
    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)
    const loading = useSelector(state => state.auth.loading)

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    useEffect(() => {
        if (user){
            reset({
                name: user.name,
                email: user.email
            })
        }
    }, [user]);

    const handleClose = async () => {
        setOpenSalesforce(false)
    }

    const handleCreate = (data) => {
        if (!validateSalesForceData(data, t)) return
        dispatch(salesForce({data:{...data, userId: user.id}, handleNavigate: handleClose}))
    }

    if (loading) return <Loading/>
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-gray-500 opacity-100 flex items-center justify-center'>
            <div>
                <div className='rounded p-4 bg-white'>
                    <h1 className='text-3xl mb-4'>{t('salesforceIntegration')}</h1>
                    <form onSubmit={handleSubmit(handleCreate)}>

                        <div className='mb-4'>
                            <label>
                                <p className='mb-2'>{t('name')}<span className='text-red-500'> *</span></p>
                                <input disabled={true} className='input' {...register('name')} />
                            </label>
                        </div>

                        <div className='mb-4'>
                            <label>
                                <p className='mb-2'>{t('email')}<span className='text-red-500'> *</span></p>
                                <input disabled={true} className='input' {...register('email')} />
                            </label>
                        </div>

                        <div className='mb-4'>
                            <label>
                                <p className='mb-2'>{t('phone')}</p>
                                <input className='input' {...register('phone')} />
                            </label>
                        </div>

                        <div className='mb-4'>
                        <label>
                                <p className='mb-2'>{t('note')}</p>
                                <input className='input' {...register('title')} />
                            </label>
                        </div>

                        <div className='flex justify-between gap-4 mt-6'>
                            <button
                                onClick={handleClose}
                                className='button bg-red-500'>{t('cancel')}
                            </button>
                            <button type="submit" className='button'>{t('create')}</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Salesforce;