const User = () => {
    const templates = [
        { name: 'Template 1', description: 'This is the first template', forms: 12 },
        { name: 'Template 2', description: 'This is the second template', forms: 8 },
        { name: 'Template 3', description: 'This is the third template', forms: 5 },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">User Profile</h1>

                <div className="bg-white shadow-md rounded-lg p-8">
                    <h2 className="text-xl font-semibold mb-6 text-gray-700">Your Templates</h2>

                    <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
                        <thead className="bg-primary text-white">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Description</th>
                            <th className="py-3 px-4">Forms Filled</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {templates.map((template, index) => (
                            <tr key={index} className="hover:bg-gray-100 transition-colors">
                                <td className="border px-4 py-2">{template.name}</td>
                                <td className="border px-4 py-2">{template.description}</td>
                                <td className="border px-4 py-2 text-center">{template.forms}</td>
                                <td className="border px-4 py-2 text-center">
                                    <button className="button px-3 py-1 mr-2">Edit</button>
                                    <button className="button px-3 py-1 bg-red-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;