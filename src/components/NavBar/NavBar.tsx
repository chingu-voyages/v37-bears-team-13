import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppCtx } from 'context';
import './nav.css';

const NavBar = (): JSX.Element => {
  // Get context.
  const { loggedIn } = useAppCtx();

  return (
    <>
      <nav className="nav">
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
        {loggedIn && (
          <NavLink className="nav-link" to="/addStock">
            Add Stock
          </NavLink>
        )}
      </nav>
    </>
  );
};
export default NavBar;
