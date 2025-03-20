import { Footer, Header, Heading, LayoutFlow, MenuBar } from '@nl-rvo/components';
import '../../common/tabs.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';

const Tabs = () => {
  return (
    <div className="rvo-demo-page rvo-tabs-demopage">
      <Header link="#" />
      <LayoutFlow gap="lg">
        <MenuBar
          items={[
            { label: 'Home', link: '#' },
            { label: 'Onderwerpen', link: '#' },
            { label: 'Subsidie- en financieringswijzer', link: '#' },
            { label: 'Over ons', link: '#' },
            { label: 'Contact', link: '#' },
            { label: 'Zoeken', icon: 'zoek', link: '#', align: 'right' },
          ]}
          size="md"
          maxWidth="md"
          useIcons={true}
          iconPlacement="before"
        />
        <LayoutFlow gap="3xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--sm">
            <Heading textContent="Tabs demo page"></Heading>
            <div className="rvo-tabs">
              <ul className="rvo-tabs-navigation rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2">
                <li>
                  <a
                    href="#section1"
                    className="rvo-link rvo-link--no-underline rvo-tabs-navigation-link rvo-tabs-navigation-link--active"
                  >
                    Section 1
                  </a>
                </li>
                <li>
                  <a
                    href="#section2"
                    className="rvo-link rvo-link--no-underline rvo-link--normal rvo-tabs-navigation-link"
                  >
                    Section 2
                  </a>
                </li>
                <li>
                  <a
                    href="#section3"
                    className="rvo-link rvo-link--no-underline rvo-link--normal rvo-tabs-navigation-link"
                  >
                    Section 3
                  </a>
                </li>
                <li>
                  <a
                    href="#section4"
                    className="rvo-link rvo-link--no-underline rvo-link--normal rvo-tabs-navigation-link"
                  >
                    Section 4
                  </a>
                </li>
              </ul>
              <div>
                <Heading type="h2" noMargins={true}>
                  Section 1
                </Heading>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies,
                  ante erat imperdiet velit, nec laoreet enim lacus a velit.{' '}
                  <a href="#" className="rvo-link">
                    Nam luctus
                  </a>
                  , enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent
                  non odio bibendum magna bibendum accumsan.
                </p>
              </div>
            </div>
          </main>

          <Footer primaryMenu={defaultFooterItems} />
        </LayoutFlow>
      </LayoutFlow>
    </div>
  );
};

export default Tabs;
