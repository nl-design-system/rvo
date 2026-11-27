/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import { ActionGroup, FormField, Heading, LayoutFlow, Link } from '@nl-rvo/component-library-react';
import { MeerstappenLayout } from './MeerstappenLayout';
import { URL_STAP_1, URL_STAP_3 } from './urls';

export default function Stap2Page() {
  return (
    <MeerstappenLayout current="stap-2">
      <LayoutFlow gap="xl">
        <div>
          <Link href={URL_STAP_1} iconPlacement="left" icon="terug" noUnderline={true}>
            Terug naar stap 1
          </Link>
          <Heading type="h1">Stap 2</Heading>
          <p className="rvo-paragraph rvo-paragraph--no-spacing rvo-paragraph--lg">
            Hier staat een korte uitleg bij deze stap van het formulier.
          </p>
        </div>

        <form noValidate>
          <LayoutFlow gap="xl">
            <FormField id="keuze" label="Keuze" helperText="Kies één van de opties.">
              <FormField.RadioButtonGroup
                name="keuze"
                options={[
                  { id: 'keuze-a', label: 'Optie A' },
                  { id: 'keuze-b', label: 'Optie B' },
                ]}
              />
            </FormField>
            <FormField id="lijst" label="Keuzelijst">
              <FormField.Select
                options={[
                  { value: 'optie-1', label: 'Optie 1' },
                  { value: 'optie-2', label: 'Optie 2' },
                ]}
              />
            </FormField>
            <ActionGroup>
              <a
                href={URL_STAP_3}
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
