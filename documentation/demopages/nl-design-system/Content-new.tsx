import { Header } from '@nl-rvo/components/header/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import {
  Heading1,
  Heading2,
  Heading3,
  Link,
  OrderedList,
  OrderedListItem,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import { defaultMenuBarItems } from '../common/defaultMenuBarItems';
import '../common/style.scss';
import './index.scss';

const Content = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="md">
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" />
        <main className="rvo-max-width-layout rvo-max-width-layout--sm">
          <div className="rvo-content">
            <Heading1>Heading 1</Heading1>
            <Paragraph lead>
              <strong>Paragraph large.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
              ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
              voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
              <Link href="#">Dit is een link.</Link>&nbsp;Tussen bedrijven, kennis- en financiële instellingen,
              ambassades en lokale overheden.
            </Paragraph>
            <Heading2>Heading 2</Heading2>
            <Paragraph>
              <strong>Paragraph medium.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
              ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
              voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
              <Link href="#">Dit is een link.</Link>&nbsp;Tussen bedrijven, kennis- en financiële instellingen,
              ambassades en lokale overheden.
            </Paragraph>
            <Heading3>Heading 3</Heading3>
            <Paragraph className="rvo-paragraph rvo-paragraph--sm">
              <strong>Paragraph small.</strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
              ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
              voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
              <Link href="#">Dit is een link. </Link>&nbsp;Tussen bedrijven, kennis- en financiële instellingen,
              ambassades en lokale overheden.
            </Paragraph>
            <UnorderedList className="rvo-list rvo-list--unordered">
              <UnorderedListItem className="rvo-list-item">Unordered list</UnorderedListItem>
              <UnorderedListItem className="rvo-list-item">Second item</UnorderedListItem>
              <UnorderedListItem className="rvo-list-item">Third item</UnorderedListItem>
            </UnorderedList>
            <OrderedList className="rvo-list rvo-list--ordered">
              <OrderedListItem className="rvo-list-item">Ordered list</OrderedListItem>
              <OrderedListItem className="rvo-list-item">Second item</OrderedListItem>
              <OrderedListItem className="rvo-list-item">Third item</OrderedListItem>
            </OrderedList>
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
