# Image component

Een toegankelijke, responsieve afbeeldingcomponent voor het NL Design System. En het tonen van een afbeelding op een duurzame en toegankelijke manier.

De **Image** component toont afbeeldingen op een consistente en toegankelijke manier, met optionele bijschriften, afgeronde hoeken op basis van design tokens en ondersteuning voor responsieve `<picture>`-bronnen.  
Gebruik deze component voor contentafbeeldingen, hero-secties of illustraties die onderdeel zijn van de inhoudsstructuur.

---

## Kenmerken

- Responsief: ondersteunt `<picture>` met meerdere bronformaten.
- Toegankelijk: vereist `alt`-tekst en ondersteunt `caption` via `<figure>` en `<figcaption>`.
- Design tokens: radius-groottes en spacing volgen het tokensysteem.
- Prestatiegericht: optionele ondersteuning voor `loading`, `decoding` en `fetchPriority`.
- Herbruikbaar: geschikt voor gebruik binnen elk project als zelfstandige React-component.

## Richtlijnen

- Gebruik bij voorkeur het WebP-bestandsformaat voor afbeeldingen die zijn opgebouwd uit pixels, zoals foto's, screenshots en complexe afbeeldingen. Als het niet mogelijk is om WebP te gebruiken, hanteer dan het JPG- of PNG-formaat.
- Gebruik het SVG-bestandsformaat voor afbeeldingen die zijn opgebouwd uit geometrische vormen (vectorafbeeldingen), zoals logo's, iconen, illustraties, grafieken en diagrammen.
- Laad een afbeelding in met de juiste grootte. Bijvoorbeeld: als de container een maximale breedte heeft van 1280 pixels, zorg er dan voor dat de afbeelding ook met een breedte van 1280 pixels, en niet groter, wordt ingeladen.
- Bied waar mogelijk meerdere variaties van een afbeelding aan om retinaschermen te ondersteunen.
- Stel de kwaliteit van rasterafbeeldingen (WebP, JPG en PNG) in op maximaal 85 procent. Dit maakt de bestandsgrootte kleiner, want alles boven 85 procent is voor het menselijk oog niet zichtbaar.
- Geef elke afbeelding die belangrijk is om de inhoud te begrijpen een alt-tekst mee die de inhoud van de afbeelding duidelijk omschrijft voor gebruikers die een schermlezer gebruiken.
- Als een afbeelding enkel decoratief is, geef de afbeelding wel een alt-attribuut mee, maar laat deze leeg.

## Wanneer gebruik je image

Als er een afbeelding getoond moet worden.
