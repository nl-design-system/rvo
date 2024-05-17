import {
  Alert,
  CheckboxField,
  Fieldset,
  Footer,
  Header,
  Heading,
  Icon,
  LayoutColumnRow,
  MenuBar,
} from '@nl-rvo/components';
import '../common/filter.scss';

const Filter = () => {
  return (
    <body className="rvo-theme rvo-filter-body">
      <Header link="#" />
      <LayoutColumnRow size="xl">
        <LayoutColumnRow size="xl">
          <MenuBar
            items={[
              {
                label: 'Home',
                link: '#',
              },
              {
                label: 'Programmes',

                link: '#',
              },
              {
                active: true,
                label: 'Projects',
                link: '#',
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
          <main className="rvo-max-width-layout rvo-max-width-layout--sm">
            <Heading noMargins={true}>Projects</Heading>
            <LayoutColumnRow size="xl">
              <div className="rvo-content">
                <p className="rvo-text rvo-text--no-margins">
                  Data reported to the IATI registry since January 2015. Find open data on development aid projects
                  executed by the{' '}
                  <a href="https://english.rvo.nl" className="rvo-link">
                    Netherlands Enterprise Agency (RVO)
                  </a>{' '}
                  and funded by the Netherlands Ministry of Foreign Affairs e.a. Watch this video to discover how the
                  International Aid Transparency Initiative (IATI) helps make information about development and
                  humanitarian spending easier to access, use and understand.
                </p>
                <Alert kind="warning">
                  <h3 className="utrecht-heading-3 rvo-heading--no-margins">Disclaimer</h3>
                  <p className="rvo-text rvo-text--no-margins">
                    This site is launched in February 2020 and is being updated constantly. The data is under constant
                    scrutiny and is by no means legally binding. The IATI datasets are updated daily. Questions about
                    the data and the projects?{' '}
                    <a href="mailto:iati@rvo.nl" className="rvo-link rvo-link--donkerblauw">
                      iati@rvo.nl
                    </a>
                  </p>
                </Alert>
              </div>
            </LayoutColumnRow>
          </main>
          <div className="rvo-filter-wrapper rvo-max-width-layout rvo-max-width-layout--lg">
            <LayoutColumnRow row={true}>
              <div className="rvo-filter">
                <form className="rvo-form">
                  <LayoutColumnRow size="md">
                    <Fieldset legend="">
                      <details open className="rvo-collapsible-filter">
                        <summary className="rvo-collapsible-filter-label">Filter status</summary>

                        <CheckboxField
                          label="Status"
                          invalid={false}
                          options={[
                            { id: 'Cancelled', label: 'Cancelled' },
                            { id: 'Closed', label: 'Closed' },
                            { id: 'Finalised', label: 'Finalised' },
                            { id: 'Implementation', label: 'Implementation' },
                            { id: 'Pipeline/identification', label: 'Pipeline/identification' },
                          ]}
                        ></CheckboxField>
                      </details>
                    </Fieldset>
                    <Fieldset legend="">
                      <details open className="rvo-collapsible-filter">
                        <summary className="rvo-collapsible-filter-label">Filter countries</summary>
                        <span>Frequently used filters options</span>
                        <CheckboxField
                          label="Countries"
                          invalid={false}
                          options={[
                            { id: 'Poland', label: 'Poland' },
                            { id: 'Peru', label: 'Peru' },
                            { id: 'Netherlands', label: 'Netherlands' },
                            { id: 'Angola', label: 'Angola' },
                            { id: 'Qatar', label: 'Qatar' },
                          ]}
                        ></CheckboxField>
                        <details className="rvo-collapsible-filter">
                          {' '}
                          <summary className="rvo-collapsible-filter-label">
                            <Icon icon="plus"></Icon>
                            All filter options alphabetically
                          </summary>
                          <CheckboxField
                            label="Countries"
                            invalid={false}
                            options={[
                              { id: 'Poland', label: 'Poland' },
                              { id: 'Peru', label: 'Peru' },
                              { id: 'Netherlands', label: 'Netherlands' },
                              { id: 'Angola', label: 'Angola' },
                              { id: 'Qatar', label: 'Qatar' },
                            ]}
                          ></CheckboxField>
                        </details>
                      </details>
                    </Fieldset>
                  </LayoutColumnRow>
                </form>
              </div>
              <div className="rvo-results">
                <LayoutColumnRow>
                  <div className="rvo-results-count">
                    <strong>4817</strong> projects found
                  </div>{' '}
                  {/* <div className="rvo-results-active-filters">Active filters</div> */}
                  <LayoutColumnRow row={true} size="sm">
                    <span className="rvo-results-active-filters">Active filters</span>
                    <div className="rvo-tag rvo-tag--with-icon rvo-tag--info">
                      <span>
                        Country<strong> Congo</strong>
                      </span>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm  rvo-link__icon--after"
                        role="img"
                        aria-label="Kruis"
                      ></span>
                    </div>
                    <div className="rvo-tag rvo-tag--with-icon rvo-tag--info">
                      <span>
                        Status<strong> Finalised</strong>
                      </span>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--sm  rvo-link__icon--after"
                        role="img"
                        aria-label="Kruis"
                      ></span>
                    </div>
                  </LayoutColumnRow>
                  <div className="rvo-card rvo-card--outline rvo-card--padding-sm">
                    <div className="rvo-card--with-link-indicator">
                      <div className="rvo-card__content">
                        <a className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link" href="#">
                          Sector Study Poultry Democratic Republic of the Congo (DR Congo)
                        </a>
                        <div className="rvo-project-details">
                          <span>Programme: </span>
                          <strong>PSD Toolkit – Phase 1</strong>
                          <br />
                          <span>Country: </span>
                          <strong>Congo (the Democratic Republic of the)</strong>
                          <br />
                          <span>Total budget: </span>
                          <strong>€36,300</strong>
                          <br />
                          <span>Project number: </span>
                          <strong>NL-KVK-27378529-MAT17CD01</strong>
                        </div>
                      </div>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                        role="img"
                        aria-label="Delta naar rechts"
                      ></span>
                    </div>
                  </div>
                  <div className="rvo-card rvo-card--outline rvo-card--padding-sm">
                    <div className="rvo-card--with-link-indicator">
                      <div className="rvo-card__content">
                        <a className="rvo-link rvo-card__link rvo-link--no-underline rvo-card__full-card-link" href="#">
                          Sector Study Poultry Democratic Republic of the Congo (DR Congo)
                        </a>
                        <div className="rvo-project-details">
                          <span>Programme: </span>
                          <strong>PSD Toolkit – Phase 1</strong>
                          <br />
                          <span>Country: </span>
                          <strong>Congo (the Democratic Republic of the)</strong>
                          <br />
                          <span>Total budget: </span>
                          <strong>€36,300</strong>
                          <br />
                          <span>Project number: </span>
                          <strong>NL-KVK-27378529-MAT17CD01</strong>
                        </div>
                      </div>
                      <span
                        className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                        role="img"
                        aria-label="Delta naar rechts"
                      ></span>
                    </div>
                  </div>
                </LayoutColumnRow>
              </div>
            </LayoutColumnRow>
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

export default Filter;
