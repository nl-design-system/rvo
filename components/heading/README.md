# Heading

## Wanneer gebruik je een heading?

Je gebruikt een heading om duidelijk te maken dat het om een koptekst gaat. De content van dit component wordt altijd bepaald door het te wrappen in de `h-element`. Hieronder een aantal voorbeelden als je de CSS package gebruikt en als je de React Package gebruikt

### CSS

Als je de CSS classes gaat toepassen dan moeten alle classes gebruikt worden op het h-element. De volgende classes zijn aanwezig:

- utrecht-heading-(number 1 - 6)
- rvo-heading
- rvo-heading--margin-(number 1 - 6) | Als je margin wilt toepassen. Nummer moet gelijk zijn aan het h-element dat gebruikt wordt.
- rvo-heading--normal | Als de font-weight normal moet zijn.

Als de content van een heading uit meerdere items bestaat, dan deze classes toepassen om ruimte tussen elementen te geven.

- rvo-heading--gap-sm | Als je h1 of h2 gebruikt, deze class toepassen.
- rvo-heading--gap-xs | Bij de overige h-elementen deze class toepassen.

### React

Import als gebruikelijk en wrap de inhoud in de `<Heading>`-tags.

#### Iconen gebruiken

Heading ondersteund ook het gebruik van het `<Icon>` component dat aangeboden wordt in ROOS. Als je een icoon toepast dan wordt de kleur en size al bepaald door de CSS, dus deze hoef je niet te declareren als parameters voor het icoon.

## Richtlijnen

- Gebruik maximaal één h1.
- Zorg ervoor dat de tekst in de heading duidelijk aangeeft waar de pagina of onderstaande tekst over gaat.
- Bij het gebruik van een heading met zowel dikgedrukte als normale tekst kun je de class `utrecht-heading--mixed` gebruiken. Deze class zorgt ervoor dat de heading standaard niet dikgedrukt is zodat je delen van de tekst dikgedrukt kunt maken met `<strong>` elementen.
