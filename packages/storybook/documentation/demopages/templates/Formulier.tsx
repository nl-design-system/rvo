/**
 * @license CC0-1.0
 * Copyright (c) 2022 Community for NL Design System
 */
import {
  ActionGroup,
  Button,
  Fieldset,
  Footer,
  FormField,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
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
          horizontalRule={true}
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
                          <FormField id="text-1" label="Text">
                            <FormField.Text />
                          </FormField>

                          <FormField
                            id="text-helper"
                            label="Text met helper text"
                            helperText="This is a helper text which can be used for instructions."
                          >
                            <FormField.Text />
                          </FormField>

                          <FormField id="text-2" label="Text">
                            <FormField.Text />
                          </FormField>

                          <FormField id="text-error" label="Text with an error" errorText="This is an error">
                            <FormField.Text invalid={true} />
                          </FormField>

                          <FormField id="text-warning" label="Text with a warning" warningText="This is a warning">
                            <FormField.Text />
                          </FormField>

                          <FormField
                            id="text-expandable"
                            label="Text with expandable helper text"
                            helperText="This is a helper text which can be used for instructions."
                            expandableHelperText={{ title: 'Expandable helper text', children: '' }}
                          >
                            <FormField.Text />
                          </FormField>

                          <FormField id="text-disabled" label="Text disabled">
                            <FormField.Text disabled={true} />
                          </FormField>

                          <FormField id="text-disabled-value" label="Text disabled with value">
                            <FormField.Text disabled={true} value="Value" />
                          </FormField>

                          <FormField id="number" label="Number">
                            <FormField.Text validation="none" />
                          </FormField>

                          <FormField id="textarea" label="Textarea">
                            <FormField.TextArea />
                          </FormField>
                        </Fieldset>

                        <Fieldset legend="Options">
                          <FormField id="radio-buttons" label="Radio buttons" helperText="This is an helper text">
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
                            id="radio-buttons-error"
                            label="Radio buttons invalid"
                            errorText="This is an error"
                          >
                            <FormField.RadioButtonGroup
                              name="radio-buttons-error"
                              invalid={true}
                              options={[
                                { id: 'optionA-error', label: 'Option A' },
                                { id: 'optionB-error', label: 'Option B' },
                                { id: 'optionC-error', label: 'Option C' },
                                { id: 'optionD-error', label: 'Option D' },
                              ]}
                            />
                          </FormField>

                          <FormField
                            id="radio-buttons-warning"
                            label="Radio buttons with warning"
                            warningText="This is a warning"
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

                          <FormField id="checkboxes" label="Checkboxes" helperText="This is an helper text">
                            <FormField.CheckboxGroup
                              options={[
                                { id: 'optionA-cb', label: 'Option A' },
                                { id: 'optionB-cb', label: 'Option B' },
                                { id: 'optionC-cb', label: 'Option C' },
                                { id: 'optionD-cb', label: 'Option D' },
                              ]}
                            />
                          </FormField>

                          <FormField id="checkboxes-error" label="Checkboxes invalid" errorText="This is an error">
                            <FormField.CheckboxGroup
                              invalid={true}
                              options={[
                                { id: 'optionA-cb-error', label: 'Option A' },
                                { id: 'optionB-cb-error', label: 'Option B' },
                                { id: 'optionC-cb-error', label: 'Option C' },
                                { id: 'optionD-cb-error', label: 'Option D' },
                              ]}
                            />
                          </FormField>

                          <FormField
                            id="checkboxes-warning"
                            label="Checkboxes with a warning"
                            warningText="This is a warning"
                          >
                            <FormField.CheckboxGroup
                              options={[
                                { id: 'optionA-cb-warning', label: 'Option A' },
                                { id: 'optionB-cb-warning', label: 'Option B' },
                                { id: 'optionC-cb-warning', label: 'Option C' },
                                { id: 'optionD-cb-warning', label: 'Option D' },
                              ]}
                            />
                          </FormField>

                          <FormField id="select" label="Select">
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
                          <FormField id="file" label="File">
                            <FormField.FileInput />
                          </FormField>

                          <FormField id="date" label="Date">
                            <FormField.Date />
                          </FormField>

                          <FormField id="time" label="Time">
                            <FormField.Text type="time" />
                          </FormField>
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
