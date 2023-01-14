import React from 'react';
import { Link } from 'react-router-dom';
import { ListItems } from './ListItems';

const NavbarListItems = () => {
    return (
        <>
           {
            ListItems.map(({name, to}, index)=>(
                <li key={index}> <Link to={to}> {name}</Link> </li>
            ))
           }
        </>
    );
};

export default NavbarListItems;