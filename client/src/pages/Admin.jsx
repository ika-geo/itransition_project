import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";


const AdminPage = () => {

    const [panelItems, setPanelItems] = useState(null)
    const {t} = useTranslation()

    useEffect(() => {
        setPanelItems(t('adminDashboard', { returnObjects: true }));
    }, [t]);

    if (!panelItems) return

    return (
            <div>
                <h1 className="mainTitle">{panelItems.header}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {panelItems?.items.map(item => {
                        return (
                            <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-700">{item.title}</h2>
                                <p className="text-gray-600 mb-8">{item.description}</p>
                                <Link
                                    to={item.url}
                                    className="button">
                                    {panelItems.buttonTitle}
                                </Link>
                            </div>
                        );
                    })}

                </div>
            </div>
    );
};

export default AdminPage;
