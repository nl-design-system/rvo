/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { Button, Footer, Grid, Header, Heading, LayoutFlow, Link, List } from '@nl-rvo/component-library-react';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Uitloggen = () => {
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
                  U bent uitgelogd
                </Heading>

                <p className="rvo-paragraph rvo-paragraph--no-spacing">
                  U heeft handmatig uitgelogd terwijl u de pagina{' '}
                  <a href="#" className="rvo-link">
                    Mijn zaken
                  </a>{' '}
                  bekeek.
                </p>

                <Button kind="primary" fullWidth={true} label="Opnieuw inloggen" />

                <List type="unordered" bulletType="icon" bulletIcon="option-1" noMargin noPadding>
                  <Link href="https://www.rvo.nl" content="Ga terug naar rvo.nl" noUnderline={true} />
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

export default Uitloggen;
