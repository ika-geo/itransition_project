import React from 'react';
import {useTranslation} from "react-i18next";


const UserItem = ({userItem, index=1, selfUser=false, handleRemoveAdmin, handleAddAdmin}) => {
    const {t} = useTranslation()
    return (
        <li
            key={index}
            className={"grid grid-cols-12 " + (selfUser ? "bg-lightPrimary hover:bg-opacity-10" : "hover:bg-gray-100")}>
            <p className="border col-span-1 px-4 py-2 text-center">{selfUser? index : index+2}</p>
            <p className="border col-span-2 px-4 py-2 text-center">{userItem.name}{selfUser && ` (${t('usersPage.me')})`} </p>
            <p className="border col-span-3 px-4 py-2 text-center capitalize">
                {userItem.role === 'admin' ? t('usersPage.admin') : t('usersPage.user')}
            </p>
            <p className="border col-span-3 px-4 py-2 text-center">{userItem.email}</p>
            <div className="border col-span-3 px-4 py-2 text-center">
                {
                    userItem.role === "admin"
                        ? <button onClick={() => handleRemoveAdmin(userItem.id)}
                                  className="buttonSlim bg-red-500">{t('usersPage.removeAdminBtn')}</button>
                        :
                        <button onClick={() => handleAddAdmin(userItem.id)}
                                className="buttonSlim bg-blue-500">{t('usersPage.setAdminBtn')}</button>
                }
            </div>
        </li>
    );
};

export default UserItem;