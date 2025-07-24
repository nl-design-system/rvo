import { Button, Heading, Icon, LayoutFlow, StatusIcon } from '@nl-rvo/components';
import '../../common/loading.scss';

const Loading = () => {
  return (
    <div className="rvo-demo-page rvo-loading-demopage">
      <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-padding-block-start--xl">
        <Heading type="h1" title="Loading demo page"></Heading>
        <p className="rvo-paragraph rvo-paragraph--zwart rvo-paragraph--md ">
          Dit is een experimentele demopagina om het loading component/patroon te testen. Het loading component/patroon
          geeft een visuele weergave van als er iets ingeladen moet worden en de gebruiker moet wachten voordat de
          content beschikbaar gemaakt wordt.
        </p>
        <LayoutFlow>
          <div className="rvo-loading-canvas rvo-loading-canvas-animate">
            <Icon icon="pijlen-in-cirkel-om-document" size="2xl" color="grijs-700"></Icon>
            <p className="rvo-loading-text rvo-paragraph rvo-paragraph--sm rvo-margin-block-start--sm">
              De bestanden worden geladen...
            </p>
          </div>
          <div className="rvo-loading-canvas rvo-loading-canvas-animate">
            <Icon icon="pijlen-in-cirkel-om-document" size="2xl" color="grijs-700"></Icon>
            <div className="rvo-loading-text rvo-paragraph rvo-paragraph--sm rvo-margin-block-end--sm rvo-margin-block-start--sm">
              <LayoutFlow row={true} gap="xs">
                <StatusIcon type="waarschuwing" size="sm"></StatusIcon>Het laden duurt langer dan verwacht...
              </LayoutFlow>
            </div>
            <LayoutFlow row={true} gap="md">
              <Button size="xs">Probeer het opnieuw</Button>
              <Button size="xs" kind="secondary">
                Probleem melden
              </Button>
            </LayoutFlow>
          </div>
          <div className="rvo-loading-canvas">
            <Icon icon="pijlen-in-cirkel-om-document" size="2xl" color="grijs-700"></Icon>
            <div className="rvo-loading-text rvo-paragraph rvo-paragraph--sm rvo-margin-block-end--sm rvo-margin-block-start--sm">
              <LayoutFlow row={true} gap="xs">
                <StatusIcon type="foutmelding" size="sm"></StatusIcon>Helaas konden de bestanden niet geladen worden.
              </LayoutFlow>
            </div>
            <LayoutFlow row={true} gap="md">
              <Button size="xs">Probeer het opnieuw</Button>
              <Button size="xs" kind="secondary">
                Probleem melden
              </Button>
            </LayoutFlow>
          </div>
        </LayoutFlow>
      </main>
    </div>
  );
};

export default Loading;
