import React from 'react';

import {useTranslation} from "react-i18next";

const UserItem = ({userItem, index=1, selfUser=false, handleRemoveAdmin, handleAddAdmin, handleUnblockUser, handleBlockUser, handleDeleteUser}) => {

    const {t} = useTranslation()

    return (
        <li
            key={index}
            className={"grid grid-cols-12 " + (selfUser ? "bg-lightPrimary" : "")}>
            <p className="border col-span-1 px-4 py-2">{selfUser? index : index+2}</p>
            <p className="border col-span-2 px-4 py-2">{userItem.name}{selfUser && ` (${t('usersPage.me')})`} </p>

            <div className="border col-span-2 px-4 py-2">
                <p className='mb-2'>{userItem.blocked?t('usersPage.blocked'):t('usersPage.unblocked')}</p>
                {!selfUser &&
                userItem.blocked ?
                    <button onClick={() => handleUnblockUser(userItem.id)}
                            className="buttonSlim bg-green-500">{t('usersPage.unblockUserBtn')}</button>
                    :
                    <button onClick={() => handleBlockUser(userItem.id)}
                            className="buttonSlim bg-red-500">{t('usersPage.blockUserBtn')}</button>
                }
            </div>

            <p className="border col-span-2 px-4 py-2 capitalize">
                <p className='mb-2'>{userItem.role === 'admin' ? t('usersPage.admin') : t('usersPage.user')}</p>
                {
                    userItem.role === "admin"
                        ? <button onClick={() => handleRemoveAdmin(userItem.id)}
                                  className="buttonSlim bg-red-500">{t('usersPage.removeAdminBtn')}</button>
                        :
                        <button onClick={() => handleAddAdmin(userItem.id)}
                                className="buttonSlim bg-blue-500">{t('usersPage.setAdminBtn')}</button>
                }
            </p>
            <p className="border col-span-3 px-4 py-2">{userItem.email}</p>
            <div className="border col-span-2 px-4 py-2">
                <button className='button bg-red-500' onClick={() => handleDeleteUser(userItem.id)}>{t('usersPage.deleteUserBtn')}</button>
            </div>
        </li>
    );
};

export default UserItem;