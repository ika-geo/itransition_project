const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto py-12">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the Form Builder</h1>

                <div className="flex flex-col md:flex-row md:space-x-8">


                    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0 w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Latest Templates</h2>
                        <ul className="space-y-2">
                            <li className="text-gray-600 hover:text-primary transition-colors">Template 1</li>
                            <li className="text-gray-600 hover:text-primary transition-colors">Template 2</li>
                            <li className="text-gray-600 hover:text-primary transition-colors">Template 3</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0 w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Popular Templates</h2>
                        <ul className="space-y-2">
                            <li className="text-gray-600 hover:text-primary transition-colors">Popular Template 1</li>
                            <li className="text-gray-600 hover:text-primary transition-colors">Popular Template 2</li>
                            <li className="text-gray-600 hover:text-primary transition-colors">Popular Template 3</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tag Cloud</h2>
                        <div className="flex flex-wrap gap-2">

                            <div className="relative overflow-hidden px-3 py-1 rounded-full text-sm">
                                <span className='text-primary'>#Tag1</span>
                                <span className='opacity-30 bg-primary absolute h-full w-full top-0 left-0'></span>
                            </div>

                            <div className="relative overflow-hidden px-3 py-1 rounded-full text-sm">
                                <span className='text-green-500'>#Tag1</span>
                                <span className='opacity-30 bg-green-500 absolute h-full w-full top-0 left-0'></span>
                            </div>

                            <div className="relative overflow-hidden px-3 py-1 rounded-full text-sm">
                                <span className='text-pink-500'>#Tag1</span>
                                <span className='opacity-30 bg-pink-500 absolute h-full w-full top-0 left-0'></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
