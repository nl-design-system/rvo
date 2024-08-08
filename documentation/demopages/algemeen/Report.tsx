import { Footer, Header, Heading, LayoutColumnRow, Link, MenuBar } from '@nl-rvo/components';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';

const Report = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />
      <LayoutColumnRow size="lg">
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" maxWidth="md" />
        <LayoutColumnRow size="3xl">
          <LayoutColumnRow size="xl">
            <main className="rvo-max-width-layout rvo-max-width-layout--sm">
              <Heading textContent="A Green Sustainable and Safe Water Source" type="h1"></Heading>
              <p>
                About twenty systems (GreenSource) for collecting water will be installed to provide twenty villages in
                rural areas with drinking water. Water will be collected in basins (with artificial grass on top) and be
                purified. Use of membrane techniques for purification and water will be collected in basis of
                geotextile. After installation local companies and institutes must have the skills to independently
                install and maintain more systems
              </p>
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
                      <Link icon="schilderij-met-bloemen-in-vaas" showIcon="before" iconSize="md" noUnderline={true}>
                        FDW12SA01_01
                      </Link>
                      <span className="rvo-text rvo-text--subtle">Image</span>
                    </LayoutColumnRow>
                    <LayoutColumnRow size="sm" row={true}>
                      <Link icon="schilderij-met-bloemen-in-vaas" showIcon="before" iconSize="md" noUnderline={true}>
                        FDW12SA01_02
                      </Link>
                      <span className="rvo-text rvo-text--subtle">Image</span>
                    </LayoutColumnRow>
                    <LayoutColumnRow size="sm" row={true}>
                      <Link icon="schilderij-met-bloemen-in-vaas" showIcon="before" iconSize="md" noUnderline={true}>
                        FDW12SA01_03
                      </Link>
                      <span className="rvo-text rvo-text--subtle">Image</span>
                    </LayoutColumnRow>
                    <LayoutColumnRow size="sm" row={true}>
                      <Link icon="schilderij-met-bloemen-in-vaas" showIcon="before" iconSize="md" noUnderline={true}>
                        FDW12SA01_04
                      </Link>
                      <span className="rvo-text rvo-text--subtle">Image</span>
                    </LayoutColumnRow>
                  </div>
                </details>
              </div>
            </main>
            <div className="rvo-table--responsive rvo-max-width-layout rvo-max-width-layout--lg">
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
      </LayoutColumnRow>
    </div>
  );
};

export default Report;
