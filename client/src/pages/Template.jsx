const Template = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">Template Title</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        This is the template description where you can add Markdown content to format this section.
                    </p>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Questions</h2>
                        <ul className="space-y-4">
                            <li className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <span className="text-gray-800 font-semibold">Question 1:</span> What is your name?
                            </li>
                            <li className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <span className="text-gray-800 font-semibold">Question 2:</span> How old are you?
                            </li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Comments</h2>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <p className="text-gray-600">This is a sample comment on this template.</p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template;