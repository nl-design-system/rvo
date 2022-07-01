/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import '@utrecht/component-library-css';

const defaultItems = [
  { label: 'Home', icon: 'home', link: '#' },
  { label: 'Mijn aanvragen', icon: 'publicatie', link: '#' },
  { label: 'Nieuwe aanvraag', icon: 'plus', link: '#' },
  { label: 'Uitloggen', icon: 'versleutelen', link: '#', align: 'right' },
];

export const argTypes = {
  size: {
    options: ['small', 'medium'],
    mapping: { small: 'sm', medium: 'md' },
    control: { type: 'radio' },
  },
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
  useIcons: {
    control: 'boolean',
  },
  iconPlacement: {
    options: ['before', 'after'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  size: 'medium',
  items: defaultItems,
  useIcons: true,
  iconPlacement: 'before',
};

const parseMenuItem = (
  label,
  icon,
  useIcon = defaultArgs.useIcons,
  size = defaultArgs.size,
  iconPlacement = defaultArgs.iconPlacement,
) => {
  let menuItem = label;
  if (useIcon) {
    const iconMarkup = `<div class="rvo-icon rvo-icon--${icon} rvo-icon--${size} rvo-icon--wit"></div>`;
    if (iconPlacement === 'before') {
      menuItem = `${iconMarkup} ${menuItem}`;
    } else {
      menuItem = `${menuItem} ${iconMarkup}`;
    }
  }
  return menuItem;
};

export const MenuBar = ({
  size = defaultArgs.size,
  items = defaultArgs.items,
  useIcons = defaultArgs.useIcons,
  iconPlacement = defaultArgs.iconPlacement,
}) => {
  let markup = `<nav class="rvo-topnav rvo-topnav--${size}"><ul class="utrecht-topnav__list">`;

  const leftItems = items.filter((item) => item.align !== 'right');
  const rightItems = items.filter((item) => item.align === 'right');

  leftItems.forEach((item) => {
    markup += `<li class="utrecht-topnav__item"><a class="utrecht-topnav__link" href="${item.link}">`;
    markup += parseMenuItem(item.label, item.icon, useIcons, size, iconPlacement);
    markup += '</a></li>';
  });

  if (rightItems.length) {
    markup += '<div class="rvo-topnav__spacer"></div>';
    rightItems.forEach((item) => {
      markup += `<li class="utrecht-topnav__item"><a class="utrecht-topnav__link" href="${item.link}">`;
      markup += parseMenuItem(item.label, item.icon, useIcons, size, iconPlacement);
      markup += '</a></li>';
    });
  }

  markup += '</ul></nav>';

  return markup;
};
