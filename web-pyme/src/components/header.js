import React from 'react';
import './header.css';
import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav id='menu'>
                <ul>
                    <li><Link to="/web-pyme/src/pages/start.js" > INICIO </Link></li>
                    <li><Link to="/web-pyme/src/pages/store.js" > TIENDA </Link></li>
                </ul>
            </nav>
            <Outlet/>
        </header>
    );
};

export default Header;
