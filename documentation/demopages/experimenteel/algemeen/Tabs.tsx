import { Footer, Header, Heading, LayoutFlow, MenuBar } from '@nl-rvo/components';
import '../../common/tabs.scss';
import { defaultFooterItems } from '../../../demopages/common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../../demopages/common/defaultSecondaryFooterItems';

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
            <Heading type="h1">Tabs demo page</Heading>
            <div className="rvo-tabs">
              <ul
                className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                role="tablist"
                aria-label="Tabs"
              >
                <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                  Tab 1
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-2"
                    className="rvo-link rvo-tabs__item-link rvo-link--no-underline rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 2
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-3"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
              <div className="rvo-tabs__panel" id="tab-1">
                <Heading type="h2">Tab 1</Heading>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                  ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                  Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
                  ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
                </p>
              </div>
            </div>

            <div className="rvo-margin-block-end--xl"></div>

            <div className="rvo-tabs">
              <ul
                className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                role="tablist"
                aria-label="Tabs"
              >
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-1b"
                    className="rvo-link rvo-tabs__item-link rvo-link--no-underline rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 1
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                  Tab 2
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-3b"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
              <div className="rvo-tabs__panel" id="tab-2b">
                <Heading type="h2">Tab 2</Heading>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                  ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                  Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
                  ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
                </p>
              </div>
            </div>

            <div className="rvo-margin-block-end--xl"></div>

            <div className="rvo-tabs rvo-tabs--subtle">
              <ul
                className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                role="tablist"
                aria-label="Tabs"
              >
                <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                  Tab 1
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-2"
                    className="rvo-link rvo-tabs__item-link rvo-link--no-underline rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 2
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-3"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
              <div className="rvo-tabs__panel" id="tab-1">
                <Heading type="h2">Tab 1</Heading>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                  ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                  Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
                  ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
                </p>
              </div>
            </div>

            <div className="rvo-margin-block-end--xl"></div>

            <div className="rvo-tabs rvo-tabs--subtle">
              <ul
                className="rvo-tabs-ul rvo-ul rvo-ul--no-margin rvo-ul--no-padding rvo-ul--icon rvo-ul--icon-option-2"
                role="tablist"
                aria-label="Tabs"
              >
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-1b"
                    className="rvo-link rvo-tabs__item-link rvo-link--no-underline rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 1
                  </a>
                </li>
                <li role="presentation" className="rvo-tabs__item rvo-tabs__item-active">
                  Tab 2
                </li>
                <li role="presentation" className="rvo-tabs__item">
                  <a
                    href="#tab-3b"
                    className="rvo-link rvo-tabs__item-link  rvo-link--normal"
                    role="tab"
                    aria-selected="false"
                  >
                    Tab 3
                  </a>
                </li>
              </ul>
              <div className="rvo-tabs__panel" id="tab-2b">
                <Heading type="h2">Tab 2</Heading>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                  ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                  mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="rvo-paragraph rvo-paragraph--grijs-900 rvo-paragraph--md">
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                  Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
                  ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
                </p>
              </div>
            </div>
          </main>

          <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
        </LayoutFlow>
      </LayoutFlow>
    </div>
  );
};

export default Tabs;
