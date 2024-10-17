<!-- @license CC0-1.0 -->

# ROOS React Components

ROOS voor React is een set van React componenten die eenvoudig te gebruiken zijn.
De componenten maken gebruikt van de ROOS design tokens en assets (fonts, icons, images). Deze moet je apart toevoegen aan je project.

## Installatie van React componenten

```shell
npm install --save-dev --save-exact @nl-rvo/component-library-react
```

De componenten kunnen in je React project worden gebruikt zoals hieronder:

```js
import { Button, Heading } from "@nl-rvo/component-library-react";

const Example = () => {
  return (
    <>
      <Heading>Home</Heading>
      <Button>Dit is een button</Button>
    </>
  );
};

export default Example;
```

## Installatie van ROOS huisstijl

De design tokens van ROOS passen de RVO huisstijl toe op de componenten. Deze kun je als volgt toevoegen aan je project:

- Installeer de NPM package

```shell
npm install --save-dev --save-exact @nl-rvo/design-tokens
```

- Importeer de design tokens in je React project

```js
import "@nl-rvo/design-tokens/dist/index.css";
```

- Gebruik de ThemeProvider op een niveau boven de React componenten.

```js
import { Button, Heading, ThemeProvider } from "@nl-rvo/component-library-react";

const Example = () => {
  return (
    <ThemeProvider>
      <Heading>Home</Heading>
      <Button>Dit is een button</Button>
    </ThemeProvider>
  );
};

export default Example;
```

## Gebruik van ROOS/Rijkshuisstijl lettertype, icons en images (assets)

Het lettertype, icons en images van ROOS/Rijkshuisstijl moet je apart toevoegen aan je React project.
Deze zitten omwille van licenties en gebruiksrechten niet in de NPM package.
Dit betekent dat de componenten zonder deze assets niet helemaal correct gestyled zijn.

### Aanvragen van assets

Wanneer je de huisstijl assets wil gebruiken kun je voor de package en toestemming contact opnemen met de huisstijl coördinator van RVO via [rijksbredehuisstijl@rvo.nl](mailto:rijksbredehuisstijl@rvo.nl).

### Installatie van assets

Wanneer je de assets-package hebt ontvangen, kun je deze toevoegen aan je React project.

```js
import "./fonts/index.css";
import "./icons/index.css";
import "./images/index.css";
```

De CSS bestanden bevatten design tokens voor de assets die door de componenten worden gebruikt.

## TypeScript

De TypeScript declarations voor de React componenten worden standaard meegeleverd.
