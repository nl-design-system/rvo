import { Header, Heading, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import '../common/style.scss';
import { defaultMenuBarItemsMijnRVO } from '../common/defaultMenuBarItemsMijnRVO';

const Home = () => {
  return (
    <div className="rvo-demo-page rvo-demo-page--mijn-rvo">
      <div className="rvo-header-content">
        <Header />

        <details className="rvo-responsive-menu">
          <summary>
            <span className="utrecht-icon rvo-icon rvo-icon-menu rvo-icon--lg rvo-icon--wit"></span>
            <span className="utrecht-icon rvo-icon rvo-icon-kruis rvo-icon--lg rvo-icon--wit"></span>Menu
          </summary>
          <MenuBar
            items={defaultMenuBarItemsMijnRVO}
            size="lg"
            useIcons={true}
            iconPlacement="before"
            menuMaxWidth="md"
          />
        </details>
        <MenuBar
          items={[
            {
              label: 'Home',
              active: true,
              link: '#',
            },
            { label: 'Onderwerpen', link: '#' },
            { label: 'Subsidie- en financieringswijzer', link: '#' },
            { label: 'Over ons', link: '#' },
            {
              label: 'Zoeken',
              icon: 'zoek',
              link: '#',
              align: 'right',
            },
            {
              label: 'Mijn RVO',
              icon: 'user',
              link: '#',
              align: 'right',
            },
            { label: 'English', icon: 'wereldbol', link: '#', align: 'right' },
          ]}
          size="lg"
          useIcons={true}
          iconPlacement="before"
          menuMaxWidth="md"
        />

        <div className="rvo-hero rvo-hero--man-met-laptop">
          <div className="rvo-hero-bg-img-container">
            <img src="images/hero/hero-bg--man-met-laptop.webp" className="rvo-hero-bg-img" />
          </div>
          <MaxWidthLayout size="md">
            <div className="rvo-hero-content">
              <div className="rvo-hero-text">
                <Heading
                  type="h1"
                  textContent="Rijksdienst voor 
Ondernemend Nederland"
                />
                <p className="rvo-hero-description">
                  Onze mensen maken wereldwijd verbinding. Tussen bedrijven, kennis- en financiële instellingen,
                  ambassades en lokale overheden.
                </p>
              </div>
              <div className="rvo-hero-img-container">
                <img src="images/hero/man-met-laptop.webp" className="rvo-hero-img" />
              </div>
            </div>
          </MaxWidthLayout>
        </div>

        <main className="rvo-main--mijn-zaken"></main>
      </div>
    </div>
  );
};

export default Home;
