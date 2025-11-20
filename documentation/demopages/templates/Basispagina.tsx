import { Footer, Header, Heading, LayoutFlow } from '@nl-rvo/components';
import { defaultFooterItems } from '../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../common/defaultSecondaryFooterItems';

const Basispagina = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />

      <LayoutFlow gap="3xl">
        <LayoutFlow gap="xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">
            <Heading type="h1">H1 heading</Heading>
          </main>
        </LayoutFlow>

        <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
      </LayoutFlow>
    </div>
  );
};

export default Basispagina;
