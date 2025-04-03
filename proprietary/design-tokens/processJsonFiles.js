const fs = require('fs');

let figmaTokens = {};

function findAllByKeyAndReplace(object, key, replace) {
  const looper = function (obj) {
    for (let k in obj) {
      if (k === key) {
        obj[replace] = obj[k];
        delete obj[k];
      } else if (typeof obj[k] === 'object') {
        looper(obj[k]);
      }
    }
  };
  looper(object);
}

const fConsume = () => {
  // brand
  const brandFiles = fs.readdirSync('./src/brand/rvo');
  const brandTokens = {};

  brandFiles.forEach((file) => {
    let rawData = fs.readFileSync(`./src/brand/rvo/${file}`);
    let readable = JSON.parse(rawData);

    if (readable.rvo) {
      brandTokens.rvo = { ...readable.rvo, ...brandTokens.rvo };
    }
    if (readable.utrecht) {
      brandTokens.utrecht = { ...readable.utrecht, ...brandTokens.utrecht };
    }
  });

  console.log('brandTokens', brandTokens);

  figmaTokens.brand = { ...brandTokens };

  // common
  const commonDirectories = ['./src/common/rvo', './src/common/utrecht'];
  let commonTokens = {};

  commonDirectories.forEach((directory) => {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      let rawData = fs.readFileSync(`${directory}/${file}`);
      let readable = JSON.parse(rawData);

      if (readable.rvo) {
        commonTokens.rvo = { ...readable.rvo, ...commonTokens.rvo };
      }
      if (readable.utrecht) {
        commonTokens.utrecht = { ...readable.utrecht, ...commonTokens.utrecht };
      }
    });
  });

  figmaTokens.common = { ...commonTokens };

  // components
  const componentDirectories = ['./src/components/rvo', './src/components/utrecht'];

  componentDirectories.forEach((directory) => {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      let rawData = fs.readFileSync(`${directory}/${file}`);
      let readable = JSON.parse(rawData);
      const componentName = file.split('.');
      const componentTokens = {};

      if (readable.rvo) {
        componentTokens.rvo = { ...readable.rvo, ...componentTokens.rvo };
      }
      if (readable.utrecht) {
        componentTokens.utrecht = { ...readable.utrecht, ...componentTokens.utrecht };
      }

      figmaTokens[`components/${componentName[0]}`] = { ...componentTokens };
    });
  });
};

fConsume();
findAllByKeyAndReplace(figmaTokens, 'value', '$value');
findAllByKeyAndReplace(figmaTokens, 'type', '$type');

fs.writeFile('./figma/figma.tokens.json', JSON.stringify(figmaTokens, null, 2), 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file', err);
  } else {
    console.log('Data written to file');
  }
});
