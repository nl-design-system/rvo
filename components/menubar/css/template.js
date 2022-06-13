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
  useIcons: {
    control: 'boolean',
  },
  useSpacer: {
    control: 'boolean',
  },
  iconAlign: {
    options: ['left', 'right'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  size: 'medium',
  useIcons: false,
  useSpacer: false,
  iconAlign: 'left',
};

const parseMenuItem = (label, icon, size = defaultArgs.size, iconAlign = defaultArgs.iconAlign) => {
  let menuItem = label;
  if (icon) {
    const iconMarkup = `<span class="rvo-icon rvo-icon--${icon} rvo-icon--${size} rvo-icon--wit"></span>`;
    if (iconAlign === 'left') {
      menuItem = `${iconMarkup} ${menuItem}`;
    } else {
      menuItem = `${menuItem} ${iconMarkup}`;
    }
  }
  return menuItem;
};

export const MenuBar = ({
  size = defaultArgs.size,
  useIcons = defaultArgs.useIcons,
  iconAlign = defaultArgs.iconAlign,
  useSpacer = defaultArgs.useSpacer,
}) => {
  return `<nav class="rvo-topnav rvo-topnav--${size}">
    <ul class="utrecht-topnav__list">
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Home', useIcons && 'home', 'medium', iconAlign)}
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
         ${parseMenuItem('Mijn aanvragen', useIcons && 'publicatie', 'medium', iconAlign)}
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Nieuwe aanvraag', useIcons && 'plus', 'medium', iconAlign)}
        </a>
      </li>
      ${useSpacer ? '<div class="rvo-topnav__spacer"></div>' : ''}
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Uitloggen', useIcons && 'versleutelen', 'medium', iconAlign)}
        </a>
      </li>
    </ul>
  </nav>
`;
};
