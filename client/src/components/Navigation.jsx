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
        <div>
            <nav className='flex gap-x-2'>
                {navItems?.map((navItem) => {
                    return (
                        <Link
                            className={pathname===navItem.url ? 'text-primary' : ''}
                            key={navItem.label}
                            to={navItem.url}>
                            {navItem.label}
                        </Link>
                    );
                })}
            </nav>

            {language.map((lng) => (
                <button disabled={i18n.language===lng} className={'mr-2 '+(i18n.language===lng?"bg-red-600":"cursor-pointer")} key={lng} onClick={() => changeLanguage(lng)}>
                    {t(`${lng}`)}
                </button>
            ))}
        </div>
    );
};

export default Navigation;