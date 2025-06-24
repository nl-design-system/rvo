<!-- @license CC0-1.0 -->

Een text input veld is een invoerveld waarmee gebruikers tekst kunnen invoeren.

# Wanneer gebruik je een text input?

Je gebruikt een text input wanneer gebruikers vrije tekst moeten invoeren, zoals namen, e-mailadressen of wachtwoorden.

Gebruik geen text input wanneer de invoer beperkt is tot een specifieke set waarden. In dat geval is een dropdown, radio button of checkbox een betere keuze.

# Anatomie van het component

Het component bestaat minimaal uit:

- Een label
- Een invoerveld

Mogelijke andere element bij het text input veld zijn:

- Een helper text die hints geven over wat er ingevuld moet worden.
- Expendable content: een uitklapbare helper text als de hints uit meerdere regels bestaan.
- Een feedback melding zoals een waarschuwing of een foutmelding als er een verkeerde waarde is ingevuld.

# Richtlijnen

- Schrijf duidelijke labels. Vermijd jargon en complexe taal.
- Gebruik geen placeholder tekst. Deze verdwijnt als de gebruiker begint met typen en ze worden niet door alle browsers ondersteunt. Maak gebruik van duidelijke labels en eventueel een helper text voor extra hints.
- Geef het text input veld dezelfde grootte als de te verwachte input. Een postcode veld hoeft bijvoorbeeld niet groter te zijn de dan de 7 tekens die het maximaal kan bevatten.
- Gebruik alleen `<input type="number">` als het veld bedoeld is voor een waarde waarmee rekenen, verhogen of verlagen logisch is (zoals een hoeveelheid, leeftijd of prijs).
- Voor velden die uit cijfers bestaan maar geen echte getallen zijn (zoals postcode, telefoonnummer, 2FA-code, burgerservicenummer, creditcardnummer), gebruik `<input type="text" inputmode="numeric">`. Zo krijgen gebruikers een numeriek toetsenbord op mobiel, maar voorkom je onjuiste validatie en ongewenste spinner-knoppen.

# Rijkshuisstijl

Vanuit de Rijkshuisstijl zijn er geen specifieke richtlijnen wat betreft het text input component.

# Bronnen

- [The problem with placeholders and what to do instead](https://web.archive.org/web/20250511143112/https://adamsilver.io/blog/the-problem-with-placeholders-and-what-to-do-instead/)
