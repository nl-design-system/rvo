<!-- @license CC0-1.0 -->

# ROOS React Components

ROOS voor React is een set van React componenten die eenvoudig te gebruiken zijn.
De componenten maken gebruikt van de ROOS design tokens en assets (fonts, icons, images).

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
