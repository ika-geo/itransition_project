import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Navigation from "./Navigation.jsx";


const Header = () => {
    return (
        <div className='light-mode'>
            <header className='flex justify-between container'>

                <Link to='/'>Home page</Link>


                <Navigation/>

            </header>
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export default Header;