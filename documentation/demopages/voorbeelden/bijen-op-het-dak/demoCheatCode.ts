const PROJECT_KEY = 'bijen-op-het-dak-project';
const PANDEN_KEY = 'bijen-op-het-dak-panden';
const BIJENKASTEN_KEY = 'bijen-op-het-dak-bijenkasten';

export const fillDemoData = (): void => {
  sessionStorage.setItem(
    PROJECT_KEY,
    JSON.stringify({
      naam: 'Bijenproject Energieweg',
      omschrijving: 'Plaatsing van bijenkasten op het dak van ons bedrijfspand aan de Energieweg in Rotterdam.',
      startdatum: '2026-03-01',
    }),
  );

  sessionStorage.setItem(
    PANDEN_KEY,
    JSON.stringify([
      {
        straatnaam: 'Energieweg',
        huisnummer: '42',
        postcode: '2909 LV',
        plaatsnaam: 'Rotterdam',
        daktype: 'Plat dak',
        dakoppervlak: '250',
        bereikbaar: 'Ja',
      },
    ]),
  );

  sessionStorage.setItem(
    BIJENKASTEN_KEY,
    JSON.stringify([
      {
        pandIndex: 0,
        pandLabel: 'Pand 1 — Energieweg 42, Rotterdam',
        aantalKasten: '3',
        typeBijenkast: 'Langstroth kast',
      },
    ]),
  );
};
