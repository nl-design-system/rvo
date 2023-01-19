module.exports = function () {
  return {
    name: 'fix-svg-loader-plugin',
    configureWebpack(config) {
      // eslint-disable-next-line no-useless-escape
      const svgRule = config.module.rules.find((rule) => rule.test.toString().replace(/\\/, '') === `/\.svg$/i`);
      svgRule.oneOf.splice(0, 1);
    },
  };
};
