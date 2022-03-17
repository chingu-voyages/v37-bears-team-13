import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> | {''}
        <NavLink to="/login">Login</NavLink> | {''}
        <NavLink to="/signup">Signup</NavLink> | {''}
        <NavLink to="/addStock">Add Favorite Stock</NavLink>
      </nav>
    </>
  );
};
export default NavBar;
