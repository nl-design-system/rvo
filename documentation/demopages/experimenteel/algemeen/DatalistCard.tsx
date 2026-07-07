import { Footer, Header, Heading, LayoutFlow, MaxWidthLayout } from '@nl-rvo/component-library-react';
import '../../common/datalist-card.scss';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const cards = [
  {
    ubn: '49434',
    brs: '17440349',
    naam: 'J. van Dijk',
    bedrijf: 'L.M.W. Boeren Etc.',
    adres: 'Zonnestijn 129',
    postcode: '3332 NW',
    woonplaats: 'Zwijndrecht',
    diersoort: 'Geit',
  },
  {
    ubn: '3652',
    brs: '88213045',
    naam: 'A. de Groot',
    bedrijf: 'Groene Weide Vof',
    adres: 'Kerkweg 14',
    postcode: '7511 AB',
    woonplaats: 'Enschede',
    diersoort: 'Schaap',
  },
  {
    ubn: '71849',
    brs: '55302198',
    naam: 'M. Jansen',
    bedrijf: 'Boerderij De Linde',
    adres: 'Molenstraat 3',
    postcode: '9401 KP',
    woonplaats: 'Assen',
    diersoort: 'Rund',
  },
  {
    ubn: '92034',
    brs: '34029871',
    naam: 'P. Bakker',
    bedrijf: 'Zonneweide Agro',
    adres: 'Dorpsstraat 22',
    postcode: '4132 CD',
    woonplaats: 'Vianen',
    diersoort: 'Kip',
  },
  {
    ubn: '15678',
    brs: '60918273',
    naam: 'S. Visser',
    bedrijf: 'Meadow Farms B.V.',
    adres: 'Industrieweg 8',
    postcode: '8011 CX',
    woonplaats: 'Zwolle',
    diersoort: 'Varken',
  },
  {
    ubn: '48213',
    brs: '71234905',
    naam: 'H. Mulder',
    bedrijf: 'De Grote Hoeve',
    adres: 'Veldweg 45',
    postcode: '7891 AB',
    woonplaats: 'Emmen',
    diersoort: 'Geit, Schaap',
  },
  {
    ubn: '63920',
    brs: '20938475',
    naam: 'R. Willems',
    bedrijf: 'Landgoed Zuidhoek',
    adres: 'Kanaaldijk 3',
    postcode: '4571 NP',
    woonplaats: 'Axel',
    diersoort: 'Rund',
  },
  {
    ubn: '27456',
    brs: '83920174',
    naam: 'K. Peters',
    bedrijf: 'Hoeve Nieuwland',
    adres: 'Achterweg 17',
    postcode: '9291 BT',
    woonplaats: 'Kollum',
    diersoort: 'Paardachtigen',
  },
  {
    ubn: '81023',
    brs: '45671203',
    naam: 'T. de Wit',
    bedrijf: 'Boerenbedrijf De Vries & Zn',
    adres: 'Oude Rijksweg 61',
    postcode: '3781 AR',
    woonplaats: 'Voorthuizen',
    diersoort: 'Kip, Rund',
  },
  {
    ubn: '39587',
    brs: '19283746',
    naam: 'L. Smit',
    bedrijf: 'Agrarisch Bedrijf Smit',
    adres: 'Molenpad 9',
    postcode: '6741 KL',
    woonplaats: 'Lunteren',
    diersoort: 'Schaap',
  },
];

const DatalistCard = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />
      <MaxWidthLayout size="md">
        <main className="rvo-padding-block-start--md rvo-padding-block-end--xl rvo-padding-inline-start--sm rvo-padding-inline-end--sm">
          <Heading type="h1" className="rvo-margin-block-end--2xl">
            Datalist Card
          </Heading>

          <LayoutFlow gap="xl">
            {cards.map((card) => (
              <div className="rvo-card rvo-card--outline" key={card.ubn}>
                <h3 className="utrecht-heading-3 rvo-heading rvo-heading--margin-3 rvo-heading--gap-xs rvo-padding-block-start--sm rvo-padding-inline-start--sm rvo-padding-inline-end--sm">
                  <a href="#" className="rvo-link rvo-link--no-underline rvo-link--full-card-link">
                    UBN: {card.ubn}
                  </a>
                </h3>
                <dl className="rvo-data-list rvo-data-list--horizontal">
                  <div className="rvo-data-list__group">
                    <dt>BRS</dt>
                    <dd>{card.brs}</dd>
                  </div>
                  <div className="rvo-data-list__group">
                    <dt>Naam</dt>
                    <dd>{card.naam}</dd>
                  </div>
                  <div className="rvo-data-list__group">
                    <dt>Bedrijf</dt>
                    <dd>{card.bedrijf}</dd>
                  </div>
                  <div className="rvo-data-list__group">
                    <dt>Adres</dt>
                    <dd>{card.adres}</dd>
                  </div>
                  <div className="rvo-data-list__group">
                    <dt>Postcode</dt>
                    <dd>{card.postcode}</dd>
                  </div>
                  <div className="rvo-data-list__group">
                    <dt>Woonplaats</dt>
                    <dd>{card.woonplaats}</dd>
                  </div>
                  <div className="rvo-data-list__group">
                    <dt>Diersoort</dt>
                    <dd>{card.diersoort}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </LayoutFlow>
        </main>
      </MaxWidthLayout>
      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </div>
  );
};

export default DatalistCard;
