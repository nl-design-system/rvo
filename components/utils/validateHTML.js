export default (htmlString) => {
  // Add encompassing HTML tags if needed
  let htmlStringToParse = htmlString;
  const htmlStringContainsHTML = htmlString.match(/<.+?>/gi);
  const htmlStringHasEncompassingElement = htmlString.match(/^<([A-Z][A-Z0-9]*)>\b[^>]*>(.*?)<\/\1>/gi);

  if (htmlStringContainsHTML && !htmlStringHasEncompassingElement) {
    htmlStringToParse = `<div>${htmlString}</div>`;
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlStringToParse, 'application/xml');
  const errorNode = doc.querySelector('parsererror');
  return errorNode === null ? true : false;
};
