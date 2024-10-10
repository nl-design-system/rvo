import { Footer, Header, Heading, Hero, LayoutFlow, MenuBar } from '@nl-rvo/components';
import { defaultFooterItems } from '../common/defaultFooterItems';

const Content = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />

      <MenuBar
        items={[
          {
            label: 'Naam app/website',
            link: '#',
            active: true,
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
        horizontalRule={false}
        iconPlacement="before"
        maxWidth="md"
      />
      <LayoutFlow size="3xl">
        <LayoutFlow size="xl">
          <Hero />
          <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">
            <Heading type="h1">H1 heading</Heading>
            <p className="rvo-text--lg">
              <span className="rvo-text--bold">Voorbeeld van een paragraaf met grote tekst</span>. Daarom werken we elke
              dag hard aan 3 belangrijke transities: de klimaat- en energietransitie, de overgang naar een duurzaam
              landbouw- en voedselsysteem én het realiseren van een toekomstbestendige en digitale economie.
            </p>
            <Heading type="h2" noMargins={true}>
              H2 heading
            </Heading>
            <p className="">
              <span className="">Voorbeeld van een standaardparagraaf</span>.{' '}
              <a href="#" className="rvo-link">
                Dit is een link.
              </a>{' '}
              Daarom werken we elke dag hard aan 3 belangrijke transities: de klimaat- en energietransitie, de overgang
              naar een duurzaam landbouw- en voedselsysteem én het realiseren van een toekomstbestendige en digitale
              economie.
            </p>
            <Heading type="h3" noMargins={true}>
              H3 heading
            </Heading>
            <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding">
              <li>Voorbeeld van een unordered list</li>

              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <ol className="rvo-ol rvo-ol--no-padding">
              <li>Voorbeeld van een unordered list</li>

              <li>Item 2</li>
              <li>Item 3</li>
            </ol>
          </main>
        </LayoutFlow>

        <Footer columns={defaultFooterItems} />
      </LayoutFlow>
    </div>
  );
};

export default Content;
