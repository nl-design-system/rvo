import { Footer, Header, LayoutFlow, MenuBar } from '@nl-rvo/components';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';
import '../../common/animated-alert.scss';

const AnimatedAlert = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--animated-alert">
      <Header link="#" />
      <LayoutFlow gap="xl">
        <MenuBar
          items={[
            {
              label: 'Naam app/website',
              link: '#',
            },
            {
              label: 'Menu item',
              link: '#',
            },
            {
              label: 'Menu item met icoon',
              icon: 'user',
              link: '#',
            },
            {
              align: 'right',
              label: 'Menu item rechts',
              link: '#',
            },
          ]}
          size="md"
          useIcons={true}
          iconPlacement="before"
          maxWidth="md"
        />
        <LayoutFlow gap="3xl">
          <LayoutFlow gap="xl">
            <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">
              <div className="rvo-form">
                <LayoutFlow gap="2xl">
                  {/* Pop Alert */}
                  <div className="rvo-alert rvo-alert--error rvo-alert--padding-md rvo-alert--animated-pop rvo-margin-block-end--md">
                    <span
                      className="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--xl rvo-status-icon-foutmelding"
                      role="img"
                      aria-label="Foutmelding"
                    ></span>
                    <div className="rvo-alert-text">
                      <div>
                        <div>Vul een geldige gebruikersnaam in. Alleen letters en cijfers zijn toegestaan.</div>
                      </div>
                    </div>
                  </div>
                  {/* Wiggle Alert */}
                  <div className="rvo-alert rvo-alert--error rvo-alert--padding-md rvo-alert--animated-wiggle rvo-margin-block-end--md">
                    <span
                      className="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--xl rvo-status-icon-foutmelding"
                      role="img"
                      aria-label="Foutmelding"
                    ></span>
                    <div className="rvo-alert-text">
                      <div>
                        <div>Het e-mailadres is ongeldig. Controleer het formaat en probeer het opnieuw.</div>
                      </div>
                    </div>
                  </div>
                  {/* Slide Alert */}
                  <div className="rvo-alert rvo-alert--error rvo-alert--padding-md rvo-alert--animated-slide rvo-margin-block-end--md">
                    <span
                      className="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--xl rvo-status-icon-foutmelding"
                      role="img"
                      aria-label="Foutmelding"
                    ></span>
                    <div className="rvo-alert-text">
                      <div>
                        <div>Het wachtwoord is te kort. Gebruik minimaal 8 tekens.</div>
                      </div>
                    </div>
                  </div>
                </LayoutFlow>
              </div>
            </main>
          </LayoutFlow>
          <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
        </LayoutFlow>
      </LayoutFlow>
    </div>
  );
};

export default AnimatedAlert;
