// Hydration-safe: avoids DOMParser, works the same on server and client

const containsHTML = (htmlString: string) => /<[a-z][\s\S]*>/i.test(htmlString);

const containsJSX = (htmlString: string) => /<([A-Z][\w]*)(\s*[^>]*)?\/?>/.test(htmlString);

const validateHTML = (htmlString: string): boolean => {
  if (containsJSX(htmlString)) {
    return false;
  }
  // Only check for basic HTML structure, no parsing
  return containsHTML(htmlString);
};

export default validateHTML;
