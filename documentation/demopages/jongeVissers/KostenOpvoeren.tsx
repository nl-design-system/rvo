import {
  Fieldset,
  Header,
  Heading,
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

const KostenOpvoeren = () => {
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
                  state: 'completed',
                  label: 'Project vragen',
                  link: linkTo("Demo pagina's/Jonge Vissers/Project"),
                  size: 'md',
                  line: 'straight',
                },
                {
                  state: 'doing',
                  label: 'Kosten',
                  link: linkTo("Demo pagina's/Jonge Vissers/Kosten"),
                  size: 'md',
                  line: 'substep-start',
                },
                {
                  state: 'doing',
                  label: 'Kosten opvoeren',
                  link: linkTo("Demo pagina's/Jonge Vissers/Kosten opvoeren"),
                  size: 'sm',
                  line: 'substep-end',
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
                  <LayoutColumnRow size="md">
                    <Heading type="h1" textContent="Kosten opvoeren"></Heading>
                    <dl className="rvo-data">
                      <dt>Omschrijving van de investering</dt>
                      <dd>Aanschaf voertuig</dd>
                    </dl>
                  </LayoutColumnRow>
                </div>
                <form>
                  <LayoutColumnRow size="md">
                    <Fieldset legend="">
                      <TextInputField
                        label="Hoeveel kost het vissersvaartuig (exclusief btw)?"
                        validation="number"
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
                        validation="number"
                      ></TextInputField>
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

export default KostenOpvoeren;
