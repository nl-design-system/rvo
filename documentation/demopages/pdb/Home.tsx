import { Header, Heading, MenuBar } from '@nl-rvo/components';

const MijnDossier = () => {
  return (
    <body className="rvo-theme">
      <Header link="#" />
      <MenuBar
        items={[
          {
            active: true,
            label: 'Home',
            link: '#',
          },
          {
            label: 'Programmes',

            link: '#',
          },
          {
            label: 'Projects',
            link: '#',
          },
          {
            align: 'right',
            icon: 'zoek',
            label: 'Search',
            link: '#',
          },
        ]}
        size="lg"
        useIcons={true}
        iconPlacement="before"
        maxWidth="md"
      />
      <main className="rvo-max-width-layout rvo-max-width-layout--sm">
        <Heading noMargins={true}>Projecten Database</Heading>
        <p className="rvo-text rvo-text--no-margins">
          The{' '}
          <a href="https://english.rvo.nl" className="rvo-link">
            Netherlands Enterprise Agency (RVO)
          </a>{' '}
          administers financial support to projects in the form of subsidies and programmes, on behalf of various Dutch
          ministries and the European Union.
        </p>
        <p className="rvo-text">
          This website shows the supported projects, starting with Development Cooperation. Adding projects to this
          website is an ongoing process.
        </p>
        <p className="rvo-text"> Watch the latest videos about RVO International Development:</p>
        <ul className="rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-1">
          {' '}
          <li>
            <a href="https://youtu.be/H6h0M0PHoSc?" className="rvo-link">
              Building a sustainable future together
            </a>{' '}
            (in English)
          </li>
          <li>
            <a href="https://youtu.be/tW9bFLBReJ8?" className="rvo-link">
              Samen bouwen aan een duurzame toekomst
            </a>{' '}
            (in Dutch)
          </li>
        </ul>
      </main>
    </body>
  );
};

export default MijnDossier;
