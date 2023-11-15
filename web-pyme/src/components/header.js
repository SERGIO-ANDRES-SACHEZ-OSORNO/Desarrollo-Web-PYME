import React from 'react';
import './header.css'
import { Link } from "react-router-dom"

const Header =()=>{
    return (
        <header>
            <nav id='menu'>
                <ul>
                    <li>
                        <Link to="/web-pyme/src/pages/start.js" className='item'> INICIO </Link>
                        <Link to="/web-pyme/src/pages/store.js" className='item'> TIENDA </Link>
                    </li>                    
                </ul>               
            </nav>
    </header>
    );    
}
export default Header