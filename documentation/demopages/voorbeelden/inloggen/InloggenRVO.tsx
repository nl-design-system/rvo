/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { Button, Footer, Grid, Header, Heading, LayoutFlow, Link, List } from '@nl-rvo/components';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

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
                    showIcon="before"
                    icon="basis-kantoorgebouw"
                    label="Inloggen als bedrijf of organisatie"
                    className="rvo-layout-justify-content-start"
                    onClick={navigeerNaarBedrijf}
                  />
                  <Button
                    kind="secondary"
                    fullWidth={true}
                    showIcon="before"
                    icon="man-torso"
                    label="Inloggen als particulier"
                    className="rvo-layout-justify-content-start"
                    onClick={navigeerNaarParticulier}
                  />
                  <Button
                    kind="secondary"
                    fullWidth={true}
                    showIcon="before"
                    icon="persoon-met-vinkje"
                    label="Inloggen voor iemand anders"
                    onClick={navigeerNaarIemandAnders}
                    className="rvo-layout-justify-content-start"
                  />
                </LayoutFlow>

                <List type="unordered" bulletType="icon" bulletIcon="option-1" noMargin noPadding>
                  <Link href="#" content="Heeft u nog geen geldige machtiging?" noUnderline={true} />
                  <Link href="#" content="Hulp bij inloggen" noUnderline={true} />
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
