import { Fieldset, Footer, Header, Heading, LayoutFlow, MenuBar, TextInputField } from '@nl-rvo/components';
import { useState } from 'react';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';
import '../../common/animated-alert.scss';

const AnimatedAlert = () => {
  const [value, setValue] = useState('');
  const [showError, setShowError] = useState(false);

  function handleChange(e) {
    setValue(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowError(true);
  }

  return (
    <div className="rvo-demo-page rvo-demo-page--animated-alert">
      <Header link="#" />
      <LayoutFlow gap="xl">
        <MenuBar
          items={[
            { label: 'Naam app/website', link: '#' },
            { label: 'Menu item', link: '#' },
            { label: 'Menu item met icoon', icon: 'user', link: '#' },
            { align: 'right', label: 'Menu item rechts', link: '#' },
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
                <LayoutFlow gap="sm">
                  <div>
                    <Heading type="h1">Animated Alert prototype</Heading>
                    <p className="rvo-text--lg">Een prototype om de geanimeerde alert te testen.</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <LayoutFlow>
                      {showError && (
                        <div className="rvo-alert rvo-alert--error rvo-alert--padding-md rvo-alert--animated-slide rvo-margin-block-end--md">
                          <div className="rvo-alert__container">
                            <span
                              className="utrecht-icon rvo-icon rvo-icon-foutmelding rvo-icon--xl rvo-status-icon-foutmelding"
                              role="img"
                              aria-label="Foutmelding"
                            ></span>
                            <div className="rvo-alert-text">
                              <div>
                                Maar niet dat. <span className="rvo-text rvo-text--bold">Dat is fout!</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <Fieldset legend="">
                        <TextInputField
                          label="Vul maar iets in"
                          helperText="Je mag alles invullen wat je wil"
                          value={value}
                          onChange={handleChange}
                          errorText={showError ? 'Maar wat je net invulde dus niet.' : undefined}
                          invalid={showError}
                        />
                      </Fieldset>
                      <button
                        className="utrecht-button utrecht-button--primary-action utrecht-button--rvo-md"
                        type="submit"
                      >
                        Ik heb iets ingevuld
                      </button>
                      {showError && (
                        <button
                          className="utrecht-button utrecht-button--secondary-action utrecht-button--rvo-xs"
                          type="button"
                          onClick={() => window.location.reload()}
                        >
                          Ik wil het opnieuw proberen
                        </button>
                      )}
                    </LayoutFlow>
                  </form>
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
