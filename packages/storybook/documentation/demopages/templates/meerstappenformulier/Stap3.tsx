/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { ActionGroup, FormField, Heading, LayoutFlow, Link } from '@nl-rvo/component-library-react';
import { MeerstappenLayout } from './MeerstappenLayout';
import { URL_STAP_2, URL_CONTROLEREN } from './urls';

export default function Stap3Page() {
  return (
    <MeerstappenLayout current="stap-3">
      <LayoutFlow gap="xl">
        <div>
          <Link href={URL_STAP_2} iconPlacement="left" icon="terug" noUnderline={true}>
            Terug naar stap 2
          </Link>
          <Heading type="h1">Stap 3</Heading>
          <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
            Hier staat een korte uitleg bij deze stap van het formulier.
          </p>
        </div>

        <form noValidate>
          <LayoutFlow gap="xl">
            <FormField id="toelichting" label="Toelichting (niet verplicht)">
              <FormField.TextArea />
            </FormField>
            <FormField id="bevestiging" label="Bevestiging">
              <FormField.CheckboxGroup options={[{ id: 'akkoord', label: 'Ik ga akkoord met de voorwaarden.' }]} />
            </FormField>
            <ActionGroup>
              <a
                href={URL_CONTROLEREN}
                className="rvo-button rvo-button--primary rvo-button--size-md rvo-link--no-underline"
              >
                Naar controleren en versturen
              </a>
            </ActionGroup>
          </LayoutFlow>
        </form>
      </LayoutFlow>
    </MeerstappenLayout>
  );
}
