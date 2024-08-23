import { Footer, Grid, Header, Heading, Icon, LayoutColumnRow, Link, MenuBar } from '@nl-rvo/components';
// import '../common/filter.scss';

const Project = () => {
  return (
    <body className="rvo-theme">
      <Header link="#" />
      <LayoutColumnRow size="xl">
        <LayoutColumnRow size="xl">
          <MenuBar
            items={[
              {
                label: 'Home',
                link: '/iframe.html?id=demo-pagina-s-projects-rvo-nl-home--default&viewMode=story',
              },
              {
                label: 'Programmes',

                link: '#',
              },
              {
                active: true,
                label: 'Projects',
                link: '/iframe.html?args=&id=demo-pagina-s-projects-rvo-nl-filter--default',
              },
              {
                align: 'right',
                icon: 'zoek',
                label: 'Search',
                link: '#',
              },
            ]}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            maxWidth="md"
          />

          <main className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--md">
            <Grid layout="1fr2fr" columns="two" gap="xl">
              <div>
                <Heading>Legal Opinion OC DR Congo</Heading>
                <LayoutColumnRow size="sm">
                  <LayoutColumnRow size="xs">
                    <span className="rvo-text rvo-text--subtle">
                      <LayoutColumnRow row={true} size="xs">
                        <Icon icon="klok" color="grijs-700"></Icon>Published: 2 March 2020 | 11:29
                      </LayoutColumnRow>
                    </span>
                    <span className="rvo-text rvo-text--subtle">
                      <LayoutColumnRow row={true} size="xs">
                        <Icon icon="bewerken" color="grijs-700"></Icon>Updated: 30 april 2021 | 13:49
                      </LayoutColumnRow>
                    </span>
                  </LayoutColumnRow>

                  <LayoutColumnRow size="xl">
                    <div className="rvo-content">
                      <p className="rvo-text rvo-text--no-margins">
                        The Orange Corners programme has been launched in DRC. This programme includes financial
                        contributions from private partners. The programme also has the ambition to be sustainable. In
                        order to accommodate these dimensions of the Orange Corners programme in DRC, legal advice
                        concerning the Congolese law needs to be obtained on contracts, governance structures and the
                        establishment of legal entities.
                      </p>
                    </div>
                  </LayoutColumnRow>
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
                          Project images
                        </h3>
                      </summary>
                      <div className="rvo-accordion__content">
                        <LayoutColumnRow size="sm" row={true}>
                          <Link
                            icon="schilderij-met-bloemen-in-vaas"
                            showIcon="before"
                            iconSize="md"
                            noUnderline={true}
                          >
                            FDW12SA01_01
                          </Link>
                          <span className="rvo-text rvo-text--subtle">Image</span>
                        </LayoutColumnRow>
                        <LayoutColumnRow size="sm" row={true}>
                          <Link
                            icon="schilderij-met-bloemen-in-vaas"
                            showIcon="before"
                            iconSize="md"
                            noUnderline={true}
                          >
                            FDW12SA01_02
                          </Link>
                          <span className="rvo-text rvo-text--subtle">Image</span>
                        </LayoutColumnRow>
                        <LayoutColumnRow size="sm" row={true}>
                          <Link
                            icon="schilderij-met-bloemen-in-vaas"
                            showIcon="before"
                            iconSize="md"
                            noUnderline={true}
                          >
                            FDW12SA01_03
                          </Link>
                          <span className="rvo-text rvo-text--subtle">Image</span>
                        </LayoutColumnRow>
                        <LayoutColumnRow size="sm" row={true}>
                          <Link
                            icon="schilderij-met-bloemen-in-vaas"
                            showIcon="before"
                            iconSize="md"
                            noUnderline={true}
                          >
                            FDW12SA01_04
                          </Link>
                          <span className="rvo-text rvo-text--subtle">Image</span>
                        </LayoutColumnRow>
                      </div>
                    </details>
                  </div>
                </LayoutColumnRow>
              </div>
              <div>
                <img
                  src="https://www.rvo.nl/_next/image?url=%2Ffiles%2Ffile%2Fstyles%2Fcontent%2Fpublic%2F2024-07%2FBodemonderzoek.jpg%3Fitok%3DTPuhIeic&w=750&q=85"
                  width="424px"
                />
                <LayoutColumnRow row={true} size="sm" wrap={true}>
                  <img src="images/sdg/E_WEB_01.png" width="64px" />
                  <img src="images/sdg/E_WEB_02.png" width="64px" />
                  <img src="images/sdg/E_WEB_03.png" width="64px" />
                  <img src="images/sdg/E_WEB_04.png" width="64px" />
                  <img src="images/sdg/E_WEB_05.png" width="64px" />
                  <img src="images/sdg/E_WEB_06.png" width="64px" />
                  <img src="images/sdg/E_WEB_07.png" width="64px" />
                  <img src="images/sdg/E_WEB_08.png" width="64px" />
                </LayoutColumnRow>
              </div>
            </Grid>
          </main>
          <div className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--md">
            <div className="rvo-layout-grid rvo-layout-gap--md rvo-layout-grid-columns--three">
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="digitaal-onderzoek" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Project number
                  </Heading>
                  NL-KVK-27378529-POC19CD01A
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="budget" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Total budget
                  </Heading>
                  € 3,066
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="wereldbol" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Countries
                  </Heading>
                  Congo (the Democratic Republic of the)
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="document-met-vinkje" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Project status
                  </Heading>
                  Finalized
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="map-vol-documenten" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Budget spent
                  </Heading>
                  100% spent
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="diploma-certificaat" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Programme
                  </Heading>
                  <a href="#" className="rvo-link">
                    PSD Toolkit – Phase 2
                  </a>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="opsomming" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Tied status
                  </Heading>
                  Untied
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="kalender-met-vlakken" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Startdate
                  </Heading>
                  20 February 2020
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="kalender-met-vinkje" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    End date
                  </Heading>
                  11 November 2021
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="envelop" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Contact
                  </Heading>
                  <a href="#" className="rvo-link">
                    iati@rvo.nl
                  </a>
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="personen-arm-op-schouder" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Project partners
                  </Heading>
                  Netherlands Enterprise Agency, Netherlands embassy in Kinshasa, DR Congo
                </div>
              </div>
              <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                <div className="rvo-card__content">
                  <Icon icon="vlag-driehoekig" size="2xl"></Icon>
                  <Heading type="h4" noMargins={true}>
                    Sectors
                  </Heading>
                  Small and medium-sized enterprises (SME) development, Trade education/training
                </div>
              </div>
            </div>
          </div>
          <div className="rvo-table--responsive rvo-max-width-layout rvo-max-width-layout--lg rvo-max-width-layout-inline-padding--md">
            <table className="rvo-table">
              <caption className="rvo-caption">Transactions</caption>
              <thead className="rvo-table-head">
                <tr className="rvo-table-row">
                  <th scope="col" className="rvo-table-header">
                    Type
                  </th>
                  <th scope="col" className="rvo-table-header">
                    Provider
                  </th>
                  <th scope="col" className="rvo-table-header">
                    Provider ref.
                  </th>
                  <th scope="col" className="rvo-table-header">
                    Receiver
                  </th>
                  <th scope="col" className="rvo-table-header">
                    Receiver ref.
                  </th>
                  <th scope="col" className="rvo-table-header rvo-table-header--numeric">
                    Value (€)
                  </th>
                  <th scope="col" className="rvo-table-header">
                    Date
                  </th>
                  <th scope="col" className="rvo-table-header">
                    Value date
                  </th>
                </tr>
              </thead>
              <tbody className="rvo-table-body">
                <tr className="rvo-table-row">
                  <td className="rvo-table-cell">Disbursement</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell">Ten Cate Nederland B.V.</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell rvo-table-cell--numeric">165.076</td>
                  <td className="rvo-table-cell">29-07-2015</td>
                  <td className="rvo-table-cell">29-07-2015</td>
                </tr>
                <tr className="rvo-table-row">
                  <td className="rvo-table-cell">Disbursement</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell">Ten Cate Nederland B.V.</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell rvo-table-cell--numeric">165.076</td>
                  <td className="rvo-table-cell">29-07-2015</td>
                  <td className="rvo-table-cell">29-07-2015</td>
                </tr>
                <tr className="rvo-table-row">
                  <td className="rvo-table-cell">Disbursement</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell">Ten Cate Nederland B.V.</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell rvo-table-cell--numeric">157.526</td>
                  <td className="rvo-table-cell">15-10-2013</td>
                  <td className="rvo-table-cell">15-10-2013</td>
                </tr>
                <tr className="rvo-table-row">
                  <td className="rvo-table-cell">Disbursement</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell">Ten Cate Nederland B.V.</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell rvo-table-cell--numeric">165.076</td>
                  <td className="rvo-table-cell">29-07-2015</td>
                  <td className="rvo-table-cell">29-07-2015</td>
                </tr>
                <tr className="rvo-table-row">
                  <td className="rvo-table-cell">Disbursement</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell">STICHTING AMMON</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell rvo-table-cell--numeric">227.892</td>
                  <td className="rvo-table-cell">16-11-2018</td>
                  <td className="rvo-table-cell">16-11-2018</td>
                </tr>
                <tr className="rvo-table-row">
                  <td className="rvo-table-cell">Disbursement</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell">STICHTING AMMON</td>
                  <td className="rvo-table-cell"></td>
                  <td className="rvo-table-cell rvo-table-cell--numeric">283.831</td>
                  <td className="rvo-table-cell">16-07-2018</td>
                  <td className="rvo-table-cell">16-07-2018</td>
                </tr>
              </tbody>
            </table>
          </div>
        </LayoutColumnRow>
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
      </LayoutColumnRow>
    </body>
  );
};

export default Project;
