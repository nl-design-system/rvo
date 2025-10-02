module.exports = {
  'scss/colors-map': function ({ dictionary }) {
    const isColor = (t) => {
      const cat = t.attributes && t.attributes.category;
      const type = t.attributes && t.attributes.type;
      return String(cat).toLowerCase() === 'rvo' && String(type).toLowerCase() === 'color';
    };

    const colorTokens = dictionary.allProperties.filter((t) => isColor(t) && String(t.value).length > 0);

    if (!colorTokens.length) {
      return `// No color tokens found`;
    }

    const lines = colorTokens
      .map((t) => {
        const key = t.name.replace(/^custom-?color-/, '').replace(/^color-/, '');
        return `  "${key}": ${t.value}`;
      })
      .join(',\n');

    return `// AUTO-GENERATED — DO NOT EDIT.
$colors: (
${lines}
) !default;
`;
  },
};
