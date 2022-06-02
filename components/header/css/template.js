/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';
import { Logo } from '../../logo/css/template';

export const argTypes = {
  link: {
    description: 'Logo link',
    control: 'text',
  },
};

export const defaultArgs = {
  link: '/',
};

export const Header = ({ link = defaultArgs.link }) => `
  <header class="rvo-header">
    <div class="rvo-header__logo-wrapper">
      <a href=${link} class="rvo-header__logo-link">
        ${Logo({ className: 'rvo-header__logo-img' })}
      </a>
    </div>
  </header>
`;
