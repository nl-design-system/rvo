/* eslint-disable consistent-return */
const fs = require('fs');
const path = require('path');

const readFolder = (folderPath, icons = {}) => {
  const folderContents = fs.readdirSync(folderPath);
  folderContents.forEach((fileOrDirectory) => {
    const fileOrDirectoryPath = path.join(folderPath, fileOrDirectory);
    const stat = fs.lstatSync(fileOrDirectoryPath);
    if (stat.isFile() && path.extname(fileOrDirectory) === '.svg') {
      const category = folderPath.split('/').slice(-1)[0];
      if (!icons[category]) {
        icons[category] = [];
      }
      icons[category].push(fileOrDirectory);
    } else if (stat.isDirectory()) {
      return readFolder(fileOrDirectoryPath, icons);
    }
  });

  return icons;
};

const generateIconList = async (iconsFolderPath) => {
  const iconList = await readFolder(iconsFolderPath);

  // Generate js file
  const fileContents = ['export default {'];

  // Categories
  Object.keys(iconList).forEach((iconCategoryName) => {
    fileContents.push(`${iconCategoryName.toUpperCase()}: {`);
    // Icons
    fileContents.push(
      ...iconList[iconCategoryName].map(
        (iconFilename) =>
          `${iconFilename
            .replace('.svg', '')
            .replace(/-/g, '_')
            .toUpperCase()}: '${iconCategoryName}/${iconFilename}',`,
      ),
    );
    fileContents.push('},');
  });

  fileContents.push('};');

  try {
    fs.writeFileSync(path.join(__dirname, 'icons/index.js'), fileContents.join('\n'));
  } catch (err) {
    console.error(err);
  }
};

const iconsFolderPath = path.join(__dirname, 'icons');
generateIconList(iconsFolderPath);
