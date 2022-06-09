import React from 'react';
import logo from '../assets/img/logo.svg';

const Header = () => (
  <header className="rvo-header">
    <div className="rvo-header__logo-wrapper">
      <a href="#" className="rvo-header__logo-link">
        <img src={logo} className="rvo-logo rvo-header__logo-img" />
      </a>
    </div>
  </header>
);

export default Header;
