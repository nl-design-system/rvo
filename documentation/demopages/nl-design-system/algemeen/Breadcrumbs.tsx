import { Header, Heading, Icon, LayoutColumnRow, Link, MaxWidthLayout, MenuBar } from '@nl-rvo/components';
import { Paragraph } from '@utrecht/component-library-react';
import '../common/style.scss';
import { defaultMenuBarItems } from '../../common/defaultMenuBarItems';

const Breadcrumbs = () => {
  return (
    <div className="rvo-nl-demo-page">
      <Header />
      <LayoutColumnRow size="md">
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" />
        <MaxWidthLayout size="md">
          <main>
            <nav className="utrecht-breadcrumb">
              <ol className="utrecht-breadcrumb__list">
                <li className="utrecht-breadcrumb__item">
                  <Link href="#" className="utrecht-breadcrumb__link">
                    First step
                  </Link>
                </li>
                <li className="utrecht-breadcrumb__item">
                  <Icon icon="delta-naar-rechts" color="hemelblauw" size="xs" />
                  <Link href="#" className="utrecht-breadcrumb__link">
                    Second step
                  </Link>
                </li>
                <li className="utrecht-breadcrumb__item">
                  <Icon icon="delta-naar-rechts" color="hemelblauw" size="xs" />
                  <Link href="#" className="utrecht-breadcrumb__link">
                    Third step
                  </Link>
                </li>
                <li className="utrecht-breadcrumb__item">
                  <Icon icon="delta-naar-rechts" color="hemelblauw" size="xs" />
                  Current page
                </li>
              </ol>
            </nav>
            <div className="rvo-content">
              <Heading>Breadcrumbs example</Heading>
              <Paragraph>
                <span className="utrecht-emphasis--strong">Paragraph medium.</span> De overheid zet zich in voor een
                uitstekend ondernemersklimaat. De ministeries stippelen daar beleid voor uit. En de taak om dit uit te
                voeren ligt bij RVO: de Rijksdienst voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
                <Link href="#">Dit is een link. </Link> Tussen bedrijven, kennis- en financiële instellingen, ambassades
                en lokale overheden.
              </Paragraph>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutColumnRow>
    </div>
  );
};

export default Breadcrumbs;
