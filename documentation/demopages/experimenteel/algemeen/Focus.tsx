import {
  Accordion,
  Button,
  ButtonGroup,
  CheckboxField,
  Fieldset,
  FileInputField,
  Footer,
  Header,
  Heading,
  LayoutColumnRow,
  Link,
  MenuBar,
  RadioButtonField,
  SelectField,
  TextInputField,
} from '@nl-rvo/components';
import '../../common/focus.scss';

const Focus = () => {
  return (
    <div className="rvo-demo-page rvo-focus-demopage">
      <Header link="#" />
      <LayoutColumnRow size="lg">
        <MenuBar
          items={[
            { label: 'Home', link: '#' },
            { label: 'Onderwerpen', link: '#' },
            { label: 'Subsidie- en financieringswijzer', link: '#' },
            { label: 'Over ons', link: '#' },
            { label: 'Contact', link: '#' },
            { label: 'Zoeken', icon: 'zoek', link: '#', align: 'right' },
          ]}
          size="md"
          maxWidth="md"
          useIcons={true}
          iconPlacement="before"
        />
        <LayoutColumnRow size="3xl">
          <main className="rvo-max-width-layout rvo-max-width-layout--sm">
            <Heading textContent="Focus indicator demo page"></Heading>
            <p className="rvo-text rvo-text--no-margins">
              Deze pagina laat alle focus indicators zien van de verschillende componenten. Er is gekozen voor
              focus:visible omdat dit voldoende ondersteund wordt door grote browsers.
            </p>
            <Accordion
              items={[
                {
                  title: 'Mag ik voor deze regeling subsidies stapelen/combineren?',
                  teaser: '',
                  content:
                    'Per 21 april 2021 kunt u als woningeigenaar ISDE combineren met gemeentelijke of provinciale subsidies om bijvoorbeeld uw woning aan te sluiten op een warmtenet. Dit is terug te vinden in de publicatie in de Staatscourant. Het is niet mogelijk om meer dan een keer subsidie te ontvangen vanuit de Rijksoverheid voor dezelfde maatregel.',
                },
                {
                  title: 'Wat is een bestaande thermische schil?',
                  teaser: '',
                  content:
                    'De bestaande thermische schil is de isolerende laag aan de buitenzijde van de woning. Wanden, daken, beglazing en deuren, en vloeren grenzend aan de buitenlucht of grond zijn geïsoleerd om kou te weren en warmte binnen te houden. De thermische schil is de jas van de woning.',
                },
                {
                  title: 'Wanneer krijg ik bericht over mijn subsidie?',
                  teaser: '',
                  content: 'Zo snel mogelijk.',
                },
              ]}
            />
            <p>
              Dit is een voorbeeld van een{' '}
              <a href="#" className="rvo-link">
                dit is een voorbeeld van een link
              </a>
              .
            </p>
            <div className="rvo-form">
              <LayoutColumnRow size="sm">
                <div className="rvo-form-intro">
                  <Link content="Terug" href="#" showIcon="before" icon="terug" />
                  <Heading type="h1" textContent="Heading" />
                </div>
                <form className="rvo-layout-spacer rvo-layout-spacer--2xl">
                  <Fieldset legend="Keyboard inputs">
                    <TextInputField label="Text" />
                    <TextInputField
                      label="Text with helper text"
                      helperText="This is a helper text which can be used for instructions."
                    />
                    <TextInputField label="Text" />
                    <TextInputField label="Text with an error" errorText="This is an error" invalid={true} />
                    <TextInputField label="Text with a warning" warningText="This is a warning" />
                    <TextInputField
                      label="Text with expandable helper text"
                      helperText="This is a helper text which can be used for instructions."
                      expandableHelperText={true}
                      expandableHelperTextTitle="Expandable helper text"
                    />
                    <TextInputField label="Text disabled" disabled={true} />
                    <TextInputField label="Text disabled with value" disabled={true} value="Value" />
                    <TextInputField label="Number" validation="number" />
                    <TextInputField label="Textarea" inputType="textarea" />
                  </Fieldset>

                  <Fieldset legend="Options">
                    <RadioButtonField
                      name="radio-buttons"
                      label="Radio buttons"
                      helperText="This is an helper text"
                      options={[
                        { id: 'optionA', label: 'Option A' },
                        { id: 'optionB', label: 'Option B' },
                        { id: 'optionC', label: 'Option C' },
                        { id: 'optionD', label: 'Option D' },
                      ]}
                    ></RadioButtonField>
                    <RadioButtonField
                      name="radio-buttons-error"
                      label="Radio buttons invalid"
                      errorText="This is an error"
                      invalid={true}
                      options={[
                        { id: 'optionA-error', label: 'Option A' },
                        { id: 'optionB-error', label: 'Option B' },
                        { id: 'optionC-error', label: 'Option C' },
                        { id: 'optionD-error', label: 'Option D' },
                      ]}
                    ></RadioButtonField>

                    <RadioButtonField
                      name="radio-buttons-warning"
                      label="Radio buttons with warning"
                      warningText="This is a warning"
                      options={[
                        { id: 'optionA-warning', label: 'Option A' },
                        { id: 'optionB-warning', label: 'Option B' },
                        { id: 'optionC-warning', label: 'Option C' },
                        { id: 'optionD-warning', label: 'Option D' },
                      ]}
                    ></RadioButtonField>

                    <CheckboxField
                      helperText="This is an helper text"
                      label="Checkboxes"
                      invalid={false}
                      options={[
                        { id: 'optionA-cb', label: 'Option A' },
                        { id: 'optionB-cb', label: 'Option B' },
                        { id: 'optionC-cb', label: 'Option C' },
                        { id: 'optionD-cb', label: 'Option D' },
                      ]}
                    ></CheckboxField>

                    <CheckboxField
                      errorText="This is an error"
                      label="Checkboxes with error"
                      invalid={true}
                      options={[
                        { id: 'optionA-cb-error', label: 'Option A' },
                        { id: 'optionB-cb-error', label: 'Option B' },
                        { id: 'optionC-cb-error', label: 'Option C' },
                        { id: 'optionD-cb-error', label: 'Option D' },
                      ]}
                    ></CheckboxField>

                    <CheckboxField
                      warningText="This is a warning"
                      label="Checkboxes with a warning"
                      invalid={false}
                      options={[
                        { id: 'optionA-cb-warning', label: 'Option A' },
                        { id: 'optionB-cb-warning', label: 'Option B' },
                        { id: 'optionC-cb-warning', label: 'Option C' },
                        { id: 'optionD-cb-warning', label: 'Option D' },
                      ]}
                    ></CheckboxField>

                    <SelectField
                      label="Select"
                      options={[
                        { value: '1', label: 'Option #1' },
                        { value: '2', label: 'Option #2' },
                        { value: '3', label: 'Option #3' },
                      ]}
                    ></SelectField>
                  </Fieldset>

                  <Fieldset legend="Other">
                    <FileInputField label="File" />
                    <div className="utrecht-form-field rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                      <div className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs">
                        <label htmlFor="fieldId" className="utrecht-form-label rvo-form-field__label-text">
                          Date
                        </label>
                      </div>
                      <input
                        type="date"
                        id="field"
                        placeholder=""
                        className="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--sm"
                        value=""
                      />
                    </div>
                    <div className="utrecht-form-field rvo-form-field rvo-layout-column rvo-layout-gap--sm">
                      <div className="rvo-form-field__label rvo-layout-column rvo-layout-gap--2xs">
                        <label htmlFor="fieldId" className="utrecht-form-label rvo-form-field__label-text">
                          Time
                        </label>
                      </div>
                      <input
                        type="time"
                        id="field"
                        placeholder=""
                        className="utrecht-textbox utrecht-textbox--html-input utrecht-textbox--sm"
                        value=""
                      />
                    </div>
                  </Fieldset>

                  <ButtonGroup>
                    <Button
                      kind="primary"
                      size="md"
                      active={false}
                      busy={false}
                      focus={false}
                      focusVisible={false}
                      disabled={false}
                      hover={false}
                      showIcon="no"
                    >
                      Primary action
                    </Button>
                    <Button
                      kind="secondary"
                      size="md"
                      active={false}
                      busy={false}
                      focus={false}
                      focusVisible={false}
                      disabled={false}
                      hover={false}
                      showIcon="no"
                    >
                      Secondary action
                    </Button>
                  </ButtonGroup>
                </form>
              </LayoutColumnRow>
            </div>
          </main>

          <Footer
            columns={[
              {
                label: 'RVO',
                items: [
                  { content: 'Over ons', link: '#' },
                  { content: 'Contact', link: '#' },
                  { content: 'Pers', link: '#' },
                  { content: 'Zaken regelen bij RVO', link: '#' },
                ],
              },
              {
                label: 'Over deze site',
                items: [
                  { content: 'Privacy', link: '#' },
                  { content: 'Cookies en anti-spam', link: '#' },
                  { content: 'Toegankelijkheid', link: '#' },
                  { content: 'Proclaimer', link: '#' },
                ],
              },
              {
                label: 'Snel naar',
                items: [
                  { content: 'Onderwerpen A t/m Z', link: '#' },
                  { content: 'Klantenpanel', link: '#' },
                  { content: 'Documenten en publicaties', link: '#' },
                  { content: 'Overheidspublicaties en auteursrecht', link: '#' },
                ],
              },
              {
                label: 'Blijf op de hoogte',
                items: [
                  { content: 'Social media', link: '#' },
                  { content: 'RSS', link: '#' },
                  { content: 'Gratis nieuwsbrief', link: '#' },
                ],
              },
            ]}
          />
        </LayoutColumnRow>
      </LayoutColumnRow>
    </div>
  );
};

export default Focus;
