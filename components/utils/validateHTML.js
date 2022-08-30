export default (htmlString) => {
  // Add encompassing HTML tags if needed
  let htmlStringToParse = htmlString;
  if (htmlString.match(/<.+?>/g) && (!htmlString.match(/^<.+?>/g) || !htmlString.match(/<.+?>$/gm))) {
    htmlStringToParse = `<div>${htmlString}</div>`;
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlStringToParse, 'application/xml');
  const errorNode = doc.querySelector('parsererror');
  return errorNode === null ? true : false;
};
