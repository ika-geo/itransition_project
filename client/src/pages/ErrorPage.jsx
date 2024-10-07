const ErrorPage = () => {
    return (
        <div className="mt-40 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-primary tracking-wide">404</h1>
                <h2 className="text-4xl font-bold text-gray-800 mt-4">Oops! Page Not Found</h2>
                <p className="text-lg text-gray-600 mt-2">The page you are looking for does not exist.</p>

                <div className="mt-6">
                    <a href="/" className="bg-primary text-white px-6 py-3 rounded-md text-lg transition-colors">
                        Go Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;