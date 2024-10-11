import { Header, Heading, Icon, LayoutFlow, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import '../../common/style.scss';
import { defaultMenuBarItems } from '../../common/defaultMenuBarItems';

const Breadcrumbs = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutFlow size="md">
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" />
        <MaxWidthLayout size="md">
          <main>
            <div className="rvo-breadcrumbs">
              <ol className="rvo-breadcrumbs__list">
                <li className="rvo-breadcrumbs__list-item">
                  <a className="rvo-link rvo-layout-row rvo-layout-gap--sm" href="#">
                    First step
                  </a>
                </li>
                <li className="rvo-breadcrumbs__list-item">
                  <a className="rvo-link rvo-layout-row rvo-layout-gap--sm" href="#">
                    <Icon icon="delta-naar-rechts" color="hemelblauw" size="xs" />
                    Second step
                  </a>
                </li>
                <li className="rvo-breadcrumbs__list-item">
                  <a className="rvo-link rvo-layout-row rvo-layout-gap--sm" href="#">
                    <Icon icon="delta-naar-rechts" color="hemelblauw" size="xs" />
                    Third step
                  </a>
                </li>
                <li className="rvo-breadcrumbs__list-item">
                  <span className="rvo-layout-row rvo-layout-gap--sm rvo-breadcrumb-current-page">
                    <Icon icon="delta-naar-rechts" color="hemelblauw" size="xs" />
                    Current page
                  </span>
                </li>
              </ol>
            </div>
            <div className="rvo-content">
              <Heading type="h1" textContent="Breadcrumbs example"></Heading>
              <p className="rvo-paragraph rvo-paragraph--md">
                <strong>Paragraph medium.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
                ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
                voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
                <a href="#" className="rvo-link">
                  Dit is een link.
                </a>
                Tussen bedrijven, kennis- en financiële instellingen, ambassades en lokale overheden.
              </p>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutFlow>
    </div>
  );
};

export default Breadcrumbs;
