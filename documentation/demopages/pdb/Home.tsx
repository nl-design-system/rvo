import { Header, MenuBar } from '@nl-rvo/components';

const MijnDossier = () => {
  return (
    <body className="rvo-theme">
      <Header />
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
    </body>
  );
};

export default MijnDossier;
