import React from 'react';

import {Link, Outlet} from "react-router-dom";
import {useTranslation} from "react-i18next";

import NavMenu from "./NavMenu.jsx";

const Header = () => {

    const {t} = useTranslation()

    return (
        <div className='container py-5'>
            <header className='flex justify-between mb-16'>
                <Link className='text-primary text-2xl font-bold' to='/'>{t('home')}</Link>
                <NavMenu/>
            </header>
            <Outlet/>
        </div>

    );
};

export default Header;