# Aan de slag met ROOS

Om te starten met het design system gebruik je een drietal libraries.
Deze zijn gepubliceerd op NPM onder de organisatie 'nl-rvo'.

1. Design tokens: <https://www.npmjs.com/package/@nl-rvo/design-tokens>
   Bevat de ROOS design tokens in de vorm van o.a. CSS variabelen.

2. CSS voor components: <https://www.npmjs.com/package/@nl-rvo/component-library-css>
   Bevat de CSS styling van alle ROOS componenten.

3. Assets: <https://www.npmjs.com/package/@nl-rvo/assets>
   Bevat alle assets als icons, plaatjes, fonts e.d.

## Libraries installeren met NPM

De aanbevolen manier om de libraries te gebruiken is met behulp van NPM:

`npm install --save-dev --save-exact @nl-rvo/design-tokens@1.0.0-alpha.89`
`npm install --save-dev --save-exact @nl-rvo/component-library-css@1.0.0-alpha.145`
`npm install --save-dev --save-exact @nl-rvo/assets@1.0.0-alpha.80`

> Let op: Gebruik altijd exacte versie-nummers. Op deze manier blijft alles foutloos werken en kun je zelf testen op 'breaking changes' voor het upgraden naar een nieuwe release.

## Libraries inladen via CDN

Het is mogelijk om de Design tokens en Components via open source CDN's als Unpckg of Jsdelivr in te laden:

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@nl-rvo/design-tokens@1.0.0-alpha.89" />
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/npm/@nl-rvo/component-library-css@1.0.0-alpha.145"
/>
```

Er is alleen een nadeel. Helaas wordt op dit moment de Assets library nog niet gebruikt door de components als deze via CDN worden ingeladen. Dit betekent dat gebruikte icons, plaatjes e.d. in de components niet zichtbaar zijn.
Het is wel mogelijk om assets in de Assets library direct te linken. Bijvoorbeeld:

```html
<img
  src="https://cdn.jsdelivr.net/npm/@nl-rvo/assets@latest/images/logo.svg"
  class="rvo-logo-img rvo-header__logo-img"
/>
```

We raden daarom op dit moment aan om de libraries met behulp van NPM te integreren.

## RVO theme class toevoegen

Als de Design Tokens, Components en Assets libraries zijn toegevoegd kun je het design system gebruiken door aan de root van je applicatie de CSS-class `rvo-theme` toe te voegen:

```html
<body class="rvo-theme"></body>
```

## CSS 'Components' gebruiken

Nu kunnen code snippets van componenten direct uit Storybook worden gekopieerd. Omdat het hier gaat om puur CSS styling is er verder geen bindende javascript functionaliteit of manier om componenten te gebruiken. Je kunt dus zelf de componenten naar wens combineren en waar nodig javascript functionaliteit toevoegen. Let wel op dat je de principes van het design system intact houdt.

## Bijdragen

Heb je eigen componenten of styling ontwikkeld die past binnen het design system? Laat het ons vooral weten!
Stuur dan een e-mail naar [designsystem@rvo.nl](mailto:designsystem@rvo.nl).
We werken graag samen verder aan het design system.
