import iconList from '@nl-rvo/assets/icons/index.js';

export const iconColors = ['', 'hemelblauw', 'donkerblauw', 'wit', 'zwart', 'grijs-700', 'lintblauw'];

export const toProperCase = (inputString: string) =>
  inputString
    .replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    .replace(/_/g, ' ');

// Icon Options
const iconOptions = Object.keys(iconList).flatMap((categoryOrIconName) => {
  if (typeof iconList[categoryOrIconName] === 'object') {
    return Object.keys(iconList[categoryOrIconName]).map((iconName) =>
      toProperCase(`${categoryOrIconName} > ${iconName}`),
    );
  } else {
    return toProperCase(iconList[categoryOrIconName].toString().replace('.svg', ''));
  }
});

// IconNames
export const iconNames = iconOptions.map((option) => {
  let iconName = option;
  if (iconName.indexOf(' > ') > -1) {
    iconName = iconName.split(' > ')[1];
  }
  return decodeURIComponent(iconName).toLowerCase().replace(/\s+/g, '-');
});
