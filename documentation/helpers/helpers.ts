export const path2css = (path: string[]) => `var(--${path.join('-')})`;

export const path2token = (path: string[]) => path.join('.');

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const sizeNames: { [key: string]: string } = {
  xs: 'extra small',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'extra large',
  extrabold: 'extra bold',
};

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/** Writes out an abbreviated token item, for example `lg` as `Large` and `2xl` as `2x extra large`. */
export const item2title = (item: string) => {
  const multiplied = /^(\d+)(xs|xl)$/.exec(item);
  if (multiplied) {
    return capitalize(`${multiplied[1]}x ${sizeNames[multiplied[2]]}`);
  }
  return capitalize(sizeNames[item] ?? item);
};
