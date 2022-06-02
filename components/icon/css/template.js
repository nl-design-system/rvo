/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import iconList from '@nl-rvo/assets/icons';

// Dynamically import all icons
Object.keys(iconList).forEach((category) => {
  Object.keys(category).forEach((icon) => import(/* webpackMode: "eager" */ `@nl-rvo/assets/icons/${icon}`));
});

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const options = Object.keys(iconList).flatMap((categoryName) => {
  return Object.keys(iconList[categoryName]).map((iconName) => `${categoryName} > ${iconName}`.toProperCase());
});

export const argTypes = {
  icon: {
    description: 'Icon',
    control: 'select',
    options: options,
  },
};

export const defaultArgs = {
  icon: options[0],
};

export const Icon = ({ icon = defaultArgs.icon }) => {
  const [categoryName, iconName] = icon.split(' > ');
  const iconUrl = iconList[categoryName.toUpperCase()][iconName.toUpperCase()];
  return `<img class="rvo-icon" src="proprietary/assets/icons/${iconUrl}" />`;
};
