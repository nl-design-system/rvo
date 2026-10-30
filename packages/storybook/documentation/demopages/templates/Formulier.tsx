/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  ActionGroup,
  Button,
  Checkbox,
  Fieldset,
  FileInput,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
  RadioButton,
  Select,
  Textarea,
  TextInput,
} from '@nl-rvo/component-library-react';
import type { ReactElement } from 'react';
import { defaultFooterItems } from '../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../common/defaultSecondaryFooterItems';

export default function FormulierPage(): ReactElement {
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
          iconPlacement="before"
          maxWidth="md"
        />
        <LayoutFlow gap="3xl">
          <LayoutFlow gap="xl">
            <main className="rvo-max-width-layout rvo-max-width-layout--sm rvo-max-width-layout-inline-padding--md">
              <div className="rvo-form">
                <LayoutFlow gap="sm">
                  <div>
                    <Link href="#" showIcon="before" icon="terug" noUnderline={true}>
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
                          <TextInput label="Text" />
                          <TextInput
                            label="Text with helper text"
                            helperText="This is a helper text which can be used for instructions."
                          />
                          <TextInput label="Text" />
                          <TextInput label="Text with an error" errorText="This is an error" invalid={true} />
                          <TextInput label="Text with a warning" warningText="This is a warning" />
                          <TextInput
                            label="Text with expandable helper text"
                            helperText="This is a helper text which can be used for instructions."
                            expandableHelperText={true}
                            expandableHelperTextTitle="Expandable helper text"
                          />
                          <TextInput label="Text disabled" disabled={true} />
                          <TextInput label="Text disabled with value" disabled={true} value="Value" />
                          <TextInput label="Number" validation="none" />
                          <Textarea label="Textarea" />
                        </Fieldset>

                        <Fieldset legend="Options">
                          <RadioButton
                            name="radio-buttons"
                            label="Radio buttons"
                            helperText="This is an helper text"
                            options={[
                              { id: 'optionA', label: 'Option A' },
                              { id: 'optionB', label: 'Option B' },
                              { id: 'optionC', label: 'Option C' },
                              { id: 'optionD', label: 'Option D' },
                            ]}
                          ></RadioButton>
                          <RadioButton
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
                          ></RadioButton>

                          <RadioButton
                            name="radio-buttons-warning"
                            label="Radio buttons with warning"
                            warningText="This is a warning"
                            options={[
                              { id: 'optionA-warning', label: 'Option A' },
                              { id: 'optionB-warning', label: 'Option B' },
                              { id: 'optionC-warning', label: 'Option C' },
                              { id: 'optionD-warning', label: 'Option D' },
                            ]}
                          ></RadioButton>

                          <Checkbox
                            helperText="This is an helper text"
                            label="Checkboxes"
                            invalid={false}
                            options={[
                              { id: 'optionA-cb', label: 'Option A' },
                              { id: 'optionB-cb', label: 'Option B' },
                              { id: 'optionC-cb', label: 'Option C' },
                              { id: 'optionD-cb', label: 'Option D' },
                            ]}
                          ></Checkbox>

                          <Checkbox
                            errorText="This is an error"
                            label="Checkboxes with error"
                            invalid={true}
                            options={[
                              { id: 'optionA-cb-error', label: 'Option A' },
                              { id: 'optionB-cb-error', label: 'Option B' },
                              { id: 'optionC-cb-error', label: 'Option C' },
                              { id: 'optionD-cb-error', label: 'Option D' },
                            ]}
                          ></Checkbox>

                          <Checkbox
                            warningText="This is a warning"
                            label="Checkboxes with a warning"
                            invalid={false}
                            options={[
                              { id: 'optionA-cb-warning', label: 'Option A' },
                              { id: 'optionB-cb-warning', label: 'Option B' },
                              { id: 'optionC-cb-warning', label: 'Option C' },
                              { id: 'optionD-cb-warning', label: 'Option D' },
                            ]}
                          ></Checkbox>

                          <Select
                            label="Select"
                            options={[
                              { value: '1', label: 'Option #1' },
                              { value: '2', label: 'Option #2' },
                              { value: '3', label: 'Option #3' },
                            ]}
                          ></Select>
                        </Fieldset>

                        <Fieldset legend="Other">
                          <FileInput label="File" />
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
                        <Button kind="primary" size="md" busy={false} disabled={false} showIcon="no">
                          Primary action
                        </Button>
                        <Button kind="secondary" size="md" busy={false} disabled={false} showIcon="no">
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
}
