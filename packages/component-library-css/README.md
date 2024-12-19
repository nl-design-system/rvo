<!-- @license CC0-1.0 -->

# ROOS CSS Componenten

CSS-componenten worden ontwikkeld met behulp van BEM-classnamen en de stylesheets kunnen zonder bijwerkingen in je pagina worden opgenomen. Pas de classnamen toe op je elementen om ze stijlbaar te maken met behulp van designtokens.

## Installatie

```shell
npm install --save-dev --save-exact @nl-rvo/component-library-css
```

## Gebruik van de componenten

Je kunt kiezen om in één keer de hele library in te laden of alleen de componenten die je nodig hebt.

## Hele library laden

```html
<link rel="stylesheet" href="@nl-rvo/component-library-css/dist/index.min.css" />
```

## Individuele componenten laden

```html
<link rel="stylesheet" href="@nl-rvo/component-library-css/dist/components/accordion.min.css" />
```

## RVO theme class toevoegen

Als de Design Tokens, Components en Assets libraries zijn toegevoegd kun je het design system gebruiken door aan de root van je applicatie de CSS-class `rvo-theme` toe te voegen:

```html
<body class="rvo-theme"></body>
```

Let op: Laad je de componenten individueel in? Dan moet je ook de base.css inladen. Deze bevat modern-normalize.css en de .rvo-theme class.

```html
<link rel="stylesheet" href="@nl-rvo/component-library-css/dist/components/base.min.css" />
```

## CSS 'Components' gebruiken

Nu kunnen code snippets van componenten direct uit Storybook worden gekopieerd. Het hier gaat om puur CSS styling is er verder geen bindende javascript functionaliteit of manier om componenten te gebruiken. Je kunt dus zelf de componenten naar wens combineren en waar nodig javascript functionaliteit toevoegen. Let wel op dat je de principes van het design system intact houdt. Let erop dat je de benodigde componenten CSS inlaad als je werkt met de individuele component CSS bestanden in de package.
