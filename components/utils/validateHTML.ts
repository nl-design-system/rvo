export default (htmlString) => {
  if (typeof window !== 'undefined') {
    let htmlStringToParse = htmlString;
    const containsHTML = /<[a-z][\s\S]*>/i.test(htmlString);
    const containsJSX = /<([A-Z][\w]*)(\s*[^>]*)?\/?>/.test(htmlString);

    if (containsJSX) {
      return false;
    }

    if (containsHTML) {
      htmlStringToParse = `<div>${htmlString}</div>`;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlStringToParse, 'application/xml');
    const errorNode = doc.querySelector('parsererror');
    return errorNode === null ? true : false;
  }
  return true;
};
