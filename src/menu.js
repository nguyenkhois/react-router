import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <ul class='main-menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/about'>About</Link></li>
    </ul>
);

export default Menu;