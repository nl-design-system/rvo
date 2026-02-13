## Richtlijnen

- Lijn de pagination altijd links uit met de bovenstaande content waarvoor de pagination actief is. Dit zorgt ervoor dat mensen met kokervisie de pagination makkelijk kunnen ontdekken.
- Gebruik ellipsen (…) om eventuele overgeslagen pagina's te vervangen. Bijvoorbeeld:

[1] 2 … 10

1 [2] 3 … 100

1 2 [3] 4 … 100

1 2 3 [4] 5 … 100

1 … 4 [5] 6 … 100

1 … 97 [98] 99 100

1 … 98 [99] 100

1 … 99 [100]

## Voor ontwikkelaars

De logica voor het genereren van paginanummers met ellipsen kan als volgt worden geïmplementeerd.

```js
const generatePageNumberMarkup = (page, activePage) => {
  return page === activePage ? `[${page}]` : `${page}`;
};

const generateEllipsisMarkup = () => "…";

const generatePageNumbers = (totalPages, activePage) => {
  const pages = [];
  const windowSize = 5;

  const addRange = (from, to) => {
    for (let i = from; i <= to; i++) {
      pages.push(generatePageNumberMarkup(i, activePage));
    }
  };

  // Toon alle pagina's als het totaal klein is
  if (totalPages <= windowSize) {
    addRange(1, totalPages);
    return pages;
  }

  // Begin van de paginering
  // Voorbeeld: [1] 2 3 4 5 … 100
  if (activePage <= 4) {
    addRange(1, 5);
    pages.push(generateEllipsisMarkup());
    pages.push(generatePageNumberMarkup(totalPages, activePage));
    return pages;
  }

  // Einde van de paginering
  // Voorbeeld: 1 … 96 97 98 [99] 100
  if (activePage >= totalPages - 3) {
    pages.push(generatePageNumberMarkup(1, activePage));
    pages.push(generateEllipsisMarkup());
    addRange(totalPages - 4, totalPages);
    return pages;
  }

  // Midden van de paginering
  // Voorbeeld: 1 … 4 [5] 6 … 100
  pages.push(generatePageNumberMarkup(1, activePage));
  pages.push(generateEllipsisMarkup());
  addRange(activePage - 1, activePage + 1);
  pages.push(generateEllipsisMarkup());
  pages.push(generatePageNumberMarkup(totalPages, activePage));

  return pages;
};

generatePageNumbers(100, 1);
```
