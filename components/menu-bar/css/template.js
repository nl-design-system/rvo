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
  iconAlign: {
    options: ['left', 'right'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  size: 'medium',
  useIcons: false,
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

export const MenuBar = ({ useIcons = false, iconAlign = 'left' }) => {
  return `<nav class="rvo-topnav">
    <ul class="utrecht-topnav__list">
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Wonen en leven', useIcons && 'home', 'medium', iconAlign)}
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
         ${parseMenuItem('Werk en inkomen', useIcons && 'kalender', 'medium', iconAlign)}
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Ondernemen', useIcons && 'kalender', 'medium', iconAlign)}
        </a>
      </li>
      <li class="utrecht-topnav__item">
        <a class="utrecht-topnav__link" href="#">
          ${parseMenuItem('Bestuur en organisatie', useIcons && 'versleutelen', 'medium', iconAlign)}
        </a>
      </li>
    </ul>
  </nav>
`;
};
