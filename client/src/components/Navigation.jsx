import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {Link, useLocation} from "react-router-dom";

const Navigation = () => {
    const pathname = useLocation().pathname;
    const language =['en', 'ge']
    const [navItems, setNavItems] = useState([])
    const {t} = useTranslation()

    useEffect(() => {
        setNavItems(t('nav', { returnObjects: true }));
    }, [t]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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


            <select
                className="bg-primary text-white rounded py-1 px-3 cursor-pointer"
                onChange={e => changeLanguage(e.target.value)}
            >
                {language.map((lng) => (
                    <option
                        key={lng}
                        value={lng}
                    >
                        {t(`${lng}`)}
                    </option>
                ))}
            </select>


        </div>
    );
};

export default Navigation;