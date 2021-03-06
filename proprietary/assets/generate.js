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
      const assetPathArray = folderPath.replace(path.resolve(), '').split('/');
      if (assetPathArray.length > 2) {
        // Has category
        const category = assetPathArray.slice(-1)[0];
        if (!icons[category]) {
          icons[category] = [];
        }
        icons[category].push(fileOrDirectory);
      } else {
        // Does not have category
        if (!icons.root) {
          icons.$root = [];
        }
        icons.$root.push(fileOrDirectory);
      }
    } else if (stat.isDirectory()) {
      return readFolder(fileOrDirectoryPath, icons);
    }
  });

  return icons;
};

// JS file generator
const generateJS = (assetList, targetFolder) => {
  const jsStringArray = ['export default {'];

  // Loop over categories
  Object.keys(assetList).forEach((iconCategoryName) => {
    if (iconCategoryName !== '$root') {
      jsStringArray.push(`${iconCategoryName.replace(/-/g, '_').toUpperCase()}: {`);
    }
    // Loop over icons
    const parsedCategoryPath = iconCategoryName !== '$root' ? `${iconCategoryName}/` : '';
    jsStringArray.push(
      ...assetList[iconCategoryName].map(
        (iconFilename) =>
          `${iconFilename
            .replace('.svg', '')
            .replace(/-/g, '_')
            .toUpperCase()}: '${parsedCategoryPath}${iconFilename}',`,
      ),
    );
    if (iconCategoryName !== '$root') {
      jsStringArray.push('},');
    }
  });

  jsStringArray.push('};');

  try {
    fs.writeFileSync(path.join(__dirname, `${targetFolder}/index.js`), jsStringArray.join('\n'));
  } catch (err) {
    console.error(err);
  }
};

// CSS file generator
const generateCSS = (
  assetList,
  targetFolder,
  classnamePrefix,
  generateMaskClasses = true,
  generateBackgroundClasses = true,
) => {
  const sass = require('sass');
  let scssString = '';
  const cssVars = [];

  // Loop over categories
  Object.keys(assetList).forEach((iconCategoryName) => {
    const parsedCategoryPath = iconCategoryName !== '$root' ? `${iconCategoryName}/` : '';
    // Loop over icons
    assetList[iconCategoryName].forEach((iconFilename) => {
      // Generate CSS variable
      cssVars.push(
        `--${classnamePrefix}-${iconFilename
          .replace('.svg', '')
          .replace(/-/g, '-')}: url("${parsedCategoryPath}${iconFilename}");`,
      );

      // Add mask class
      if (generateMaskClasses) {
        scssString += `.${classnamePrefix}--${iconFilename.replace('.svg', '').replace(/-/g, '-')} {\n`;
        scssString += `  -webkit-mask-image: url("${parsedCategoryPath}${iconFilename}");\n`;
        scssString += `  mask-image: url("${parsedCategoryPath}${iconFilename}");\n`;
        scssString += `  -webkit-mask-position: center center;\n`;
        scssString += `  mask-position: center center;\n`;
        scssString += `  -webkit-mask-repeat: no-repeat;\n`;
        scssString += `  mask-repeat: no-repeat;\n`;
        scssString += `  -webkit-mask-size: 100%;\n`;
        scssString += `  mask-size: 100%;\n`;
        scssString += `}\n\n`;
      }

      // Add background image class
      if (generateBackgroundClasses) {
        scssString += `.${classnamePrefix}-bg--${iconFilename.replace('.svg', '').replace(/-/g, '-')} {\n`;
        scssString += `  background-image: url("${parsedCategoryPath}${iconFilename}");\n`;
        scssString += `}\n\n`;
      }
    });
  });

  // Add CSS vars
  scssString = `:root {\n${cssVars.join('\n')}}\n\n${scssString}`;
  const compiledCSS = sass.compileString(scssString);

  try {
    fs.writeFileSync(path.join(__dirname, `${targetFolder}/index.css`), compiledCSS.css);
  } catch (err) {
    console.error(err);
  }
};

// SCSS file generator
const generateSCSS = (assetList, targetFolder, classnamePrefix) => {
  let scssString = ``;

  // Loop over categories
  Object.keys(assetList).forEach((iconCategoryName) => {
    // Loop over icons
    const parsedCategoryPath = iconCategoryName !== '$root' ? `${iconCategoryName}/` : '';
    assetList[iconCategoryName].forEach((iconFilename) => {
      // Mask
      scssString += `@mixin ${classnamePrefix}-${iconFilename.replace('.svg', '').replace(/-/g, '-')}-mask {\n`;
      scssString += `  -webkit-mask-image: url("${parsedCategoryPath}${iconFilename}");\n`;
      scssString += `  mask-image: url("${parsedCategoryPath}${iconFilename}");\n`;
      scssString += `  -webkit-mask-position: center center;\n`;
      scssString += `  mask-position: center center;\n`;
      scssString += `  -webkit-mask-repeat: no-repeat;\n`;
      scssString += `  mask-repeat: no-repeat;\n`;
      scssString += `  -webkit-mask-size: 100%;\n`;
      scssString += `  mask-size: 100%;\n`;
      scssString += `}\n\n`;

      // Background
      scssString += `@mixin ${classnamePrefix}-${iconFilename.replace('.svg', '').replace(/-/g, '-')}-bg {\n`;
      scssString += `  background-image: url("${parsedCategoryPath}${iconFilename}");\n`;
      scssString += `}\n\n`;
    });
  });

  try {
    fs.writeFileSync(path.join(__dirname, `${targetFolder}/_index.scss`), scssString);
  } catch (err) {
    console.error(err);
  }
};

const generateIconList = () => {
  const folderPath = path.join(__dirname, 'icons');
  const assetList = readFolder(folderPath);
  generateJS(assetList, 'icons');
  generateCSS(assetList, 'icons', 'rvo-icon', true, true);
  generateSCSS(assetList, 'icons', 'rvo-icon');
};

const generateImageList = () => {
  const folderPath = path.join(__dirname, 'images');
  const assetList = readFolder(folderPath);
  generateJS(assetList, 'images');
  generateCSS(assetList, 'images', 'rvo-image', false, true);
  generateSCSS(assetList, 'images', 'rvo-image');
};

// Run
generateIconList();
generateImageList();
