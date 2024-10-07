import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";


const AdminPage = () => {

    const [panelItems, setPanelItems] = useState(null)
    const {t} = useTranslation()

    useEffect(() => {
        setPanelItems(t('adminDashboard', { returnObjects: true }));
    }, [t]);

    console.log(panelItems)

    if (!panelItems) return

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">{panelItems.header}</h1>
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
        </div>
    );
};

export default AdminPage;