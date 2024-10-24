import React from 'react';
import {Link, Outlet} from "react-router-dom";
import NavMenu from "./NavMenu.jsx";


const Header = () => {
    return (
        <div className='container py-5'>
            <header className='flex justify-between mb-16'>
                <Link to='/'>Home page</Link>
                <NavMenu/>
            </header>
            <Outlet/>
        </div>

    );
};

export default Header;