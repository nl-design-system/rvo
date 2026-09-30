/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  Button,
  Footer,
  Grid,
  Header,
  Heading,
  Hr,
  Icon,
  LayoutFlow,
  Link,
  List,
} from '@nl-rvo/component-library-react';
import type { ReactElement } from 'react';
import { defaultFooterItems } from '../../../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../../../demopages/common/defaultSecondaryFooterItems';

export default function InloggenAlsParticulierPage(): ReactElement {
  const digidLogoImgUrl = useBaseUrl('images/login-options/digid-logo.svg');
  const euFlagImgUrl = useBaseUrl('images/login-options/eu-flag.svg');
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
                  href="/iframe.html?id=pagina-s-voorbeelden-inloggen-inloggen-bij-rvo--default&viewMode=story"
                  showIcon="before"
                  icon="terug"
                  noUnderline={true}
                >
                  Terug
                </Link>
                <div className="rvo-card rvo-card--outline rvo-card--padding-xl rvo-bg--wit">
                  <LayoutFlow gap="lg">
                    <Heading type="h1" noMargins={true}>
                      Inloggen als particulier
                    </Heading>

                    {/* Lijst met inlogopties */}
                    <div>
                      <a
                        href="#"
                        className="rvo-link rvo-link--no-underline rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md rvo-padding-block--md rvo-padding-inline--md"
                      >
                        <img src={digidLogoImgUrl} alt="DigiD logo" width="40" height="40" />
                        <span className="rvo-text rvo-text--bold rvo-layout-row__fill">Inloggen met DigiD</span>
                        <Icon icon="delta-naar-rechts" size="sm" color="hemelblauw" />
                      </a>
                      <Hr />
                      <a
                        href="#"
                        className="rvo-link rvo-link--no-underline rvo-layout-row rvo-layout-align-content-center rvo-layout-gap--md rvo-padding-block--md rvo-padding-inline--md"
                      >
                        <img src={euFlagImgUrl} alt="EU vlag" width="40" height="27" />
                        <span className="rvo-text rvo-text--bold rvo-layout-row__fill">European login Particulier</span>
                        <Icon icon="delta-naar-rechts" size="sm" color="hemelblauw" />
                      </a>
                    </div>

                    <Button kind="secondary" fullWidth={true} label="Ik heb geen van deze inlogmiddelen" />

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
              </LayoutFlow>
            </div>
            <div />
          </Grid>
        </div>
      </main>

      <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </div>
  );
}
