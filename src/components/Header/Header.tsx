import React from 'react';
import NavBar from '../NavBar/NavBar';
import racingCar from '../../images/racing-car.svg';
import './header.css';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header-box">
        <h1>Stock Race...</h1>
        <img className="car" src={racingCar} alt="racing car" />
      </div>
      <NavBar />
    </div>
  );
};
export default Header;
