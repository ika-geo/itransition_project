import React from 'react';
import {Link, Outlet} from "react-router-dom";
import NavMenu from "./NavMenu.jsx";


const Header = () => {
    return (
        <div>

            <header className='flex justify-between container py-5'>
                <Link to='/'>Home page</Link>
                <NavMenu/>
            </header>
            <Outlet/>

        </div>

    );
};

export default Header;