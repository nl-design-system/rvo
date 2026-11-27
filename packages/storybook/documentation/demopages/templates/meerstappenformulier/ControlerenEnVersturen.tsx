/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { ActionGroup, DataList, Heading, LayoutFlow, Link } from '@nl-rvo/component-library-react';
import { MeerstappenLayout } from './MeerstappenLayout';
import { URL_BEVESTIGING, URL_STAP_1, URL_STAP_2, URL_STAP_3 } from './urls';

export default function ControlerenEnVersturenPage() {
  return (
    <MeerstappenLayout current="controleren">
      <LayoutFlow gap="xl">
        <div>
          <Link href={URL_STAP_3} iconPlacement="left" icon="terug" noUnderline={true}>
            Terug naar stap 3
          </Link>
          <Heading type="h1">Controleren en versturen</Heading>
          <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
            Controleer uw gegevens voordat u het formulier verstuurt. Kloppen de gegevens niet? Pas ze dan aan via de
            links hieronder.
          </p>
        </div>

        <LayoutFlow gap="lg">
          <div>
            <Heading type="h2">Stap 1</Heading>
            <DataList>
              <DataList.Item label="Veld 1" value="Voorbeeldwaarde 1" />
              <DataList.Item label="Veld 2" value="Voorbeeldwaarde 2" />
            </DataList>
            <div className="rvo-margin-block-start--md">
              <Link href={URL_STAP_1} iconPlacement="left" icon="bewerken" noUnderline={true}>
                Stap 1 wijzigen
              </Link>
            </div>
          </div>

          <hr className="rvo-hr" />

          <div>
            <Heading type="h2">Stap 2</Heading>
            <DataList>
              <DataList.Item label="Keuze" value="Optie A" />
              <DataList.Item label="Keuzelijst" value="Optie 1" />
            </DataList>
            <div className="rvo-margin-block-start--md">
              <Link href={URL_STAP_2} iconPlacement="left" icon="bewerken" noUnderline={true}>
                Stap 2 wijzigen
              </Link>
            </div>
          </div>

          <hr className="rvo-hr" />

          <div>
            <Heading type="h2">Stap 3</Heading>
            <DataList>
              <DataList.Item label="Toelichting" value="Voorbeeldtoelichting" />
              <DataList.Item label="Bevestiging" value="Ik ga akkoord met de voorwaarden." />
            </DataList>
            <div className="rvo-margin-block-start--md">
              <Link href={URL_STAP_3} iconPlacement="left" icon="bewerken" noUnderline={true}>
                Stap 3 wijzigen
              </Link>
            </div>
          </div>
        </LayoutFlow>

        <ActionGroup>
          <a
            href={URL_BEVESTIGING}
            className="rvo-button rvo-button--primary rvo-button--size-md rvo-link--no-underline"
          >
            Formulier versturen
          </a>
        </ActionGroup>
      </LayoutFlow>
    </MeerstappenLayout>
  );
}
