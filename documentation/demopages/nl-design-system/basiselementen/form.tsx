import '../common/style.scss';
import {
  Button,
  ButtonGroup,
  CustomRadioButton,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Textbox,
} from '@utrecht/component-library-react';

const Form = () => {
  return (
    <div className={'basiselementen-demo-page'}>
      <Heading1>Gegevens zonnepanelen invullen</Heading1>
      <form className="basiselementen-layout-form">
        <Fieldset className="utrecht-form-fieldset--section">
          <FormField>
            <FormLabel htmlFor={'realname'}>Uw naam</FormLabel>
            <Textbox id={'realname'}></Textbox>
          </FormField>
        </Fieldset>
        <Fieldset className={'utrecht-form-fieldset--section'}>
          <FieldsetLegend className={'utrecht-form-fieldset__legend--label'}>
            Staat uw naam op de energierekening
          </FieldsetLegend>
          <FormField className={'utrecht-form-field--xs utrecht-form-field--start'}>
            <FormLabel htmlFor={'realnameA'}>
              <CustomRadioButton name={'hasrealname'} id={'realnameA'} />
              Ja
            </FormLabel>
          </FormField>
          <FormField className={'utrecht-form-field--xs utrecht-form-field--start'}>
            <FormLabel htmlFor={'realnameB'}>
              <CustomRadioButton name={'hasrealname'} id={'realnameB'} />
              Nee
            </FormLabel>
          </FormField>
        </Fieldset>
        <Fieldset className={'utrecht-form-fieldset--subtle utrecht-form-fieldset--section'}>
          <FieldsetLegend className={'utrecht-form-fieldset__legend--label'}>
            Staat uw naam op de factuur van de zonnepanelen
          </FieldsetLegend>
          <FormField className={'utrecht-form-field--xs utrecht-form-field--start'}>
            <FormLabel htmlFor={'billingnameA'}>
              <CustomRadioButton name={'hasbillingname'} id={'billingnameA'} />
              Ja
            </FormLabel>
          </FormField>
          <FormField className={'utrecht-form-field--xs utrecht-form-field--start'}>
            <FormLabel htmlFor={'billingnameB'}>
              <CustomRadioButton name={'hasbillingname'} id={'billingnameB'} />
              Nee
            </FormLabel>
          </FormField>
        </Fieldset>
        <Fieldset className={'utrecht-form-fieldset--subtle utrecht-form-fieldset--section'}>
          <FieldsetLegend className={'utrecht-form-fieldset__legend--label'}>Factuurdatum</FieldsetLegend>
          <FormFieldDescription>Vul de datum in die op de factuur van de zonnepanelen staat.</FormFieldDescription>
          <FormField className={'utrecht-form-field--xs'}>
            <FormLabel htmlFor={'day'}>Dag</FormLabel>
            <Textbox id={'day'} invalid={true}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs '}>
            <FormLabel htmlFor={'month'}>Maand</FormLabel>
            <Textbox id={'month'} invalid={true}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm '}>
            <FormLabel htmlFor={'year'}>Jaar</FormLabel>
            <Textbox id={'year'} invalid={true}></Textbox>
          </FormField>
          <FormFieldDescription invalid={true}>Vul een geldige datum in.</FormFieldDescription>
        </Fieldset>
        <Fieldset className="utrecht-form-fieldset--subtle utrecht-form-fieldset--section">
          <FieldsetLegend className={'utrecht-form-fieldset__legend--label'}>Adres zonnepanelen</FieldsetLegend>
          <FormFieldDescription>Vul het adres in waar de zonnepanelen zijn geplaatst.</FormFieldDescription>
          <FormField className={'utrecht-form-field--lg'}>
            <FormLabel htmlFor={'street'}>Straatnaam</FormLabel>
            <Textbox id={'street'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <FormLabel htmlFor={'housenumber'}>Huisnummer</FormLabel>
            <Textbox id={'housenumber'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <FormLabel htmlFor={'suffix'}>Toevoeging</FormLabel>
            <Textbox id={'suffix'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm utrecht-form-field--start'}>
            <FormLabel htmlFor={'postcode'}>Postcode</FormLabel>
            <Textbox id={'postcode'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xl'}>
            <FormLabel htmlFor={'city'}>Plaatsnaam</FormLabel>
            <Textbox id={'city'}></Textbox>
          </FormField>
        </Fieldset>
        <ButtonGroup className="utrecht-button-group--horizontal">
          <Button appearance="secondary-action-button" busy={false} disabled={false}>
            Vorige
          </Button>
          <Button appearance="primary-action-button" busy={false} disabled={false}>
            Volgende
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default Form;
