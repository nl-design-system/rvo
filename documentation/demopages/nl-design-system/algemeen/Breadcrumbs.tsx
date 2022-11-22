import { Header } from '@nl-rvo/components/header/css/template';
import { Icon } from '@nl-rvo/components/icon/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { Heading1, Link, Paragraph } from '@utrecht/component-library-react';
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
              <Heading1>Breadcrumbs example</Heading1>
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
