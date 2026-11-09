const PROJECT_KEY = 'bijen-op-het-dak-project';
const PANDEN_KEY = 'bijen-op-het-dak-panden';
const BIJENKASTEN_KEY = 'bijen-op-het-dak-bijenkasten';
const OFFERTES_KEY = 'bijen-op-het-dak-offertes';
const TEKENINGEN_KEY = 'bijen-op-het-dak-tekeningen';

export const fillDemoData = (): void => {
  sessionStorage.setItem(
    PROJECT_KEY,
    JSON.stringify({
      naam: 'Bijenproject Energieweg',
      omschrijving: 'Plaatsing van bijenkasten op het dak van ons bedrijfsgebouw aan de Energieweg in Rotterdam.',
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
      {
        straatnaam: 'Havenstraat',
        huisnummer: '8',
        postcode: '2909 BL',
        plaatsnaam: 'Rotterdam',
        daktype: 'Plat dak',
        dakoppervlak: '180',
        bereikbaar: 'Ja',
      },
    ]),
  );

  sessionStorage.setItem(
    BIJENKASTEN_KEY,
    JSON.stringify([
      {
        pandIndex: 0,
        pandLabel: 'Energieweg 42, Rotterdam',
        aantalKasten: '3',
        typeBijenkast: 'Langstroth kast',
      },
      {
        pandIndex: 0,
        pandLabel: 'Energieweg 42, Rotterdam',
        aantalKasten: '2',
        typeBijenkast: 'Warré kast',
      },
      {
        pandIndex: 1,
        pandLabel: 'Havenstraat 8, Rotterdam',
        aantalKasten: '4',
        typeBijenkast: 'Langstroth kast',
      },
    ]),
  );

  sessionStorage.setItem(
    OFFERTES_KEY,
    JSON.stringify([{ bestandsnaam: 'offerte-plaatsing-bijenkasten.pdf', grootte: 2457600 }]),
  );

  sessionStorage.setItem(
    TEKENINGEN_KEY,
    JSON.stringify([{ bestandsnaam: 'tekeningen-dak-energieweg-havenstraat.pdf', grootte: 1843200 }]),
  );
};
