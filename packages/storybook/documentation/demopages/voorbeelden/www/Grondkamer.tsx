import '../../common/grondkamer.scss';
import {
  Breadcrumbs,
  Footer,
  Grid,
  Header,
  Heading,
  Image,
  LayoutFlow,
  Link,
  MenuBar,
} from '@nl-rvo/component-library-react';

const onThisPageLinks = [
  { label: 'Wat zijn de taken van de grondkamer?', href: '#taken' },
  { label: 'Wat betaalt u voor het werk van de Grondkamer?', href: '#kosten' },
  { label: 'Wat zijn de rechtsgebieden van de grondkamers?', href: '#rechtsgebieden' },
  { label: 'Waar en wanneer vergaderen de grondkamers?', href: '#vergaderen' },
  { label: 'Heeft u post voor de grondkamers?', href: '#post' },
  { label: 'Heeft u een klacht over de grondkamers?', href: '#klacht' },
  { label: 'Jaarverslagen grondkamers', href: '#jaarverslagen' },
];

const footerItems = [
  {
    label: 'Over RVO',
    items: [
      { content: 'Over ons', link: '#' },
      { content: 'Onze klantbeloften', link: '#' },
      { content: 'Pers', link: '#' },
      { content: 'Zaken regelen bij RVO', link: '#' },
      { content: 'Werken bij RVO', link: '#' },
      { content: 'english.rvo.nl', link: '#' },
    ],
  },
  {
    label: 'Snel naar',
    items: [
      { content: 'Onderwerpen A t/m Z', link: '#' },
      { content: 'Documenten en publicaties', link: '#' },
      { content: 'Open data', link: '#' },
      { content: 'projecten.rvo.nl', link: '#' },
      { content: 'europese-subsidies.rvo.nl', link: '#' },
      { content: 'Klantenpanel', link: '#' },
    ],
  },
  {
    label: 'Blijf op de hoogte',
    items: [
      { content: 'E-mailnotificaties', link: '#' },
      { content: 'Nieuwsbrieven', link: '#' },
      { content: 'Higherlevel ondernemersforum', link: '#' },
    ],
  },
];

const secondaryFooterItems = [
  { content: 'Contact', link: '#' },
  { content: 'Cookies en anti-spam', link: '#' },
  { content: 'Privacy', link: '#' },
  { content: 'Toegankelijkheid', link: '#' },
  { content: 'Proclaimer', link: '#' },
  { content: 'Kwetsbaarheid melden', link: '#' },
  { content: 'Webarchief', link: '#' },
];

const Grondkamer = () => (
  <body className="rvo-theme rvo-responsive">
    <Header />
    <div className="rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
      <MenuBar
        items={[
          { label: 'Home', link: '#' },
          { label: 'Onderwerpen', link: '#' },
          { label: 'Subsidies en financiering', link: '#' },
          { label: 'Over ons', link: '#' },
          { label: 'Contact', link: '#' },
          { label: 'Over RVO', link: '#' },
          { align: 'right', label: 'Mijn RVO', link: '#' },
          { align: 'right', label: 'Zoeken', icon: 'zoek', link: '#' },
        ]}
        size="lg"
        useIcons={true}
        iconPlacement="before"
        maxWidth="lg"
      />
    </div>

    <div className="rvo-max-width-layout rvo-max-width-layout--lg rvo-hero rvo-hero--text-only rvo-hero--violet rvo-bg--grijs-300">
      <div className="rvo-hero__content">
        <Heading type="h1" className="rvo-hero__title" noMargins={true}>
          Grondkamer
        </Heading>
      </div>
    </div>

    <main className="rvo-padding-block-end--3xl rvo-padding-block-start--xl rvo-padding-inline-end--sm rvo-padding-inline-start--sm">
      <div className="rvo-max-width-layout rvo-max-width-layout--sm">
        <LayoutFlow gap="xl">
          <LayoutFlow gap="md">
            <Breadcrumbs
              items={[
                { label: 'Home', link: '#' },
                { label: 'Grondkamer', link: '#' },
                { label: 'Over de grondkamer' },
              ]}
              size="sm"
            />
            <Heading type="h1" noMargins={true}>
              Over de grondkamer
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">
              <em>De inhoud van deze pagina is gecontroleerd op 21 april 2026</em>
            </p>
            <p className="rvo-paragraph rvo-paragraph--lg rvo-paragraph--no-spacing">
              <strong>
                De grondkamer houdt toezicht op pacht in het belang van de landbouw. Er zijn 5 grondkamers met elk een
                eigen regio. Iedere grondkamer is een zelfstandig bestuursorgaan (zbo) en onafhankelijk.
              </strong>
            </p>
          </LayoutFlow>

          <LayoutFlow gap="md">
            <Heading type="h2" noMargins={true}>
              Op deze pagina:
            </Heading>
            <Grid columns="two" gap="md">
              {onThisPageLinks.map((link) => (
                <Link key={link.href} href={link.href} iconPlacement="left" icon="pijl-omlaag" noUnderline={true}>
                  {link.label}
                </Link>
              ))}
            </Grid>
          </LayoutFlow>

          <Image
            src="images/www/grondkamer.jpg"
            alt="Weiland met een houten hek onder een blauwe lucht"
            radius="all"
            radiusSize="sm"
          />

          <LayoutFlow gap="md">
            <Heading type="h2" id="taken" noMargins={true}>
              Wat zijn de taken van de grondkamer?
            </Heading>
            <p className="rvo-paragraph rvo-paragraph--no-spacing">De grondkamer:</p>
            <ul className="rvo-ul">
              <li>
                toetst{' '}
                <a href="#" className="rvo-link">
                  reguliere
                </a>{' '}
                en{' '}
                <a href="#" className="rvo-link">
                  geliberaliseerde
                </a>{' '}
                pachtovereenkomsten;
              </li>
              <li>
                toetst{' '}
                <a href="#" className="rvo-link">
                  wijzigingsverzoeken
                </a>
                ;
              </li>
              <li>
                registreert{' '}
                <a href="#" className="rvo-link">
                  teeltpachtovereenkomsten
                </a>
                ;
              </li>
              <li>
                toetst verzoeken{' '}
                <a href="#" className="rvo-link">
                  kortere pachtduur reguliere pacht
                </a>
                ;
              </li>
              <li>
                <a href="#" className="rvo-link">
                  beoordeelt de pachtprijs
                </a>{' '}
                op verzoek van (ver)pachter;
              </li>
              <li>
                <a href="#" className="rvo-link">
                  taxeert
                </a>{' '}
                los land of agrarische gebouwen of woningen voor het voorkeursrecht van de pachter;
              </li>
              <li>
                beslist of een{' '}
                <a href="#" className="rvo-link">
                  verpachter het voorkeursrecht
                </a>{' '}
                van een pachter mag negeren;
              </li>
              <li>
                bemiddelt als (ver)pachters het niet eens zijn over het veranderen van los land of agrarische gebouwen
                of woningen;
              </li>
              <li>
                beslist als (ver)pachters het niet eens zijn over het veranderen van los land of agrarische gebouwen of
                woningen.
              </li>
            </ul>
          </LayoutFlow>
        </LayoutFlow>
      </div>
    </main>

    <Footer
      primaryMenu={footerItems}
      payOff="We helpen u graag vooruit!"
      secondaryMenu={secondaryFooterItems}
      maxWidth="lg"
    />
  </body>
);

export default Grondkamer;
