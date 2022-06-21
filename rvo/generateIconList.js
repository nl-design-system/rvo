/* eslint-disable consistent-return */
const fs = require('fs');
const path = require('path');

// Recursive function to get all SVG icons
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

// JS file generator
const generateJS = (iconList) => {
  const jsStringArray = ['export default {'];

  // Loop over categories
  Object.keys(iconList).forEach((iconCategoryName) => {
    jsStringArray.push(`${iconCategoryName.toUpperCase()}: {`);
    // Loop over icons
    jsStringArray.push(
      ...iconList[iconCategoryName].map(
        (iconFilename) =>
          `${iconFilename
            .replace('.svg', '')
            .replace(/-/g, '_')
            .toUpperCase()}: '${iconCategoryName}/${iconFilename}',`,
      ),
    );
    jsStringArray.push('},');
  });

  jsStringArray.push('};');

  try {
    fs.writeFileSync(path.join(__dirname, 'icons/index.js'), jsStringArray.join('\n'));
  } catch (err) {
    console.error(err);
  }
};

// CSS file generator
const generateCSS = (iconList) => {
  const sass = require('sass');
  let scssString = ``;

  // Loop over categories
  Object.keys(iconList).forEach((iconCategoryName) => {
    // Loop over icons
    iconList[iconCategoryName].forEach((iconFilename) => {
      scssString += `.rvo-icon--${iconFilename.replace('.svg', '').replace(/-/g, '-')} {\n`;
      scssString += `  display: inline-block;\n`;
      scssString += `  -webkit-mask-image: url("${iconCategoryName}/${iconFilename}");\n`;
      scssString += `  mask-image: url("${iconCategoryName}/${iconFilename}");\n`;
      scssString += `  -webkit-mask-position: center center;\n`;
      scssString += `  mask-position: center center;\n`;
      scssString += `  -webkit-mask-repeat: no-repeat;\n`;
      scssString += `  mask-repeat: no-repeat;\n`;
      scssString += `  -webkit-mask-size: 100%;\n`;
      scssString += `  mask-size: 100%;\n`;
      scssString += `}\n\n`;
    });
  });
  const compiledCSS = sass.compileString(scssString);

  try {
    fs.writeFileSync(path.join(__dirname, 'icons/index.css'), compiledCSS.css);
  } catch (err) {
    console.error(err);
  }
};

// SCSS file generator
const generateSCSS = (iconList) => {
  let scssString = ``;

  // Loop over categories
  Object.keys(iconList).forEach((iconCategoryName) => {
    // Loop over icons
    iconList[iconCategoryName].forEach((iconFilename) => {
      scssString += `@mixin rvo-icon-${iconFilename.replace('.svg', '').replace(/-/g, '-')} {\n`;
      scssString += `  display: inline-block;\n`;
      scssString += `  -webkit-mask-image: url("${iconCategoryName}/${iconFilename}");\n`;
      scssString += `  mask-image: url("${iconCategoryName}/${iconFilename}");\n`;
      scssString += `  -webkit-mask-position: center center;\n`;
      scssString += `  mask-position: center center;\n`;
      scssString += `  -webkit-mask-repeat: no-repeat;\n`;
      scssString += `  mask-repeat: no-repeat;\n`;
      scssString += `  -webkit-mask-size: 100%;\n`;
      scssString += `  mask-size: 100%;\n`;
      scssString += `}\n\n`;
    });
  });

  try {
    fs.writeFileSync(path.join(__dirname, 'icons/_index.scss'), scssString);
  } catch (err) {
    console.error(err);
  }
};

const generateIconList = (iconsFolderPath) => {
  const iconList = readFolder(iconsFolderPath);
  generateJS(iconList);
  generateCSS(iconList);
  generateSCSS(iconList);
};

// Run
const iconsFolderPath = path.join(__dirname, 'icons');
generateIconList(iconsFolderPath);
