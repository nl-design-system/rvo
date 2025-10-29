import { Footer, Header, Heading, Icon, LayoutFlow, MenuBar } from '@nl-rvo/components';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultMenuBarItems } from '../../common/defaultMenuBarItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const EmptyItemList = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />
      <LayoutFlow gap="lg">
        <MenuBar items={defaultMenuBarItems} size="md" useIcons={true} iconPlacement="before" maxWidth="md" />
        <LayoutFlow gap="3xl">
          <LayoutFlow gap="xl">
            <main className="rvo-max-width-layout rvo-max-width-layout--sm">
              <Heading type="h2">Lopende aanvragen</Heading>
              <div className="rvo-card rvo-card--outline rvo-card--padding--xl">
                <div className="rvo-bg--grijs-050 rvo-layout-column rvo-layout-align-items-center rvo-layout-align-content-start rvo-layout-gap--xs rvo-padding--lg">
                  <Icon icon="document-met-lijnen" size="3xl" color="grijs-700" />
                  <span className="rvo-paragraph rvo-paragraph--grijs-500 rvo-paragraph--md">
                    U heeft geen lopende aanvragen
                  </span>
                </div>
              </div>
            </main>
          </LayoutFlow>

          <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
        </LayoutFlow>
      </LayoutFlow>
    </div>
  );
};

export default EmptyItemList;
