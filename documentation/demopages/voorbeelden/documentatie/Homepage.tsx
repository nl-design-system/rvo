/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  Button,
  Card,
  Footer,
  Grid,
  Header,
  Heading,
  Icon,
  LayoutFlow,
  Link,
  MaxWidthLayout,
  MenuBar,
} from '@nl-rvo/components';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const Homepage = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />

      <MenuBar
        items={[
          { label: 'ROOS', link: '#' },
          { label: 'Aan de slag', link: '#' },
          { label: 'Huisstijl', link: '#' },
          { label: 'Componenten', link: '#' },
          { label: 'Patronen', link: '#' },
          { label: 'Schrijfwijzer', link: '#' },
          { label: 'Figma', link: '#', align: 'right' },
          { label: 'GitHub', link: '#', align: 'right' },
          { label: 'Storybook', link: '#', align: 'right' },
        ]}
        size="md"
        useIcons={false}
        horizontalRule={true}
        maxWidth="md"
      />

      <LayoutFlow gap="3xl">
        <div>
          <header>
            <MaxWidthLayout size="md" className="rvo-padding-block-start--2xl">
              <Grid division="2fr 1fr" gap="xl" className="rvo-padding-inline-start--md rvo-padding-inline-end--md">
                <div className="rvo-layout-column rvo-layout-gap--md">
                  <Heading type="h1" noMargins={true}>
                    ROOS: Het design system van RVO
                  </Heading>
                  <p>
                    ROOS (RVO Open Ontwerp Systeem) is het Design System van de Rijksdienst voor Ondernemend Nederland.
                    ROOS is een <strong>gebruiksvriendelijke</strong> en <strong>toegankelijke</strong> vertaling van de
                    gemoderniseerde Rijkshuisstijl.
                  </p>
                  <Link noUnderline={true} href="#">
                    <Button>Aan de slag met ROOS</Button>
                  </Link>
                </div>
                <div />
              </Grid>
            </MaxWidthLayout>
          </header>

          <main>
            <MaxWidthLayout
              size="md"
              className="rvo-layout-column rvo-layout-gap--md rvo-padding-block-start--2xl rvo-padding-block-end--2xl"
            >
              <Grid columns="three" gap="xl" className="rvo-padding-inline-start--md rvo-padding-inline-end--md">
                <Card title="Huisstijl" background="none" link="#" outline={true} fullCardLink={true} padding="lg">
                  De kleuren, lettertypes, de space en sizes die er beschikbaar zijn binnen ROOS.
                </Card>
                <Card title="Componenten" background="none" link="#" outline={true} fullCardLink={true} padding="lg">
                  Een collectie aan gebruiksvriendelijke, toegankelijke componenten die voldoen aan de Rijkshuisstijl.
                </Card>
                <Card title="Patronen" background="none" link="#" outline={true} fullCardLink={true} padding="lg">
                  Een set van componenten die samen een patroon vormen van acties die een gebruiker moet uitvoeren.
                </Card>

                <Card
                  background="none"
                  title={
                    <LayoutFlow row={true} gap="sm">
                      Voor designers <Icon icon="externe-link" />
                    </LayoutFlow>
                  }
                  link="#"
                  outline={true}
                  fullCardLink={true}
                  padding="lg"
                >
                  Ben je een designer en wil je ROOS gebruiken? Gebruik dan ons Figma bestand.
                </Card>

                <Card
                  background="none"
                  title={
                    <LayoutFlow row={true} gap="sm">
                      Voor developers <Icon icon="externe-link" />
                    </LayoutFlow>
                  }
                  link="#"
                  outline={true}
                  fullCardLink={true}
                  padding="lg"
                >
                  Ben je een developer en wil je ROOS gebruiken? Ga dan naar onze Storybook omgeving.
                </Card>

                <Card
                  background="none"
                  title={
                    <LayoutFlow row={true} gap="sm">
                      Hulp nodig? <Icon icon="externe-link" />
                    </LayoutFlow>
                  }
                  link="#"
                  outline={true}
                  fullCardLink={true}
                  padding="lg"
                >
                  Kom je er niet uit? We vinden het altijd leuk als iemand ons Design System wil gebruiken, dus stuur
                  ons een e-mail naar&nbsp;
                  <Link href="mailto:designsystem@rvo.nl">designsystem@rvo.nl</Link>.
                </Card>
              </Grid>
            </MaxWidthLayout>
          </main>
        </div>

        <Footer secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </div>
  );
};

export default Homepage;
