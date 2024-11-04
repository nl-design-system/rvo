<!-- @license CC0-1.0 -->

# ROOS CSS Componenten

CSS-componenten worden ontwikkeld met behulp van BEM-classnamen en de stylesheets kunnen zonder bijwerkingen in je pagina worden opgenomen. Pas de classnamen toe op je elementen om ze stijlbaar te maken met behulp van designtokens.

```shell
npm install --save-dev --save-exact @nl-rvo/component-library-css

```

Theoretisch kun je de componenten in je HTML-pagina opnemen zoals hieronder, maar dit is niet het typische gebruik van deze bibliotheek:

```html
<!DOCTYPE html>
<html lang="nl">
  <head>
    <title>Voorbeeldpagina</title>
    <link rel="stylesheet" href="node_modules/@nl-rvo/component-library-css" />
  </head>
  <body>
    <h1 class="utrecht-heading-1">Home</h1>
    <p class="utrecht-paragraph">Hallo, wereld!</p>
  </body>
</html>
```

De BEM-classnamen kunnen bijzonder nuttig zijn om alleen de CSS op te nemen die je nodig hebt met behulp van [CSS-modules](https://css-tricks.com/css-modules-part-1-need/) ([in React](https://css-tricks.com/css-modules-part-3-react/)).

```js
import React from "react";
import style from "@nl-rvo/component-library-css";

export default class ExamplePage extends React.Component {
  render() {
    return (
      <>
        <h1 className={btn["utrecht-heading-1"]}>Home</h1>
        <p className={btn["utrecht-paragraph"]}>Hallo, wereld!</p>
      </>
    );
  }
}
```
