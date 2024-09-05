import { Header, Heading, LayoutColumnRow, Link, MenuBar } from '@nl-rvo/components';
import { defaultMenuBarItems } from '../../common/defaultMenuBarItems';
import '../../common/style.scss';

const Content = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="md">
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" />
        <main className="rvo-max-width-layout rvo-max-width-layout--sm">
          <div className="rvo-content">
            <Heading type="h1" textContent="Heading 1"></Heading>
            <p className="rvo-paragraph rvo-paragraph--lg">
              <strong>Paragraph large.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
              ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
              voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
              <Link content="Dit is een link. " href="#"></Link>&nbsp;Tussen bedrijven, kennis- en financiële
              instellingen, ambassades en lokale overheden.
            </p>
            <Heading type="h2" textContent="Heading 2"></Heading>
            <p className="rvo-paragraph rvo-paragraph--md">
              <strong>Paragraph medium.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
              ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
              voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
              <Link content="Dit is een link. " href="#"></Link>&nbsp;Tussen bedrijven, kennis- en financiële
              instellingen, ambassades en lokale overheden.
            </p>
            <Heading type="h3" textContent="Heading 3"></Heading>

            <p className="rvo-paragraph rvo-paragraph--sm">
              <strong>Paragraph small.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
              ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
              voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
              <Link content="Dit is een link. " href="#"></Link>&nbsp;Tussen bedrijven, kennis- en financiële
              instellingen, ambassades en lokale overheden.
            </p>
            <ul className="rvo-list rvo-list--unordered">
              <li className="rvo-list-item">Unordered list</li>
              <li className="rvo-list-item">Second item</li>
              <li className="rvo-list-item">Third item</li>
            </ul>
            <ol className="rvo-list rvo-list--ordered">
              <li className="rvo-list-item">Ordered list</li>
              <li className="rvo-list-item">Second item</li>
              <li className="rvo-list-item">Third item</li>
            </ol>
            <blockquote className="rvo-blockquote">
              <strong>Dit is een blockquote.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
              ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
              voor Ondernemend Nederland.
            </blockquote>
          </div>
        </main>
      </LayoutColumnRow>
    </div>
  );
};

export default Content;
