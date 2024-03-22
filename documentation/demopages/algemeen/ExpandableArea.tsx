import { Grid, Header, Icon, LayoutColumnRow, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import '../common/style.scss';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';

const ExpandableArea = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="md">
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" maxWidth="sm" />

        <MaxWidthLayout size="sm">
          <main className="rvo-expandable-area-demo">
            <LayoutColumnRow size="md">
              <Grid columns="three" gap="xl">
                <div className="rvo-card">
                  <LayoutColumnRow row={true} alignItems="start">
                    <div className="rvo-card-icon">
                      <Icon icon="digitaal-onderzoek" size="2xl" />
                    </div>
                    <div className="rvo-card-content">
                      Project number
                      <br />
                      <strong>NL 039439</strong>
                    </div>
                  </LayoutColumnRow>
                </div>
                <div className="rvo-card">
                  <LayoutColumnRow row={true} alignItems="start">
                    <div className="rvo-card-icon">
                      <Icon icon="portemonnee" size="2xl" />
                    </div>
                    <div className="rvo-card-content">
                      Total budget
                      <br />
                      <strong>6,524</strong>
                    </div>
                  </LayoutColumnRow>
                </div>
                <div className="rvo-card">
                  <LayoutColumnRow row={true} alignItems="start">
                    <div className="rvo-card-icon">
                      <Icon icon="wereldbol" size="2xl" />
                    </div>
                    <div className="rvo-card-content">
                      Countries
                      <br />
                      <a href="#" className="rvo-link">
                        Belgium
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        Spain
                      </a>
                    </div>
                  </LayoutColumnRow>
                </div>
              </Grid>
              <div className="rvo-card">
                <LayoutColumnRow row={true} alignItems="start">
                  <div className="rvo-card-icon">
                    <Icon icon="ketting" size="2xl" />
                  </div>
                  <div className="rvo-card-content">
                    Related projects
                    <br />
                    <a href="#" className="rvo-link">
                      NL-3049594-D9404
                    </a>
                    ,{' '}
                    <a href="#" className="rvo-link">
                      NL-3049594-D8766
                    </a>
                    <details className="rvo-expandable-area">
                      <summary className="rvo-expandable-area-summary">
                        <LayoutColumnRow row={true} size="xs">
                          <div className="rvo-expandable-area-icon--closed">
                            <Icon icon="delta-omlaag" size="sm"></Icon>
                          </div>
                          <div className="rvo-expandable-area-icon--open">
                            <Icon icon="delta-omhoog" size="sm"></Icon>
                          </div>
                          Show more
                        </LayoutColumnRow>
                      </summary>
                      <a href="#" className="rvo-link">
                        NL-3049594-D9404
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D8766
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D9404
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D8766
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D9404
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D8766
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D9404
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D8766
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D9404
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D8766
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D9404
                      </a>
                      ,{' '}
                      <a href="#" className="rvo-link">
                        NL-3049594-D8766
                      </a>
                    </details>
                  </div>
                </LayoutColumnRow>
              </div>
            </LayoutColumnRow>
          </main>
        </MaxWidthLayout>
      </LayoutColumnRow>
    </div>
  );
};

export default ExpandableArea;
