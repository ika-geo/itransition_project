import React from 'react';

import {Link, Outlet} from "react-router-dom";
import {useTranslation} from "react-i18next";

import NavMenu from "./NavMenu.jsx";
import {useSelector} from "react-redux";

const Header = () => {

    const {t} = useTranslation()
    const user = useSelector(state=>state.auth.user)

    return (
        <div className='container py-5'>
            <header className='flex justify-between mb-16'>
                <Link className='text-primary text-2xl font-bold' to='/'>{t('home')}</Link>
                <NavMenu/>
            </header>
            <Outlet/>
            <footer className='mt-8'>
                {
                    user ? <Link className='block ml-auto w-fit button' to='jira'>Jira</Link> : null
                }
            </footer>
        </div>

    );
};

export default Header;