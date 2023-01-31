export default (htmlString) => {
  if (typeof window !== 'undefined') {
    let htmlStringToParse = `<div>${htmlString}</div>`;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlStringToParse, 'application/xml');
    const errorNode = doc.querySelector('parsererror');
    return errorNode === null ? true : false;
  }
  return true;
};
