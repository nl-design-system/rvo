# Grid

Een grid wordt gebruikt om elementen naast elkaar te zetten in evenredige vlakken.

De grid begint in één kolom en schakelt naar de gekozen meerdere kolommen opties wanneer daar binnen de container genoeg ruimte voor is. Een kolom heeft altijd een minimale waarde van 276 pixels.

## Gebruik van kolom divisions anders dan '1fr' op alle kolommen

Standaard is de grid opgebouwd met kolommen van 1fr. Je kunt de kolommen in een grid echter zelf op verschillende manieren verdelen.

Bij gebruik als React component:

- De division prop is een string die de kolommen definieert. Deze string is een lijst van kolommen met een breedte in pixels of een percentage. Bijvoorbeeld: `2fr 1fr 2fr` of `200px 1fr 200px`.

Bij gebruik als CSS class:

- Gebruik de class 'rvo-layout-grid--division' en een style attribuut om de variabele '--grid-division' te zetten naar de gewenste string.
  Bijvoorbeeld: `<div class="rvo-layout-grid rvo-layout-grid--division" style="--grid-division: 2fr 1fr 2fr;">...</div>`
