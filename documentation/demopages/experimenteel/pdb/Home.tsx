import { Footer, Header, Heading, LayoutFlow, MenuBar } from '@nl-rvo/components';
import '../../common/filter.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Home = () => {
  return (
    <body className="rvo-theme">
      <Header link="#" />
      <LayoutFlow gap="xl">
        <LayoutFlow gap="xl">
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
            <Heading noMargins={true}>Project Database</Heading>
            <LayoutFlow gap="xl">
              <div className="rvo-content">
                <p className="rvo-text rvo-text--no-margins">
                  The{' '}
                  <a href="https://english.rvo.nl" className="rvo-link">
                    Netherlands Enterprise Agency (RVO)
                  </a>{' '}
                  administers financial support to projects in the form of subsidies and programmes, on behalf of
                  various Dutch ministries and the European Union.
                </p>
                <p className="rvo-text">
                  This website shows the supported projects, starting with Development Cooperation. Adding projects to
                  this website is an ongoing process.
                </p>
                <p className="rvo-text"> Watch the latest videos about RVO International Development:</p>
                <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
                  {' '}
                  <li>
                    <a href="https://youtu.be/H6h0M0PHoSc?" className="rvo-link">
                      Building a sustainable future together
                    </a>{' '}
                    (in English)
                  </li>
                  <li>
                    <a href="https://youtu.be/tW9bFLBReJ8?" className="rvo-link">
                      Samen bouwen aan een duurzame toekomst
                    </a>{' '}
                    (in Dutch)
                  </li>
                </ul>
              </div>
              <div className="rvo-layout-grid rvo-layout-gap--md rvo-layout-grid-columns--two">
                <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                  <div className="rvo-card--with-link-indicator">
                    <div className="rvo-card__content">
                      <h3 className="utrecht-heading-3">
                        <a className="rvo-link rvo-card__link rvo-card__full-card-link" href="#">
                          Programmes
                        </a>
                      </h3>
                      Find open data on development aid programmes executed by the Netherlands Enterprise Agency (RVO)
                      and funded by the Netherlands Ministry of Foreign Affairs e.a.
                    </div>
                    <span
                      className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                      role="img"
                      aria-label="Delta naar rechts"
                    ></span>
                  </div>
                </div>
                <div className="rvo-card rvo-card--outline rvo-card--padding-md">
                  <div className="rvo-card--with-link-indicator">
                    <div className="rvo-card__content">
                      <h3 className="utrecht-heading-3">
                        <a className="rvo-link rvo-card__link rvo-card__full-card-link" href="#">
                          Projects
                        </a>
                      </h3>
                      Find open data on development aid projects executed by the Netherlands Enterprise Agency (RVO) and
                      funded by the Netherlands Ministry of Foreign Affairs e.a.
                    </div>
                    <span
                      className="utrecht-icon rvo-icon rvo-icon-delta-naar-rechts rvo-icon--sm rvo-icon--hemelblauw rvo-card__link-indicator"
                      role="img"
                      aria-label="Delta naar rechts"
                    ></span>
                  </div>
                </div>
              </div>
            </LayoutFlow>
          </main>
        </LayoutFlow>
        <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </body>
  );
};

export default Home;
