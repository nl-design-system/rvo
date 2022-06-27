/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';

export const argTypes = {
  size: {
    options: ['small', 'medium'],
    mapping: { small: 'sm', medium: 'md' },
    control: { type: 'radio' },
  },
  useSpacer: {
    control: 'boolean',
  },
  showIcons: {
    options: ['no', 'before', 'after'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  size: 'medium',
  useIcons: false,
  useSpacer: false,
  showIcons: 'before',
};

const parseMenuItem = (label, icon, size = defaultArgs.size, showIcons = defaultArgs.showIcons) => {
  let menuItem = label;
  if (icon) {
    const iconMarkup = `<div class="rvo-icon rvo-icon--${icon} rvo-icon--${size} rvo-icon--wit"></div>`;
    if (showIcons === 'before') {
      menuItem = `${iconMarkup} ${menuItem}`;
    } else {
      menuItem = `${menuItem} ${iconMarkup}`;
    }
  }
  return menuItem;
};

export const MenuBar = ({
  size = defaultArgs.size,
  useSpacer = defaultArgs.useSpacer,
  showIcons = defaultArgs.showIcons,
}) => {
  return `<nav class="rvo-topnav rvo-topnav--${size}">
    <ul class="utrecht-topnav__list">
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Home', showIcons !== 'no' && 'home', 'md', showIcons)}
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
         ${parseMenuItem('Mijn aanvragen', showIcons !== 'no' && 'publicatie', 'md', showIcons)}
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Nieuwe aanvraag', showIcons !== 'no' && 'plus', 'md', showIcons)}
        </a>
      </li>
      ${useSpacer ? '<div class="rvo-topnav__spacer"></div>' : ''}
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Uitloggen', showIcons !== 'no' && 'versleutelen', 'md', showIcons)}
        </a>
      </li>
    </ul>
  </nav>
`;
};
