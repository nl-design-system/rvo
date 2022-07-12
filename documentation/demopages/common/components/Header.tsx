import { Logo } from '@nl-rvo/components/logo/css/template';
import parse from 'html-react-parser';
import React from 'react';

const Header = () => (
  <header className="rvo-header">
    <div className="rvo-header__logo-wrapper">
      <a href="#" className="rvo-header__logo-link">
        {parse(Logo())}
      </a>
    </div>
  </header>
);

export default Header;
