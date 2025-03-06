const fs = require('fs');

let figmaTokens = { rvo: {}, utrecht: {} };

const fileDirectories = [
  './src/brand/rvo',
  './src/common/rvo',
  './src/common/utrecht',
  './src/components/rvo',
  './src/components/utrecht',
];

function findAllByKeyAndReplace(object, key, replace) {
  // eslint-disable-next-line consistent-return
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
  fileDirectories.forEach((directory) => {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      let rawData = fs.readFileSync(`${directory}/${file}`);
      let readable = JSON.parse(rawData);

      if (readable.rvo) {
        figmaTokens.rvo = { ...readable.rvo, ...figmaTokens.rvo };
      }
      if (readable.utrecht) {
        figmaTokens.utrecht = { ...readable.utrecht, ...figmaTokens.utrecht };
      }
    });
  });
};

fConsume();
findAllByKeyAndReplace(figmaTokens, 'value', '$value');
findAllByKeyAndReplace(figmaTokens, 'type', '$type');

fs.writeFile('./figma/design.tokens.json', JSON.stringify(figmaTokens, null, 2), 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file', err);
  } else {
    console.log('Data written to file');
  }
});
