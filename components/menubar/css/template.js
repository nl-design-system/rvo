/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';

export const argTypes = {
  size: {
    options: ['small', 'medium'],
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
  showIcons: 'left',
};

const parseMenuItem = (label, icon, size = defaultArgs.size, showIcons = defaultArgs.showIcons) => {
  let menuItem = label;
  if (icon) {
    const iconMarkup = `<span class="rvo-icon rvo-icon--${icon} rvo-icon--${size} rvo-icon--wit"></span>`;
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
          ${parseMenuItem('Home', showIcons !== 'no' && 'home', 'medium', showIcons)}
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
         ${parseMenuItem('Mijn aanvragen', showIcons !== 'no' && 'publicatie', 'medium', showIcons)}
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Nieuwe aanvraag', showIcons !== 'no' && 'plus', 'medium', showIcons)}
        </a>
      </li>
      ${useSpacer ? '<div class="rvo-topnav__spacer"></div>' : ''}
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Uitloggen', showIcons !== 'no' && 'versleutelen', 'medium', showIcons)}
        </a>
      </li>
    </ul>
  </nav>
`;
};
