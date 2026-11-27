/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { ActionGroup, FormField, Heading, LayoutFlow, Link } from '@nl-rvo/component-library-react';
import { MeerstappenLayout } from './MeerstappenLayout';
import { URL_VOORDAT_U_BEGINT, URL_STAP_2 } from './urls';

export default function Stap1Page() {
  return (
    <MeerstappenLayout current="stap-1">
      <LayoutFlow gap="xl">
        <div>
          <Link href={URL_VOORDAT_U_BEGINT} iconPlacement="left" icon="terug" noUnderline={true}>
            Terug naar voordat u begint
          </Link>
          <Heading type="h1">Stap 1</Heading>
          <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
            Hier staat een korte uitleg bij deze stap van het formulier.
          </p>
        </div>

        <form noValidate>
          <LayoutFlow gap="xl">
            <FormField id="veld-1" label="Veld 1">
              <FormField.Text />
            </FormField>
            <FormField id="veld-2" label="Veld 2" helperText="Hier staat een korte uitleg bij dit veld.">
              <FormField.Text />
            </FormField>
            <ActionGroup>
              <a
                href={URL_STAP_2}
                className="rvo-button rvo-button--primary rvo-button--size-md rvo-link--no-underline"
              >
                Volgende stap
              </a>
            </ActionGroup>
          </LayoutFlow>
        </form>
      </LayoutFlow>
    </MeerstappenLayout>
  );
}
