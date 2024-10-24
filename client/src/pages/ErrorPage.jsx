import {Link} from "react-router-dom";

import {useTranslation} from "react-i18next";

const ErrorPage = () => {

    const {t} = useTranslation()

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-primary tracking-wide">404</h1>
                <h2 className="text-4xl font-bold text-gray-800 mt-4">{t('pageNotFound')}</h2>
                <p className="text-lg text-gray-600 mt-2">{t('pageNoExist')}</p>

                <div className="mt-6">
                    <Link to="/" className="bg-primary text-white px-6 py-3 rounded-md text-lg transition-colors">
                        {t('backHome')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;