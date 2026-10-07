import {
  ActionGroup,
  Field,
  Fieldset,
  Header,
  Heading,
  Label,
  LayoutFlow,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
} from '@nl-rvo/component-library-react';
import { defaultMenuBarItemsJV } from './defaultMenuBarItemsJV';
import '../../../../../demopages/common/style.scss';

const Datum = () => {
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
                  state: 'doing',
                  label: 'Datum verleningsverzoek',
                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Project vragen',
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Kosten',
                  size: 'md',
                  line: 'straight',
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
                  <Heading type="h1">Datum verleningsverzoek</Heading>
                </div>
                <form>
                  <LayoutFlow gap="md">
                    <Fieldset legend="">
                      <Field className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                        <Label htmlFor={'verlengingsdatum'}>
                          Wat is de datum op de poststempel van het verleningsverzoek?
                        </Label>
                        <input type="date" id={'verlengingsdatum'} className="rvo-date"></input>
                      </Field>
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

export default Datum;
