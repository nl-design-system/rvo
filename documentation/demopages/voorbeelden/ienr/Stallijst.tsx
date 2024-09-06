import {
  Button,
  Footer,
  Header,
  Heading,
  Icon,
  LayoutColumnRow,
  MenuBar,
  MobileMenuBar,
  Pagination,
} from '@nl-rvo/components';
import '../../../../components/text-helpers/index.scss';

const Stallijst = () => {
  return (
    <body className="rvo-theme rvo-responsive">
      <Header />
      <MobileMenuBar
        iconPlacement="before"
        useIcons={true}
        isOpen={false}
        submenuItems={[]}
        size="md"
        items={[
          {
            label: 'Overzicht',
            link: 'iframe.html?args=&id=demo-pagina-s-cmor-overzicht--default&viewMode=story',
            icon: 'home',
            active: true,
          },
          {
            label: 'Mijn dossier',
            link: 'iframe.html?args=&id=demo-pagina-s-cmor-mijn-dossier--default&viewMode=story',
            icon: 'map',
          },
          { label: 'Mijn berichten', link: '#', icon: 'mail' },
          { label: 'Profiel & voorkeuren', link: '#', icon: 'user' },
        ]}
      ></MobileMenuBar>
      <MenuBar
        items={[
          {
            label: 'Identificatie en Registratie van uw dieren',
            link: '#',
          },
          {
            align: 'right',
            label: 'Hulp & Contact',
            link: '#',
          },
          {
            align: 'right',
            label: 'English',
            icon: 'wereldbol',
            link: '#',
          },
          {
            align: 'right',
            label: 'Boer Overveen B.V',
            link: '#',
            active: true,
            icon: 'user',
          },
        ]}
        size="lg"
        useIcons={true}
        iconPlacement="before"
        maxWidth="lg"
      />

      <main className="rvo-sidebar-layout__container">
        <div className="rvo-sidebar-layout rvo-max-width-layout rvo-max-width-layout--lg">
          <div className="rvo-sidebar-layout__sidebar rvo-sidebar-layout__sidebar--bg">
            <MenuBar
              direction="vertical"
              linkColor="zwart"
              horizontalRule={false}
              items={[
                {
                  label: 'Dashboard',
                  link: 'iframe.html?args=&id=demo-pagina-s-i-r-dashboard--default&viewMode=story',
                  icon: 'home',
                },
                {
                  label: 'Houder en UBN',
                  link: '#',
                  icon: 'user',
                },
                {
                  label: 'Melden',
                  link: 'iframe.html?args=&id=demo-pagina-s-i-r-import--default&viewMode=story',
                  icon: 'plus',
                },
                { label: 'Wijzigen & intrekken', link: '#', icon: 'terug' },
                {
                  label: 'Bekijken',
                  link: 'iframe.html?args=&id=demo-pagina-s-i-r-stallijst--default&viewMode=story',
                  icon: 'oog',
                  active: true,
                },
                { label: 'Machtigen', link: '#', icon: 'refund' },
                { label: 'Overzichten', link: '#', icon: 'opsomming' },
              ]}
              size="md"
              useIcons={true}
              iconPlacement="before"
              maxWidth="md"
            />
          </div>
          <div className="rvo-sidebar-layout__content">
            <LayoutColumnRow size="xl">
              <div>
                <LayoutColumnRow size="md" row={true} alignItems="center">
                  <Icon size="3xl" icon="koe" color="zwart"></Icon>
                  <Heading type="h1" noMargins={true}>
                    Stallijst Rund
                  </Heading>
                  <Button kind="secondary" size="xs">
                    Wijzig dier
                  </Button>
                  <Button kind="secondary" size="xs">
                    Download stallijst
                  </Button>
                </LayoutColumnRow>
                <h2 className="utrecht-heading-2 rvo-heading--no-margins rvo-heading--mixed">
                  Er zijn &nbsp;
                  <span className="rvo-text--bold">6</span> runderen geregistreerd
                </h2>
              </div>
              <div className="rvo-accordion">
                <details className="rvo-accordion__item">
                  <summary className="rvo-accordion__item-summary">
                    <h3 className="utrecht-heading-3 rvo-accordion__item-title rvo-heading--no-margins rvo-heading--mixed">
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--closed"
                        role="img"
                        aria-label="Delta omlaag"
                      ></span>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--open"
                        role="img"
                        aria-label="Delta omhoog"
                      ></span>
                      Uitleg over de stallijst
                    </h3>
                  </summary>
                  <div className="rvo-accordion__content">
                    <h3>Uitleg de stallijst</h3>
                    <p>Op de stallijst staan de dieren die op de gekozen peildatum op uw UBN staan.&nbsp;&nbsp;</p>{' '}
                    <p>
                      Standaard staan alle dieren op de pagina. Rechts onderaan de pagina kunt u dit aantal aanpassen.
                      Wilt u een andere volgorde? Bijvoorbeeld van jong naar oud. Klik dan op de naam van de kolom. In
                      dit geval Geboortedatum.
                    </p>{' '}
                    <p>
                      Wilt u de stallijst in excel? Dit kan door links onderaan de pagina op de knop Download stallijst
                      te klikken.
                    </p>{' '}
                    <p>
                      <strong>
                        Filter
                        <br />
                      </strong>
                      Door op Toon extra filters te klikken kunt u een keuze maken welke dieren u wilt zien. Hoe werkt
                      dat? U vult bij geboortedatum &lsquo;van&rsquo; 1 januari 2018 (01-01-2018) in. En bij
                      geboortedatum &lsquo;tot&rsquo; 1 januari 2022 (01-01-2022). Klik daarna op Zoek dieren. U ziet
                      dan alleen de dieren die in die periode zijn geboren. Zo kunt u ook zoeken werknummers en
                      levensnummers.
                    </p>{' '}
                    <p>
                      <strong>Gegevens </strong>
                      <strong>per</strong>
                      <strong> dier</strong>
                      <br />
                      Wilt u de gegevens van een bepaald dier bekijken? Klik dan op het oogje voor het dier. U ziet dan
                      de basisgegevens van het dier. Daarnaast worden ook de Verblijfplaatsen, de Vlaggen en eventuele
                      Nakomelingen weergegeven. Door op het blok te klikken ziet u de gegevens. U ziet alleen de blokken
                      waarvoor gegevens van de dier bekend zijn. Heeft het dier bijvoorbeeld geen vlaggen? Dan wordt het
                      blok Vlaggen ook niet weergegeven. Wilt u ook de meldingen van dit dier bekijken? Klik dan op
                      Meldingen bekijken.
                    </p>{' '}
                    <p>
                      <strong>
                        Melden via de stallijst
                        <br />
                      </strong>
                      Via de stallijst kunt u nu ook dieren toevoegen of dieren afvoeren. Via de knop Dieren toevoegen
                      kunt u een geboorte-, aanvoer- of importmelding doen. Via de knop Dieren afvoeren kunt u een
                      afvoer-, export- of doodmelding doen. U moet dan wel eerst een vinkje zetten voor het dier
                      waarvoor u de melding wilt doen. De bekende gegevens zijn dan al ingevuld.
                    </p>{' '}
                    <p>
                      Wilt u van een dier nog een melding wijzigen? En is de termijn hiervoor nog niet voorbij? Dan kan
                      dit via Actie uitvoeren. Klik op de drie puntjes achter het dier en kies Wijzigen.
                    </p>{' '}
                    <p>&nbsp;</p>
                  </div>
                </details>
                <details className="rvo-accordion__item">
                  <summary className="rvo-accordion__item-summary">
                    <h3 className="utrecht-heading-3 rvo-accordion__item-title rvo-heading--no-margins rvo-heading--mixed">
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--closed"
                        role="img"
                        aria-label="Delta omlaag"
                      ></span>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw rvo-accordion__item-icon--open"
                        role="img"
                        aria-label="Delta omhoog"
                      ></span>
                      Uitleg over het aantal dieren
                    </h3>
                  </summary>
                  <div className="rvo-accordion__content">
                    <h3>Toelichting</h3>
                    <p>
                      Hier ziet u het totaal aantal dieren van de diersoort op het UBN. U ziet maximaal 5.000 dieren.
                      Heeft u meer dan 5.000 dieren? Maak dan een selectie op bijvoorbeeld werknummer of geboortedatum.
                      Klik op Toon extra filters om een selectie te maken.
                    </p>
                    <p>
                      Als u de stallijst opent staan de dieren op volgorde van levensnummer. Wilt u een andere volgorde,
                      bijvoorbeeld op leeftijd? Klik dan &eacute;&eacute;n keer op de kolomnaam Geboortedatum. Door op
                      een kolomnaam te klikken past u de volgorde van de dieren voor iedere kolom aan.
                    </p>
                    <p>
                      Wilt u de stallijst downloaden in Excel? Klik dan op de knop Download stallijst. Deze vindt u
                      onderaan de stallijst.
                    </p>
                  </div>
                </details>
              </div>
              <div className="rvo-table--responsive">
                <table className="rvo-table">
                  <thead className="rvo-table-head">
                    <tr className="rvo-table-row">
                      <th className="rvo-table-header rvo-layout-row rvo-layout-gap--sm">
                        <input id="field" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                      </th>
                      <th className="rvo-table-header"></th>
                      <th scope="col" className="rvo-table-header">
                        Landcode
                      </th>
                      <th
                        scope="col"
                        className="rvo-table-header rvo-table-header--sortable rvo-layout-row rvo-layout-gap--sm"
                      >
                        Levensnummer
                        <button
                          className="utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"
                          type="button"
                        >
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--sm rvo-icon--hemelblauw"
                            role="img"
                            aria-label="Delta omhoog"
                          ></span>
                        </button>
                      </th>
                      <th scope="col" className="rvo-table-header">
                        Werknummer
                      </th>
                      <th scope="col" className="rvo-table-header">
                        Geboortedatum
                      </th>
                      <th scope="col" className="rvo-table-header">
                        Geslacht
                      </th>
                      <th scope="col" className="rvo-table-header">
                        Aanvoerdatum
                      </th>
                      <th scope="col" className="rvo-table-header">
                        Afvoerdatum
                      </th>
                      <th scope="col" className="rvo-table-header"></th>
                    </tr>
                  </thead>
                  <tbody className="rvo-table-body">
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <input id="field" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                      </td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-oog rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Bekijk
                        </a>
                      </td>
                      <td className="rvo-table-cell  rvo-table-cell--title">NL</td>
                      <td className="rvo-table-cell">100054151431 </td>
                      <td className="rvo-table-cell ">51431</td>
                      <td className="rvo-table-cell">14-03-2013</td>
                      <td className="rvo-table-cell">man</td>
                      <td className="rvo-table-cell">15-02-2021</td>
                      <td className="rvo-table-cell"></td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-meer rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Acties
                        </a>
                      </td>
                    </tr>
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <input id="field" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                      </td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-oog rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Bekijk
                        </a>
                      </td>
                      <td className="rvo-table-cell  rvo-table-cell--title">NL</td>
                      <td className="rvo-table-cell">100054151431 </td>
                      <td className="rvo-table-cell ">51431</td>
                      <td className="rvo-table-cell">14-03-2013</td>
                      <td className="rvo-table-cell">man</td>
                      <td className="rvo-table-cell">15-02-2021</td>
                      <td className="rvo-table-cell"></td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-meer rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Acties
                        </a>
                      </td>
                    </tr>
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <input id="field" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                      </td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-oog rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Bekijk
                        </a>
                      </td>
                      <td className="rvo-table-cell  rvo-table-cell--title">NL</td>
                      <td className="rvo-table-cell">100054151431 </td>
                      <td className="rvo-table-cell ">51431</td>
                      <td className="rvo-table-cell">14-03-2013</td>
                      <td className="rvo-table-cell">man</td>
                      <td className="rvo-table-cell">15-02-2021</td>
                      <td className="rvo-table-cell"></td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-meer rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Acties
                        </a>
                      </td>
                    </tr>
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <input id="field" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                      </td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-oog rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Bekijk
                        </a>
                      </td>
                      <td className="rvo-table-cell  rvo-table-cell--title">NL</td>
                      <td className="rvo-table-cell">100054151431 </td>
                      <td className="rvo-table-cell ">51431</td>
                      <td className="rvo-table-cell">14-03-2013</td>
                      <td className="rvo-table-cell">man</td>
                      <td className="rvo-table-cell">15-02-2021</td>
                      <td className="rvo-table-cell"></td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-meer rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Acties
                        </a>
                      </td>
                    </tr>
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <input id="field" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                      </td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-oog rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Bekijk
                        </a>
                      </td>
                      <td className="rvo-table-cell  rvo-table-cell--title">NL</td>
                      <td className="rvo-table-cell">100054151431 </td>
                      <td className="rvo-table-cell ">51431</td>
                      <td className="rvo-table-cell">14-03-2013</td>
                      <td className="rvo-table-cell">man</td>
                      <td className="rvo-table-cell">15-02-2021</td>
                      <td className="rvo-table-cell"></td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-meer rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Acties
                        </a>
                      </td>
                    </tr>
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <input id="field" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                      </td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-oog rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Bekijk
                        </a>
                      </td>
                      <td className="rvo-table-cell  rvo-table-cell--title">NL</td>
                      <td className="rvo-table-cell">100054151431 </td>
                      <td className="rvo-table-cell ">51431</td>
                      <td className="rvo-table-cell">14-03-2013</td>
                      <td className="rvo-table-cell">man</td>
                      <td className="rvo-table-cell">15-02-2021</td>
                      <td className="rvo-table-cell"></td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-meer rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Acties
                        </a>
                      </td>
                    </tr>
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <input id="field" name="group" className="rvo-checkbox__input" type="checkbox" value="" />
                      </td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-oog rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Bekijk
                        </a>
                      </td>
                      <td className="rvo-table-cell  rvo-table-cell--title">NL</td>
                      <td className="rvo-table-cell">100054151431 </td>
                      <td className="rvo-table-cell ">51431</td>
                      <td className="rvo-table-cell">14-03-2013</td>
                      <td className="rvo-table-cell">man</td>
                      <td className="rvo-table-cell">15-02-2021</td>
                      <td className="rvo-table-cell"></td>
                      <td className="rvo-table-cell">
                        <a className="rvo-link rvo-link--with-icon rvo-link--no-underline rvo-link--normal" href="#">
                          <span
                            className="utrecht-icon rvo-icon rvo-icon-meer rvo-icon--md rvo-icon--hemelblauw rvo-link__icon--before"
                            role="img"
                            aria-label="Oog"
                          ></span>
                          Acties
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Pagination numberOfPages={10} activePage={5}></Pagination>
            </LayoutColumnRow>
          </div>
        </div>
      </main>
      <Footer
        columns={[
          {
            label: 'RVO',
            items: [
              { content: 'Over ons', link: '#' },
              { content: 'Contact', link: '#' },
              { content: 'Pers', link: '#' },
              { content: 'Zaken regelen bij RVO', link: '#' },
            ],
          },
          {
            label: 'Over deze site',
            items: [
              { content: 'Privacy', link: '#' },
              { content: 'Cookies en anti-spam', link: '#' },
              { content: 'Toegankelijkheid', link: '#' },
              { content: 'Proclaimer', link: '#' },
            ],
          },
          {
            label: 'Snel naar',
            items: [
              { content: 'Onderwerpen A t/m Z', link: '#' },
              { content: 'Klantenpanel', link: '#' },
              { content: 'Documenten en publicaties', link: '#' },
              { content: 'Overheidspublicaties en auteursrecht', link: '#' },
            ],
          },
          {
            label: 'Blijf op de hoogte',
            items: [
              { content: 'Social media', link: '#' },
              { content: 'RSS', link: '#' },
              { content: 'Gratis nieuwsbrief', link: '#' },
            ],
          },
        ]}
      />
    </body>
  );
};

export default Stallijst;
