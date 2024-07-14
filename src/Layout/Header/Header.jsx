import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <>
        <header>
            <a href="#">Logo</a>
            <nav>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
            </nav>
        </header>
        </>
    );
}

export default Header;
