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
  Strong,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import { defaultMenuBarItems } from '../../common/defaultMenuBarItems';
import '../common/style.scss';

const Content = () => {
  return (
    <div className="rvo-nl-demo-page">
      <Header />
      <LayoutColumnRow size="md">
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" />
        <main className="rvo-max-width-layout rvo-max-width-layout--sm">
          <div className="rvo-content">
            <Heading1>Heading 1</Heading1>
            <Paragraph lead className="utrecht-paragraph--distanced">
              <Strong>Paragraph large.</Strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
              ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
              voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
              <Link href="#">Dit is een link.</Link> Tussen bedrijven, kennis- en financiële instellingen, ambassades en
              lokale overheden.
            </Paragraph>
            <Heading2>Heading 2</Heading2>
            <Paragraph className="utrecht-paragraph--distanced">
              <Strong>Paragraph medium.</Strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
              ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
              voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
              <Link href="#">Dit is een link.</Link> Tussen bedrijven, kennis- en financiële instellingen, ambassades en
              lokale overheden.
            </Paragraph>
            <Heading3>Heading 3</Heading3>
            <Paragraph className="utrecht-paragraph--small utrecht-paragraph--distanced">
              <Strong>Paragraph small.</Strong> De overheid zet zich in voor een uitstekend ondernemersklimaat. De
              ministeries stippelen daar beleid voor uit. En de taak om dit uit te voeren ligt bij RVO: de Rijksdienst
              voor Ondernemend Nederland. Onze mensen maken wereldwijd verbinding.{' '}
              <Link href="#">Dit is een link.</Link> Tussen bedrijven, kennis- en financiële instellingen, ambassades en
              lokale overheden.
            </Paragraph>
            <UnorderedList className="utrecht-unordered-list--distanced">
              <UnorderedListItem>Unordered list</UnorderedListItem>
              <UnorderedListItem>Second item</UnorderedListItem>
              <UnorderedListItem>Third item</UnorderedListItem>
            </UnorderedList>
            <OrderedList className="utrecht-ordered-list--distanced">
              <OrderedListItem>Ordered list</OrderedListItem>
              <OrderedListItem>Second item</OrderedListItem>
              <OrderedListItem>Third item</OrderedListItem>
            </OrderedList>
            <blockquote className="utrecht-blockquote">
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
