const { readdirSync } = require('fs');

module.exports = {
  getDirectories: (source) => {
    return readdirSync(source, { withFileTypes: true })
      .filter((entry) => {
        return entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist';
      })
      .map((entry) => entry.name);
  },
};
