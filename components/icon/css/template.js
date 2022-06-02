/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */
import iconList from '@nl-rvo/assets/icons';

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

  return `
    <header className="rvo-header">
      <div className="rvo-header__logo-wrapper">
        <img src="static/media/../../proprietary/assets/icons/${iconUrl}" />
      </div>
    </header>
  `;
};
