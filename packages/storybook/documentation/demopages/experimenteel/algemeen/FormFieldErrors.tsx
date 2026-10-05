import {
  ActionGroup,
  Button,
  FormField,
  Fieldset,
  Footer,
  Header,
  Heading,
  LayoutFlow,
  Link,
  MenuBar,
} from '@nl-rvo/component-library-react';
import { defaultFooterItems } from '../../common/defaultFooterItems';
import { defaultSecondaryFooterItems } from '../../common/defaultSecondaryFooterItems';

const FormFieldErrors = () => {
  return (
    <div className="rvo-demo-page">
      <style>{`
        /* Custom CSS for experimental form field errors */
        .rvo-form-field:has(.rvo-form-feedback--error) {
          border-left: 3px solid var(--rvo-color-rood);
          padding-left: var(--rvo-space-md);
        }
        
        /* Ensure all content within the field respects the border */
        .rvo-form-field:has(.rvo-form-feedback--error) .rvo-form-field__label {
          margin-left: 0;
        }
        
        /* Remove the double border from radio button and checkbox groups */
        .rvo-form-field:has(.rvo-form-feedback--error) .rvo-radio-button__group--error,
        .rvo-form-field:has(.rvo-form-feedback--error) .rvo-checkbox__group--error {
          border-left: none;
          padding-inline-start: 0;
        }
      `}</style>
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
                    <Heading type="h1">Form Field Errors</Heading>
                    <p className="rvo-text--lg">
                      <span className="rvo-text--bold">Experimental demo page</span>. This form demonstrates radio
                      button and checkbox fields with error states.
                    </p>
                  </div>
                  <form>
                    <LayoutFlow>
                      <div>
                        <Fieldset legend="Form fields with errors">
                          <FormField
                            label="Radio buttons with error"
                            errorText="Please select one of the options"
                          >
                            <FormField.RadioButtonGroup 
                              invalid={true}
                              options={[
                                { id: 'radio-optionA', label: 'Option A' },
                                { id: 'radio-optionB', label: 'Option B' },
                                { id: 'radio-optionC', label: 'Option C' },
                                { id: 'radio-optionD', label: 'Option D' },
                              ]}
                            />
                          </FormField>
                          <FormField
                            label="Checkboxes with error"
                            errorText="Please select at least one option"
                          >
                            <FormField.CheckboxGroup 
                              invalid={true}
                              options={[
                                { id: 'checkbox-optionA', label: 'Option A' },
                                { id: 'checkbox-optionB', label: 'Option B' },
                                { id: 'checkbox-optionC', label: 'Option C' },
                                { id: 'checkbox-optionD', label: 'Option D' },
                              ]}
                            />
                          </FormField>
                        </Fieldset>
                      </div>
                      <ActionGroup>
                        <Button kind="primary" size="md" busy={false} disabled={false} label={''}>
                          Submit
                        </Button>
                        <Button kind="secondary" size="md" busy={false} disabled={false} label={''}>
                          Cancel
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

export default FormFieldErrors;
