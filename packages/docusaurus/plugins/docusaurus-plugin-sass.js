const path = require('path');

module.exports = function () {
  return {
    name: 'docusaurus-plugin-sass',
    configureWebpack(_, isServer, utils) {
      const { getStyleLoaders } = utils;
      const isProd = process.env.NODE_ENV === 'production';
      return {
        module: {
          rules: [
            {
              test: /\.s[ca]ss$/,
              oneOf: [
                {
                  test: /\.module\.s[ca]ss$/,
                  use: [
                    ...getStyleLoaders(isServer, {
                      modules: {
                        localIdentName: isProd ? `[local]_[hash:base64:4]` : `[local]_[path][name]`,
                        exportOnlyLocals: isServer,
                      },
                      importLoaders: 2,
                      sourceMap: !isProd,
                    }),
                    {
                      loader: 'sass-loader',
                      options: {
                        api: 'modern-compiler',
                        implementation: 'sass-embedded',
                      },
                    },
                  ],
                },
                {
                  use: [
                    ...getStyleLoaders(isServer),
                    {
                      loader: require.resolve('sass-loader'),
                      options: {
                        sassOptions: {
                          api: 'modern-compiler',
                          implementation: 'sass-embedded',
                          importers: [webpackStyleImporter],
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      };
    },
  };
};

const webpackStyleImporter = {
  findFileUrl(url, { _containingUrl }) {
    // Handle ~ imports
    if (url.startsWith('~')) {
      const normalizedUrl = url.slice(1); // Remove the ~ prefix
      try {
        // Extract the base path by removing everything from /src
        const basePath = _containingUrl.pathname.split('/src')[0];
        // Construct the resolved path
        const resolvedPath = path.join(basePath, 'node_modules', normalizedUrl);
        return new URL(`file://${resolvedPath}`);
      } catch (error) {
        console.warn(`Warning: Could not resolve ${url}`);
        return null;
      }
    }
    // Let Sass handle regular imports
    return null;
  },
};
