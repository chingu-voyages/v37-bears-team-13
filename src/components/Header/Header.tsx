import React from 'react';

import NavBar from '../NavBar/NavBar';
import './header.css';
import racingCar from '../../images/racing-car.svg';
const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header-box">
        <h1>Stock Race...</h1>
        <img src={racingCar} alt="racing car" />
      </div>

      <NavBar />
    </div>
  );
};
export default Header;
