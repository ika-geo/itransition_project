import React from 'react';

import {useTranslation} from "react-i18next";

const UserItemHead = () => {

    const {t} = useTranslation()

    return (
        <div className="grid grid-cols-12 bg-primary text-white">
            <p className="col-span-1 p-4 text-center"></p>
            <p className="border-l col-span-2 p-4 text-center">{t('usersPage.name')}</p>
            <p className="border-l col-span-2 p-4 text-center">{t('usersPage.status')}</p>
            <p className="border-l col-span-2 p-4 text-center">{t('usersPage.role')}</p>
            <p className="border-l col-span-3 p-4 text-center">{t('usersPage.email')}</p>
            <p className="border-l col-span-2 p-4 text-center">{t('usersPage.actions')}</p>
        </div>
    );
};

export default UserItemHead;