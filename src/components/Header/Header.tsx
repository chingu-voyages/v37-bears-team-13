import React from 'react';
import NavBar from '../NavBar';
import './styles.module.css';
const Header = (): JSX.Element => {
  return (
    <div className="container">
      <h1>Stock Race</h1>
      <NavBar />
    </div>
  );
};
export default Header;
