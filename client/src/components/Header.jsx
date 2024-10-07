import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Navigation from "./Navigation.jsx";


const Header = () => {
    return (
        <div className='bg-bgColor min-h-screen'>

            <header className='flex justify-between container py-5'>

                <Link to='/'>Home page</Link>

                <Navigation/>

            </header>

            <Outlet/>

        </div>

    );
};

export default Header;