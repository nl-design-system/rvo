import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { Link } from '@nl-rvo/components/link/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import '../common/style.scss';

const MijnZaken = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--mijn-rvo">
      <Header />

      <details className="rvo-responsive-menu">
        <summary>
          <span className="utrecht-icon rvo-icon rvo-icon-menu rvo-icon--lg rvo-icon--wit"></span>
          <span className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--lg rvo-icon--wit"></span>Menu
        </summary>
        <MenuBar
          items={[
            { label: 'Mijn zaken', icon: 'map', link: '#' },
            { label: 'Mijn documenten', icon: 'document-blanco', link: '#' },
            { label: 'Uitloggen', icon: '', link: '#', align: 'right' },
          ]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          menuMaxWidth="md"
        />
      </details>
      <MenuBar
        items={[
          { label: 'Mijn zaken', icon: 'map', link: '#' },
          { label: 'Mijn documenten', icon: 'document-blanco', link: '#' },
          { label: 'Uitloggen', icon: '', link: '#', align: 'right' },
        ]}
        size="lg"
        useIcons={true}
        iconPlacement="before"
        menuMaxWidth="md"
      />

      <div className="rvo-hero rvo-hero--man-met-laptop">
        <div className="rvo-hero-bg-img-container">
          <img src="/rvo/images/hero/hero-bg--man-met-laptop.webp" className="rvo-hero-bg-img" />
        </div>
        <MaxWidthLayout size="md">
          <div className="rvo-hero-content">
            <div className="rvo-hero-text">
              <Heading type="h1" textContent="Mijn zaken" />
              <p className="rvo-hero-description">
                Hier vindt u een overzicht met alle uw online zaken bij de Rijksdienst voor Ondernemend Nederland (RVO).
              </p>
            </div>
            <div className="rvo-hero-img-container">
              <img src="/rvo/images/hero/man-met-laptop.webp" className="rvo-hero-img" />
            </div>
          </div>
        </MaxWidthLayout>
      </div>
      <LayoutColumnRow size="3xl">
        <main>
          <div className=" rvo-table--w-filter rvo-table--mijn-zaken">
            <div className="rvo-responsive-filter-wrapper">
              <MaxWidthLayout size="md">
                <details className="rvo-responsive-filters" open>
                  <summary className="rvo-responsive-filters-toggle">
                    Filters
                    <span className="utrecht-icon rvo-icon rvo-icon-delta-omhoog rvo-icon--md rvo-icon--hemelblauw"></span>
                    <span className="utrecht-icon rvo-icon rvo-icon-delta-omlaag rvo-icon--md rvo-icon--hemelblauw"></span>
                  </summary>
                  <div className="rvo-tmp-filters">
                    <Fieldset legend="">
                      <TextInputField labelText="Zoek op omschrijving"></TextInputField>
                      <TextInputField labelText="Zoek op zaaknummer" valueType="numeric"></TextInputField>
                      <details className="rvo-tmp-filter">
                        <summary>
                          <div className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                            <label
                              className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs"
                              htmlFor="fieldId"
                            >
                              <span className="rvo-form-field__label-text">Status zaak</span>
                            </label>
                            <div className="rvo-select-wrapper">
                              <div className="utrecht-select utrecht-select--html-select rvo-filter-select-placeholder">
                                Maak een keuze
                              </div>
                            </div>
                          </div>
                        </summary>
                        <div className="rvo-checkbox__group rvo-layout-column rvo-layout-gap--sm">
                          <label
                            className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                            htmlFor="optionA"
                          >
                            <input type="checkbox" id="optionA" name="group" className="rvo-checkbox__input" value="" />
                            Beslissing genomen
                          </label>
                          <label
                            className="rvo-checkbox rvo-checkbox--checked rvo-layout-row rvo-layout-gap--sm"
                            htmlFor="optionB"
                          >
                            <input type="checkbox" id="optionB" name="group" className="rvo-checkbox__input" value="" />
                            Bij U in bewerking
                          </label>
                          <label
                            className="rvo-checkbox rvo-checkbox--not-checked rvo-layout-row rvo-layout-gap--sm"
                            htmlFor="optionC"
                          >
                            <input type="checkbox" id="optionC" name="group" className="rvo-checkbox__input" value="" />
                            Afgehandeld
                          </label>
                        </div>
                      </details>
                    </Fieldset>
                  </div>
                </details>
              </MaxWidthLayout>
            </div>
            {/* 
              
              RR-2022-10-11 Geprobeerd op te lossen met tabellen maar lijkt toch niet de beste manier.
              Tabellen zijn om dingen te vergelijken en werken slecht repsonsive. Een lijst met items is een betere oplossing.
              
              <div className="rvo-table--responsive">
                <table className="rvo-table">
                  <thead className="rvo-table-head">
                    <tr className="rvo-table-row">
                      <th scope="col" className="rvo-table-header">
                        Omschrijving
                      </th>
                      <th scope="col" className="rvo-table-header rvo-table-header--sortable">
                        Zaaknummer{' '}
                        <div className="rvo-icon rvo-icon-delta-omlaag rvo-icon--sm rvo-icon--hemelblauw"></div>
                      </th>
                      <th scope="col" className="rvo-table-header rvo-table-header--sortable">
                        Status zaak{' '}
                        <div className="rvo-icon rvo-icon-delta-omlaag rvo-icon--sm rvo-icon--hemelblauw"></div>
                      </th>
                      <th scope="col" className="rvo-table-header rvo-table-header--sortable">
                        Datum <div className="rvo-icon rvo-icon-delta-omlaag rvo-icon--sm rvo-icon--hemelblauw"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="rvo-table-body">
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <Link
                          url="#"
                          content="Gemeenschappelijke Marktordening 2023"
                          showIcon="before"
                          icon="delta-naar-rechts"
                          iconSize="sm"
                          noUnderline={true}
                        ></Link>
                      </td>
                      <td className="rvo-table-cell">22292000001</td>
                      <td className="rvo-table-cell">Bij u in bewerking</td>
                      <td className="rvo-table-cell">03-08-2022</td>
                    </tr>
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <Link
                          url="#"
                          content="POP3 Samenwerking Pilots gezonde kalverketen"
                          showIcon="before"
                          icon="delta-naar-rechts"
                          iconSize="sm"
                          noUnderline={true}
                        ></Link>
                      </td>
                      <td className="rvo-table-cell">22269000022</td>
                      <td className="rvo-table-cell">Bij u in bewerking </td>
                      <td className="rvo-table-cell">03-08-2022</td>
                    </tr>
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <Link
                          url="#"
                          content="Overheidsopdrachten R&N"
                          showIcon="before"
                          icon="delta-naar-rechts"
                          iconSize="sm"
                          noUnderline={true}
                        ></Link>
                      </td>
                      <td className="rvo-table-cell">16148000014</td>
                      <td className="rvo-table-cell">Beslissing genomen</td>
                      <td className="rvo-table-cell">26-10-2021</td>
                    </tr>
                    <tr className="rvo-table-row">
                      <td className="rvo-table-cell">
                        <Link
                          url="#"
                          content="OverheidsOpdrachten NVLG"
                          showIcon="before"
                          icon="delta-naar-rechts"
                          iconSize="sm"
                          noUnderline={true}
                        ></Link>
                      </td>
                      <td className="rvo-table-cell">16269000033</td>
                      <td className="rvo-table-cell">Afgehandeld</td>
                      <td className="rvo-table-cell">23-10-2019</td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
          </div>
        </main>

        <footer className="rvo-footer">
          <MaxWidthLayout size="lg">
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="Algemeen"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Help"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Toegankelijkheid"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Webservices"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Privacy"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Sitemap"></Link>
              </li>
            </ul>
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="Hoe werkt"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Machtigingen en TAN-codes"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Zaken regelen bij RVO"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Inschrijven en registreren"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Bedrijfsoverdracht melden"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Overlijden melden"></Link>
              </li>
            </ul>
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="Naar"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Abonneren op nieuwsbrief"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Klantenpanel"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Berichtenbox voor bedrijven"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="RVO.nl"></Link>
              </li>
            </ul>
            <ul className="rvo-footer-menu">
              <li className="rvo-footer-menu-title">
                <Heading type="h3" textContent="Contact"></Heading>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Contactgegevens"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Contactformulier"></Link>
              </li>
              <li className="rvo-footer-menu-item">
                <div className="rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--wit"></div>
                <Link url="#" content="Aanvraag voorlichting/spreker"></Link>
              </li>
            </ul>
          </MaxWidthLayout>
        </footer>
      </LayoutColumnRow>
    </div>
  );
};

export default MijnZaken;
