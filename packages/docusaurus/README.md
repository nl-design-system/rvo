# Documentatie van ROOS met Docusaurus

We gebruiken [Docusaurus](https://docusaurus.io/docs/) voor het opbouwen van de documentatie website [https://nl-design-system.github.io/rvo/](https://nl-design-system.github.io/rvo/)

## Architectuur

Voor documentatie die mogelijk gedeeld wordt met Storybook en die makkelijk gevonden kan worden door mensen die in Github rondkijken gebruiken we de `documentation` folder. Hierin staat een folder `website` die ingeladen wordt door Docusaurus. << willen we dit? In de bestaande folders kunnen bestanden worden aangemaakt die automatisch in Docusaurus verschijnen.

De documentatie van componenten wordt opgebouwd in `packages/docusaurus/docs/componenten`. De component documentatie is in `mdx` formaat. Zo kan de documentatie uit de README.md van het component komen en de component story in een iframe ingeladen worden.

### Nieuw document

Documentatie is in het Nederlands en wordt in markdown geschreven. Elk bestand begint met [Front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter) metadata. Omdat onze markdown bestanden uit `documentation` gemaakt zijn om herbruikbaar te zijn, gebruiken we in elk geval `hide_title: true`.

En om de documentatie herbruikbaar te maken over verschillende organisaties en projecten heen, is alle documentatie gepubliceerd onder Creative Commons License. Na de front matter wordt daarom `<!-- @license CC0-1.0 -->` toegevoegd.

### Component documentatie

Voor componenten geldt ook dat de documentatie in principe Nederlands moet zijn en onder Creative Commons wordt gepubliceerd.

Het is fijn als de documentatie van een component ook makkelijk te vinden is voor bijvoorbeeld developers die naar de component code kijken. Daarom wordt de algemene component documentatie in een README.md geschreven in de component folder binnen `components`.

Om geen dubbel werk te doen renderen we de component niet in Docusaurus zelf, maar gebruiken we stories die in Storybook worden gepubliceerd. Deze stories houden we klein, zodat we hem per component in een Docusaurus iframe in kunnen laden.

### Toevoegen nieuwe structuur

De structuur van de `documentation/website` folder wordt met name gebruikt in de sidebar van de website. Deze sidebar wordt [geconfigureerd](https://docusaurus.io/docs/sidebar) met `packages/docusaurus/sidebarConfig.js`.

Daarnaast zorgt de configuratie van de hoofdnavigatie ervoor dat het menu bovenin naar verschillende pagina's verwijst. Deze configuratie staat in `packages/docusaurus/navigationConfig.js`.

## Ontwikkelen

De Docusaurus is momenteel standalone, omdat hij een andere React versie nodig heeft dan onze Storybook.
Daarom worden de bestanden uit `documentation` en `components` die we nodig hebben tijdens de ontwikkeling en build stappen automagisch gekopieerd in `tmp` folders.

In de algemene `package.json` zijn wel alle scripts die nodig zijn voor het lokaal draaien van de documentatie opgenomen.

`npm run docs` kopieert alles wat je nodig hebt en start de documentatie op [http://localhost:3000/rvo/](http://localhost:3000/rvo/) Een watcher zorgt er in principe voor dat nieuwe aanpassingen in de documentatie ook gelijk te zien zijn. Mocht dit niet lukken, dan kun je af en toe de documentatie opnieuw opstarten.

Als je wil weten of de documentatie ook gebuild werkt, dan kan je dit testen met `npm run build:docs` gevolgd door `npm run serve:docs`.

### Gedeelde documenten met frontmatter

Docusaurus gebruikt metadata aan het begin van `.md` en `.mdx` bestanden voor het genereren van bijvoorbeeld de sidebar labels en volgorde. Storybook herkend dit niet als metadata en stop het gewoon in een paragraaf om te lezen.

In Storybook gebruiken we een component om `.md` heen, die dit oplost, maar voor `.mdx` is dat niet zo makkelijk. Daarom gebruiken we voor bijvoorbeeld `kleuren.mdx` een extra `_kleuren.mdx` waar het gedeelde document in staat zónder frontmatter. Die wordt gebruikt in storybook en ingeladen in het docusaurus document `kleuren.mdx`.
Bestanden met `_` ervoor worden verder door docusaurus genegeerd.

### Ontwikkelen met een lokale storybook

Om lokale stories in te laden tijdens het ontwikkelen van component documentatie in Docusaurus kun je de storybook verwijzing in docusaurus aanpasssen. Het is handig om dan een gebuilde versie van storybook te gebruiken, omdat anders de verschillende 'watchers' elkaar in de weg kunnen zitten.

1. Ga naar de root van de `rvo` repository
1. Draai `npm run build:storybook`
1. Draai `npm run serve:storybook` om deze gebuilde versie in de browser te openen
1. Deze gebuilde versie draait nu op `localhost:8080`, vergeet niet om deze steeds opnieuw te bouwen als je in storybook veranderingen hebt die je in docusaurus wil zien.
1. Open `packages/docusaurus/docusaurus.config.js`
1. Verander `storybookUrl: 'https://nl-design-system.github.io/rvo/storybook/'` naar `storybookUrl: 'http://localhost:8080'`,
1. Draai `npm run docs`
1. Tada, je locale storybook wordt getoond en gelinkt in docusaurus component documentatie
1. BELANGRIJK: vergeet niet na het ontwikkelen de `storybookUrl` weer aan te passen naar `https://nl-design-system.github.io/rvo/storybook/`
