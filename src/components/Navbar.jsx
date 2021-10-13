import React from 'react';
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <>
        <CartWidget />
        <header>
        <navbar className="nav-container">
          <h1 className="company-name">Dream books.</h1>
          <ul className="navbar">
            <li><a href="#" className="item-nav">Home</a></li>
            <li><a href="#" className="item-nav">Profile</a></li>
            <li><a href="#" className="item-nav">Products</a></li>
          </ul>
        </navbar>
      </header>
      </>
    );
};
export default Navbar;