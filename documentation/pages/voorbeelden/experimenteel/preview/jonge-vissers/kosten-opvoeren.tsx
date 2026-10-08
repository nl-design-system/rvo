import {
  ActionGroup,
  Fieldset,
  Header,
  Heading,
  LayoutFlow,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
  RadioButtonField,
  TextInputField,
} from '@nl-rvo/component-library-react';
import { defaultMenuBarItemsJV } from './defaultMenuBarItemsJV';
import '../../../../../demopages/common/style.scss';

const KostenOpvoeren = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutFlow gap="2xl">
        <MenuBar items={defaultMenuBarItemsJV} size="lg" useIcons={true} iconPlacement="before" maxWidth="md" />
        <MaxWidthLayout size="md">
          <main className="rvo-progress-tracker-active">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'completed',
                  label: 'Controleer uw gegevens',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Correspondentie',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Datum verleningsverzoek',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Project vragen',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
                  label: 'Kosten',
                  size: 'md',
                  line: 'substep-start',
                },
                {
                  state: 'doing',
                  label: 'Kosten opvoeren',
                  size: 'sm',
                  line: 'substep-end',
                },
                {
                  state: 'incomplete',
                  label: 'Bijlagen',
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Samenvatting',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  size: 'md',
                  line: 'straight',
                },

                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <div className="rvo-form">
              <LayoutFlow gap="xl">
                <div className="rvo-form-intro">
                  <LayoutFlow gap="md">
                    <Heading type="h1">Kosten opvoeren</Heading>
                    <dl className="rvo-data">
                      <dt>Omschrijving van de investering</dt>
                      <dd>Aanschaf voertuig</dd>
                    </dl>
                  </LayoutFlow>
                </div>
                <form>
                  <LayoutFlow gap="md">
                    <Fieldset legend="">
                      <TextInputField
                        label="Hoeveel kost het vissersvaartuig (exclusief btw)?"
                        validation="currency"
                      ></TextInputField>
                    </Fieldset>
                    <Fieldset legend="">
                      <RadioButtonField
                        name="vv-eigenaar"
                        label="Wordt u volledig of gedeeltelijk eigenaar van het vissersvaartuig?"
                        options={[
                          {
                            id: 'vveiga',
                            label: 'Volledig eigenaar',
                          },
                          { id: 'vveigb', label: 'Mede eigenaar' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                    <Fieldset legend="">
                      <TextInputField
                        label="Wat zijn de kosten waarvoor u subsidie wilt aanvragen?"
                        helperText="Uitgebreide uitleg over de subsidie."
                        expandableHelperText={true}
                        expandableHelperTextTitle="Meer informatie"
                        validation="currency"
                      ></TextInputField>
                    </Fieldset>

                    <ActionGroup>
                      <a className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline">
                        Opslaan en sluiten
                      </a>
                      <a className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline">
                        Opslaan en verder
                      </a>
                    </ActionGroup>
                  </LayoutFlow>
                </form>
              </LayoutFlow>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutFlow>
    </div>
  );
};

export default KostenOpvoeren;
