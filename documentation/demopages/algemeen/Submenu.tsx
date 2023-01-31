import { Header, LayoutColumnRow, MenuBar } from '@nl-rvo/components';
import '../common/style.scss';

const Submenu = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--sub-menu">
      <Header />
      <LayoutColumnRow size="md">
        <div className="rvo-navigation">
          <MenuBar
            items={[
              { label: 'Home', icon: 'home', link: '#' },
              { label: 'Expanded menu item', icon: 'delta-omlaag', link: '#' },
              { label: 'Uitloggen', icon: 'versleutelen', link: '#', align: 'right' },
            ]}
            size="md"
            useIcons={false}
            menuMaxWidth="md"
          />
          <div className="rvo-tmp-submenu-wrapper">
            <MenuBar
              items={[
                { label: 'Submenu item', icon: 'home', link: '#' },
                { label: 'Submenu item', icon: 'delta-omlaag', link: '#' },
                { label: 'Submenu item', icon: 'versleutelen', link: '#', align: 'right' },
              ]}
              size="md"
              useIcons={false}
              menuMaxWidth="md"
            />
          </div>
        </div>
        <main className="rvo-max-width-layout rvo-max-width-layout--sm">
          <div className="rvo-content">
            <h1 className="utrecht-heading-1">Default submenu</h1>
            <p className="rvo-paragraph rvo-paragraph--md">
              A submenu is expanded when a user clicks on an expandable menu item which label is followed by a downwards
              chevron. The submenu expands in place not overlapping existing content.
            </p>
          </div>
        </main>
      </LayoutColumnRow>
    </div>
  );
};

export default Submenu;
