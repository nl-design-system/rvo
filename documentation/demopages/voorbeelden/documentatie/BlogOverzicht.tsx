/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { Card, Footer, Grid, Header, Heading, Icon, LayoutFlow, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

const blogItems = [
  {
    title: 'Waarom toegankelijkheid begint bij het ontwerp',
    author: 'Lisanne de Groot',
    date: '3 maart 2026',
    bgClass: 'rvo-bg--lichtblauw-150',
    excerpt:
      'Toegankelijkheid is geen afvinklijst, maar een ontwerpprincipe. In dit artikel laat ik zien hoe je het al in de eerste schetsen meeneemt.',
  },
  {
    title: 'Design tokens: de taal tussen designers en developers',
    author: 'Martijn van der Berg',
    date: '18 februari 2026',
    bgClass: 'rvo-bg--lichtblauw-150',
    excerpt:
      'Design tokens vormen de brug tussen onze Figma-bibliotheek en de codebase. Maar hoe houd je die twee gesynchroniseerd? We delen onze aanpak.',
  },
  {
    title: 'Een component bouwen dat voor iedereen werkt',
    author: 'Sophie Janssen',
    date: '5 februari 2026',
    bgClass: 'rvo-bg--lichtblauw-150',
    excerpt:
      'Van formulierveld tot tabel: elk component in ROOS doorloopt een uitgebreid toetsproces op toegankelijkheid, gebruiksgemak en herbruikbaarheid.',
  },
  {
    title: 'Van papier naar pixel: de RVO-huisstijl digitaal',
    author: 'Daan Mulder',
    date: '27 januari 2026',
    bgClass: 'rvo-bg--lichtblauw-150',
    excerpt:
      'De gemoderniseerde Rijkshuisstijl stelde ons voor uitdagingen. Hoe vertaal je printdesign naar een interactief, responsief systeem?',
  },
  {
    title: 'Patronen vs. componenten: wanneer gebruik je wat?',
    author: 'Femke Bakker',
    date: '12 januari 2026',
    bgClass: 'rvo-bg--lichtblauw-150',
    excerpt:
      'Een patroon is meer dan een set componenten. We leggen uit hoe het onderscheid ons helpt om consistente gebruikerservaringen te bouwen.',
  },
  {
    title: 'Open source werken aan een design system',
    author: 'Thomas Visser',
    date: '2 januari 2026',
    bgClass: 'rvo-bg--lichtblauw-150',
    excerpt:
      'ROOS is open source. Maar wat betekent dat in de praktijk? Over samenwerken met andere overheden, bijdragen verwerken en kwaliteit bewaken.',
  },
  {
    title: 'Donkere modus: mooi maar complex',
    author: 'Roos van Dijk',
    date: '19 december 2025',
    bgClass: 'rvo-bg--lichtblauw-150',
    excerpt:
      'Dark mode is populair, maar voor een overheidssite brengt het extra uitdagingen met zich mee. We verkennen de mogelijkheden binnen ROOS.',
  },
  {
    title: 'Hoe we feedback van burgers verwerken in ons design',
    author: 'Lars Hoekstra',
    date: '8 december 2025',
    bgClass: 'rvo-bg--lichtblauw-150',
    excerpt:
      'Gebruikersonderzoek staat centraal in ons proces. Dit is hoe inzichten uit burgerpanels en usability-tests onze componenten verbeteren.',
  },
  {
    title: 'Typografie in de Rijkshuisstijl: minder is meer',
    author: 'Emma Claassen',
    date: '24 november 2025',
    bgClass: 'rvo-bg--lichtblauw-150',
    excerpt:
      'Met één lettertype en een beperkt aantal groottes bereik je al een grote consistentie. Hoe we typografische keuzes vastleggen in design tokens.',
  },
];

const BlogOverzicht = () => {
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

      <main>
        <MaxWidthLayout size="md" className="rvo-padding-block-start--2xl rvo-padding-block-end--2xl">
          <div className="rvo-padding-inline-start--md rvo-padding-inline-end--md">
            <LayoutFlow gap="md">
              <Heading type="h1" noMargins={true}>
                Blog
              </Heading>

              <Grid columns="three" gap="lg">
                {blogItems.map((item, index) => (
                  <Card
                    key={index}
                    background="none"
                    className={item.bgClass}
                    title={item.title}
                    linkClassName="rvo-link--no-underline rvo-text--lintblauw"
                    link="#"
                    fullCardLink={true}
                    showLinkIndicator={false}
                    padding="lg"
                    outline={false}
                  >
                    <p className="rvo-text--md rvo-margin-block-start--none">{item.excerpt}</p>
                    <LayoutFlow row={true} gap="sm" alignItems="start">
                      <span
                        className="rvo-bg--wit rvo-padding-block-start--xs rvo-padding-block-end--xs rvo-padding-inline-start--xs rvo-padding-inline-end--xs"
                        style={{ borderRadius: '50%', display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}
                        aria-hidden="true"
                      >
                        <Icon icon="user" size="sm" />
                      </span>
                      <LayoutFlow gap="0">
                        <span className="rvo-text--sm rvo-text--bold">{item.author}</span>
                        <span className="rvo-text--sm rvo-text--grijs-600">{item.date}</span>
                      </LayoutFlow>
                    </LayoutFlow>
                  </Card>
                ))}
              </Grid>
            </LayoutFlow>
          </div>
        </MaxWidthLayout>
      </main>

      <Footer secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
    </div>
  );
};

export default BlogOverzicht;
