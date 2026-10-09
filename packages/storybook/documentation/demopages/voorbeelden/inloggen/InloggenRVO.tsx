/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { Button, Footer, Grid, Header, Heading, LayoutFlow, Link, List } from '@nl-rvo/component-library-react';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const navigeerNaarIemandAnders = () => {
  window.location.href =
    '/iframe.html?id=pagina-s-voorbeelden-inloggen-inloggen-voor-iemand-anders--default&viewMode=story';
};

const navigeerNaarParticulier = () => {
  window.location.href =
    '/iframe.html?id=pagina-s-voorbeelden-inloggen-inloggen-als-particulier--default&viewMode=story';
};

const navigeerNaarBedrijf = () => {
  window.location.href =
    '/iframe.html?id=pagina-s-voorbeelden-inloggen-inloggen-als-bedrijf-of-organisatie--default&viewMode=story';
};

const InloggenRVO = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />

      <main className="rvo-bg--grijs-100 rvo-padding-block-start--2xl rvo-padding-block-end--4xl">
        <div className="rvo-max-width-layout rvo-max-width-layout--md rvo-max-width-layout-inline-padding--md">
          <Grid columns="three">
            <div />
            <div className="rvo-card rvo-card--outline rvo-card--padding-xl rvo-bg--wit">
              <LayoutFlow gap="lg">
                <Heading type="h1" noMargins={true}>
                  Inloggen bij RVO
                </Heading>

                <LayoutFlow gap="sm">
                  <Button
                    kind="primary"
                    fullWidth={true}
                    iconPlacement="left"
                    icon="basis-kantoorgebouw"
                    className="rvo-layout-justify-content-start"
                    onClick={navigeerNaarBedrijf}
                  >
                    Inloggen als bedrijf of organisatie
                  </Button>
                  <Button
                    kind="secondary"
                    fullWidth={true}
                    iconPlacement="left"
                    icon="man-torso"
                    className="rvo-layout-justify-content-start"
                    onClick={navigeerNaarParticulier}
                  >
                    Inloggen als particulier
                  </Button>
                  <Button
                    kind="secondary"
                    fullWidth={true}
                    iconPlacement="left"
                    icon="persoon-met-vinkje"
                    onClick={navigeerNaarIemandAnders}
                    className="rvo-layout-justify-content-start"
                  >
                    Inloggen voor iemand anders
                  </Button>
                </LayoutFlow>

                <List type="unordered" bulletType="icon" bulletIcon="option-1" noMargin noPadding>
                  <Link href="#" noUnderline={true}>
                    Heeft u nog geen geldige machtiging?
                  </Link>
                  <Link href="#" noUnderline={true}>
                    Hulp bij inloggen
                  </Link>
                </List>
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

export default InloggenRVO;
