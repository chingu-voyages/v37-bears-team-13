import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
const NavBar = (): JSX.Element => {
  return (
    <>
      <nav className="container nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>{' '}
        | {''}
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>{' '}
        | {''}
        <NavLink className="nav-link" to="/signup">
          Signup
        </NavLink>{' '}
        | {''}
        <NavLink className="nav-link" to="/addStock">
          Add Stock
        </NavLink>
      </nav>
    </>
  );
};
export default NavBar;
