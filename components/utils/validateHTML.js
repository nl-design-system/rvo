export default (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'application/xml');
  const errorNode = doc.querySelector('parsererror');
  return errorNode === null ? true : false;
};
