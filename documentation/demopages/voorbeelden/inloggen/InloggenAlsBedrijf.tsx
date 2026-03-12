/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { Button, Footer, Grid, Header, Heading, Hr, Icon, LayoutFlow, Link, List } from '@nl-rvo/components';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const InloggenAlsBedrijf = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />

      <main className="rvo-bg--grijs-100 rvo-padding-block-start--2xl rvo-padding-block-end--4xl">
        <div className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--md">
          <Grid columns="three">
            <div />
            <div>
              <LayoutFlow gap="sm">
                <Link
                  content="Terug"
                  href="/iframe.html?id=pagina-s-voorbeelden-inloggen-inloggen-bij-rvo--default&viewMode=story"
                  showIcon="before"
                  icon="terug"
                  noUnderline={true}
                />
                <div className="rvo-card rvo-card--outline rvo-card--padding-xl rvo-bg--wit">
                  <LayoutFlow gap="lg">
                    <Heading type="h1" noMargins={true}>
                      Inloggen als bedrijf of organisatie
                    </Heading>

                    {/* Lijst met inlogopties */}
                    <div>
                      <a
                        href="#"
                        className="rvo-link rvo-link--no-underline rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md rvo-padding-block--md rvo-padding-inline--md"
                      >
                        <img
                          src="images/login-options/e-herkenning-logo.svg"
                          alt="eHerkenning logo"
                          width="40"
                          height="23"
                        />
                        <span className="rvo-text rvo-text--bold rvo-layout-row__fill">
                          Inloggen met eHerkenning 2+
                        </span>
                        <Icon icon="delta-naar-rechts" size="sm" color="hemelblauw" />
                      </a>
                      <Hr />
                      <a
                        href="#"
                        className="rvo-link rvo-link--no-underline rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md rvo-padding-block--md rvo-padding-inline--md"
                      >
                        <img
                          src="images/login-options/e-herkenning-logo.svg"
                          alt="eHerkenning logo"
                          width="40"
                          height="23"
                        />
                        <span className="rvo-text rvo-text--bold rvo-layout-row__fill">Inloggen met eHerkenning 3</span>
                        <Icon icon="delta-naar-rechts" size="sm" color="hemelblauw" />
                      </a>
                      <Hr />
                      <a
                        href="#"
                        className="rvo-link rvo-link--no-underline rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md rvo-padding-block--md rvo-padding-inline--md"
                      >
                        <img src="images/login-options/eu-flag.svg" alt="EU vlag" width="40" height="27" />
                        <span className="rvo-text rvo-text--bold rvo-layout-row__fill">European login Zakelijk</span>
                        <Icon icon="delta-naar-rechts" size="sm" color="hemelblauw" />
                      </a>
                    </div>

                    <Button kind="secondary" fullWidth={true} label="Ik heb geen van deze inlogmiddelen" />

                    <List type="unordered" bulletType="icon" bulletIcon="option-1" noMargin noPadding>
                      <Link href="#" content="Heeft u nog geen geldige machtiging?" noUnderline={true} />
                      <Link href="#" content="Hulp bij inloggen" noUnderline={true} />
                    </List>
                  </LayoutFlow>
                </div>
              </LayoutFlow>
            </div>
            <div />
          </Grid>
        </div>
      </main>

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </div>
  );
};

export default InloggenAlsBedrijf;
