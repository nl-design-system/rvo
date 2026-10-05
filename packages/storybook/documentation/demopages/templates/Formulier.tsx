import {
  ActionGroup,
  Button,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
  FormField
} from '@nl-rvo/component-library-react';
import { defaultSecondaryFooterItems } from '../common/defaultSecondaryFooterItems';
import { defaultFooterItems } from '../common/defaultFooterItems';

const Formulier = () => {
  return (
    <div className="rvo-demo-page">
      <Header link="#" />
      <LayoutFlow gap="xl">
        <MenuBar
          items={[
            {
              label: 'Naam app/website',
              link: '#',
            },
            {
              label: 'Menu item',
              link: '#',
            },
            {
              label: 'Menu item met icoon',
              icon: 'user',
              link: '#',
            },
            {
              align: 'right',
              label: 'Menu item rechts',
              link: '#',
            },
          ]}
          size="md"
          useIcons={true}
          iconPlacement="left"
          maxWidth="md"
        />
        <LayoutFlow gap="3xl">
          <LayoutFlow gap="xl">
            <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">
              <div className="rvo-form">
                <LayoutFlow gap="sm">
                  <div>
                    <Link href="#" iconPlacement="left" icon="terug" noUnderline={true}>
                      Terug
                    </Link>
                    <Heading type="h1">Formulier template</Heading>
                    <p className="rvo-text--lg">
                      <span className="rvo-text--bold">Voorbeeld van een paragraaf met grote tekst</span>. Deze
                      paragraaf kan gebruikt worden als introductie voor het formulier. Door wie moet het formulier
                      ingevuld worden en waar moet de klant rekening mee houden.
                    </p>
                  </div>
                  <form>
                    <LayoutFlow>
                      <div>
                        <Fieldset legend="Keyboard inputs">
                          <FormField label="Text">
                            <FormField.Text />
                          </FormField>
                          <FormField 
                            label="Text met helper text"
                            helperText="This is a helper text which can be used for instructions."
                          >
                            <FormField.Text />
                          </FormField>
                          <FormField label="Text">
                            <FormField.Text />
                          </FormField>
                          <FormField 
                            label="Text with an error"
                            errorText=''
                          >
                            <FormField.Text invalid />
                          </FormField>
                          <FormField 
                            label="Text with a warning"
                            warningText="This is a warning"
                          >
                            <FormField.Text />
                          </FormField>
                          <FormField 
                            label="Text with expandable helper text"
                            helperText="This is a helper text which can be used for instructions."
                            expandableHelperText={{title:"Expandable helper text", children: ""}}
                          >
                            <FormField.Text />
                          </FormField>
                          <FormField label="Text disabled">
                            <FormField.Text disabled />
                          </FormField>
                          <FormField label="Text disabled with value">
                            <FormField.Text disabled value="Value" />
                          </FormField>
                          <FormField label="Number">
                            <FormField.Text validation='none' />
                          </FormField>
                          <FormField label='Textarea'>
                            <FormField.TextArea />
                          </FormField>
                        </Fieldset>

                        <Fieldset legend="Options">
                          <FormField 
                            label='Radio buttons'
                            helperText="This is an helper text"
                          >
                            <FormField.RadioButtonGroup 
                              name="radio-buttons"
                              options={[
                                { id: 'optionA', label: 'Option A' },
                                { id: 'optionB', label: 'Option B' },
                                { id: 'optionC', label: 'Option C' },
                                { id: 'optionD', label: 'Option D' },
                              ]}
                            />
                          </FormField>
                          <FormField 
                            label='Radio buttons invalid'
                            errorText="This is an error"
                          >
                            <FormField.RadioButtonGroup 
                              name="radio-buttons-error"
                              invalid
                              options={[
                                { id: 'optionA-error', label: 'Option A' },
                                { id: 'optionB-error', label: 'Option B' },
                                { id: 'optionC-error', label: 'Option C' },
                                { id: 'optionD-error', label: 'Option D' },
                              ]}
                            />
                          </FormField>
                          <FormField 
                            label='Radio buttons with warning'
                            warningText="This is a wanrning"
                          >
                            <FormField.RadioButtonGroup 
                              name="radio-buttons-warning"
                              options={[
                                { id: 'optionA-warning', label: 'Option A' },
                                { id: 'optionB-warning', label: 'Option B' },
                                { id: 'optionC-warning', label: 'Option C' },
                                { id: 'optionD-warning', label: 'Option D' },
                              ]}
                            />
                          </FormField>

                          <FormField 
                            label='Checkboxes'
                            helperText="This is an helper text"
                          >
                            <FormField.CheckboxGroup 
                              options={[
                                { id: 'optionA', label: 'Option A' },
                                { id: 'optionB', label: 'Option B' },
                                { id: 'optionC', label: 'Option C' },
                                { id: 'optionD', label: 'Option D' },
                              ]}
                            />
                          </FormField>
                          <FormField 
                            label='Checkboxes invalid'
                            errorText="This is an error"
                          >
                            <FormField.CheckboxGroup 
                              invalid
                              options={[
                                { id: 'optionA-error', label: 'Option A' },
                                { id: 'optionB-error', label: 'Option B' },
                                { id: 'optionC-error', label: 'Option C' },
                                { id: 'optionD-error', label: 'Option D' },
                              ]}
                            />
                          </FormField>
                          <FormField 
                            label='Checkboxes with warning'
                            warningText="This is a wanrning"
                          >
                            <FormField.CheckboxGroup 
                              options={[
                                { id: 'optionA-warning', label: 'Option A' },
                                { id: 'optionB-warning', label: 'Option B' },
                                { id: 'optionC-warning', label: 'Option C' },
                                { id: 'optionD-warning', label: 'Option D' },
                              ]}
                            />
                          </FormField>

                          <FormField label='Select'>
                            <FormField.Select 
                              options={[
                                { value: '1', label: 'Option #1' },
                                { value: '2', label: 'Option #2' },
                                { value: '3', label: 'Option #3' },
                              ]}
                            />
                          </FormField>
                        </Fieldset>

                        <Fieldset legend="Other">
                          <FormField label='File'>
                            <FormField.FileInput />
                          </FormField>
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
                      </div>
                      <ActionGroup>
                        <Button kind="primary" size="md" busy={false} disabled={false}>
                          Primary action
                        </Button>
                        <Button kind="secondary" size="md" busy={false} disabled={false}>
                          Secondary action
                        </Button>
                      </ActionGroup>
                    </LayoutFlow>
                  </form>
                </LayoutFlow>
              </div>
            </main>
          </LayoutFlow>

          <Footer primaryMenu={defaultFooterItems} secondaryMenu={defaultSecondaryFooterItems} maxWidth="lg" />
        </LayoutFlow>
      </LayoutFlow>
    </div>
  );
};

export default Formulier;
