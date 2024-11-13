<!-- @license CC0-1.0 -->

# ROOS CSS Componenten

CSS-componenten worden ontwikkeld met behulp van BEM-classnamen en de stylesheets kunnen zonder bijwerkingen in je pagina worden opgenomen. Pas de classnamen toe op je elementen om ze stijlbaar te maken met behulp van designtokens.

## Installatie

```shell
npm install --save-dev --save-exact @nl-rvo/component-library-css
```

## RVO theme class toevoegen

Als de Design Tokens, Components en Assets libraries zijn toegevoegd kun je het design system gebruiken door aan de root van je applicatie de CSS-class `rvo-theme` toe te voegen:

```html
<body class="rvo-theme"></body>
```

## CSS 'Components' gebruiken

Nu kunnen code snippets van componenten direct uit Storybook worden gekopieerd. Omdat het hier gaat om puur CSS styling is er verder geen bindende javascript functionaliteit of manier om componenten te gebruiken. Je kunt dus zelf de componenten naar wens combineren en waar nodig javascript functionaliteit toevoegen. Let wel op dat je de principes van het design system intact houdt.
