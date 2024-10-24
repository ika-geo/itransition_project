import React from 'react';

import {ClockLoader} from "react-spinners";

const Loading = () => {
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-gray-500 opacity-50 flex items-center justify-center">
            <ClockLoader size={100}/>
        </div>
    );
};

export default Loading;