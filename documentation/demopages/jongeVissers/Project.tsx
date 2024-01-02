import {
  Field,
  Fieldset,
  Header,
  Heading,
  Label,
  LayoutColumnRow,
  MaxWidthLayout,
  MenuBar,
  ProgressTracker,
  RadioButtonField,
  TextInputField,
} from '@nl-rvo/components';
import { linkTo } from '@storybook/addon-links';
import { defaultMenuBarItemsJV } from '../common/defaultMenuBarItemsJV';
import '../common/style.scss';

const Project = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <LayoutColumnRow size="2xl">
        <MenuBar items={defaultMenuBarItemsJV} size="lg" useIcons={true} iconPlacement="before" maxWidth="md" />
        <MaxWidthLayout size="md">
          <main className="rvo-progress-tracker-active">
            <ProgressTracker
              steps={[
                { state: 'start', label: 'JV 2020', link: '#', size: 'md', line: 'straight' },
                {
                  state: 'completed',
                  label: 'Controleer uw gegevens',
                  link: linkTo("Demo pagina's/Jonge Vissers/Controleer uw gegevens"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Correspondentie',
                  link: linkTo("Demo pagina's/Jonge Vissers/Correspondentie"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'completed',
                  label: 'Datum verleningsverzoek',
                  link: linkTo("Demo pagina's/Jonge Vissers/Datum"),

                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
                  label: 'Project vragen',
                  link: linkTo("Demo pagina's/Jonge Vissers/Project"),

                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Kosten',
                  link: linkTo("Demo pagina's/Jonge Vissers/Kosten"),

                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Bijlagen',
                  link: linkTo("Demo pagina's/Jonge Vissers/Bijlagen"),

                  size: 'md',
                  line: 'straight',
                },

                {
                  state: 'incomplete',
                  label: 'Samenvatting',
                  link: linkTo("Demo pagina's/Jonge Vissers/Samenvatting"),

                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'incomplete',
                  label: 'Ondertekening',
                  link: linkTo("Demo pagina's/Jonge Vissers/Ondertekening"),

                  size: 'md',
                  line: 'straight',
                },

                { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
              ]}
            />
            <div className="rvo-form">
              <LayoutColumnRow size="xl">
                <div className="intro">
                  <Heading type="h1" textContent="Project vragen"></Heading>
                </div>
                <form>
                  <LayoutColumnRow size="md">
                    <Fieldset legend="">
                      <Field className="rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                        <Label htmlFor={'geboortedatum'}>Wat is uw geboortedatum?</Label>
                        <input type="date" id={'geboortedatum'} className="rvo-date"></input>
                      </Field>
                    </Fieldset>

                    <Fieldset legend="">
                      <RadioButtonField
                        name="vv"
                        label="Heeft u een vissersvaartuig in bezit of in bezit gehad?"
                        options={[
                          {
                            id: 'vva',
                            label: 'Ja',
                          },
                          { id: 'vvb', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                      <RadioButtonField
                        name="vvg"
                        label="Waar gaat u het aan te schaffen visservaartuig voor gebruiken?"
                        options={[
                          {
                            id: 'vvga',
                            label: 'Zee- of kustvisserij',
                          },
                          { id: 'vvgb', label: 'Binnenvisserij' },
                        ]}
                      ></RadioButtonField>
                      <RadioButtonField
                        name="vvu"
                        label="Voor welke vorm van visserij is het vissersvaartuig uitgerust?"
                        options={[
                          {
                            id: 'vvua',
                            label: 'Zee- of kustvisserij',
                          },
                          { id: 'vvub', label: 'Binnenvisserij' },
                          { id: 'vvuc', label: 'Geen uitrusting' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>
                    <Fieldset legend="">
                      <RadioButtonField
                        name="vveu"
                        label="Heeft het vaartuig dat u aanschaft een nummer in het EU-vlootregister (een EU-identificatienummer)?"
                        options={[
                          {
                            id: 'vveua',
                            label: 'Ja',
                          },
                          { id: 'vveub', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                      <TextInputField label="Wat is dit EU-identificatienummer?" validation="number"></TextInputField>
                      <TextInputField label="In welk land is het vaartuig dat u aanschaft geregistreerd in het EU-vlootregister?"></TextInputField>
                    </Fieldset>
                    <Fieldset legend="">
                      <TextInputField
                        label="Hoeveel personen (in fte per jaar) verwacht u dat er op het visservaartuig komen werken, met uzelf erbij?"
                        validation="number"
                      ></TextInputField>
                      <TextInputField
                        label="Hoeveel personen (in fte per jaar) verwacht u hebben niet eerder gewerkt in de visserij of maritieme sector?"
                        validation="number"
                      ></TextInputField>
                    </Fieldset>

                    <Fieldset legend="">
                      {' '}
                      <RadioButtonField
                        name="com"
                        label="Gaat u met het publiek communiceren over uw investering (bijvoorbeeld via een brochure, flyer of persbericht)?"
                        options={[
                          {
                            id: 'coma',
                            label: 'Ja',
                          },
                          { id: 'comb', label: 'Nee' },
                        ]}
                      ></RadioButtonField>
                    </Fieldset>

                    <div className="rvo-button-group">
                      <a
                        className="utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Mijn RVO/Zaak")}
                      >
                        Opslaan en sluiten
                      </a>
                      <a
                        className="utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline"
                        onClick={linkTo("Demo pagina's/Jonge Vissers/Kosten")}
                      >
                        Opslaan en verder
                      </a>
                    </div>
                  </LayoutColumnRow>
                </form>
              </LayoutColumnRow>
            </div>
          </main>
        </MaxWidthLayout>
      </LayoutColumnRow>
    </div>
  );
};

export default Project;
