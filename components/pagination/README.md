Gebruik ellipsen (…) om eventuele overgeslagen pagina's te vervangen. Bijvoorbeeld:

[1] 2 … 10

1 [2] 3 … 100

1 2 [3] 4 … 100

1 2 3 [4] 5 … 100

1 … 4 [5] 6 … 100

1 … 97 [98] 99 100

1 … 98 [99] 100

1 … 99 [100]

De functie voor deze logica kan als volgt worden geschreven:

```js
const generatePageNumberMarkup = () => "";
const generateEllipsisMarkup = () => "";

const generatePageNumbers = (totalPages, activePage) => {
  const pages = [];

  // Always add the first page
  pages.push(generatePageNumberMarkup(1, activePage));

  // Add ellipses if the active page is more than 4
  if (activePage > 4) {
    pages.push(generateEllipsisMarkup());
  }
  if (activePage === 4) {
    pages.push(generatePageNumberMarkup(2, activePage));
  }

  // Add the page before the active page if it's more than 2
  if (activePage > 2) {
    pages.push(generatePageNumberMarkup(activePage - 1, activePage));
  }

  // Add the active page if it's not the first or last page
  if (activePage > 1 && activePage < totalPages) {
    pages.push(generatePageNumberMarkup(activePage, activePage));
  }

  // Add the page after the active page if it's less than total pages minus 1 and not the last page
  if (activePage < totalPages - 1 && activePage !== totalPages - 2) {
    pages.push(generatePageNumberMarkup(activePage + 1, activePage));
  }

  // Add ellipses if the active page is less than the total pages minus 3
  if (activePage < totalPages - 3) {
    pages.push(generateEllipsisMarkup());
  }

  // Add the second last page if the active page is less than the total pages minus 1 and greater than or equal to total pages minus 3
  if (activePage < totalPages - 1 && activePage >= totalPages - 3) {
    pages.push(generatePageNumberMarkup(totalPages - 1, activePage));
  }

  // Always add the last page
  if (totalPages !== 1) {
    pages.push(generatePageNumberMarkup(totalPages, activePage));
  }

  return pages;
};

generatePageNumbers(5, 30);
```
