import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Link, useLocation} from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage.jsx";
import LoginLogoutBtn from "./LoginLogoutBtn.jsx";

const Navigation = () => {
    const pathname = useLocation().pathname;

    const [navItems, setNavItems] = useState([])
    const {t} = useTranslation()

    useEffect(() => {
        setNavItems(t('nav', { returnObjects: true }));
    }, [t]);

    return (
        <div className='flex items-center gap-x-6'>
            <nav className='flex gap-x-2'>
                {navItems?.map((navItem) => {
                    return (
                        <Link
                            className={'font-semibold '+(pathname === navItem.url ? 'text-primary' : '')}
                            key={navItem.label}
                            to={navItem.url}>
                            {navItem.label}
                        </Link>
                    );
                })}
            </nav>

            <ChangeLanguage/>
            <LoginLogoutBtn/>

        </div>
    );
};

export default Navigation;