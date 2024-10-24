import React, {useEffect, useState} from 'react';

import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const NavMenuItems = () => {

    const pathname = useLocation().pathname;
    const {t} = useTranslation()

    let user = useSelector(state => state.auth.user)

    const [navItems, setNavItems] = useState([])

    useEffect(() => {
        setNavItems(t('nav', {returnObjects: true}));
    }, [t]);

    return (
        <nav className='flex gap-x-2'>
            {navItems?.map((navItem) => {
                if (user?.role !== 'admin' && navItem.url === '/admin'||
                    !user && navItem.url === '/myPage'
                ) return null
                return (
                    <Link
                        key={navItem.label}
                        className={'font-semibold ' + (pathname === navItem.url ? 'text-primary' : '')}
                        to={navItem.url}>
                        {navItem.label}
                    </Link>
                );
            })}
        </nav>
    )
};

export default NavMenuItems;