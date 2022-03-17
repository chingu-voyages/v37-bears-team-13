import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppCtx } from 'context';

const NavBar = (): JSX.Element => {
  // Get context.
  const { loggedIn } = useAppCtx();

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> | {''}
        <NavLink to="/login">Login</NavLink> | {''}
        <NavLink to="/signup">Signup</NavLink> | {''}
        {loggedIn && <NavLink to="/addStock">Add Favorite Stock</NavLink>}
      </nav>
    </>
  );
};
export default NavBar;
