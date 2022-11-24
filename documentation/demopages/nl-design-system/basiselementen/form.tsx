import { RadioButtonField } from '@nl-rvo/components/form-field-radio-button/css/template';
import '../common/style.scss';
import {
  Button,
  ButtonGroup,
  Fieldset,
  FormField,
  FormLabel,
  Heading1,
  Textbox,
} from '@utrecht/component-library-react';

const Form = () => {
  return (
    <div className="basiselementen-demo-page">
      <Heading1>Gegevens zonnepanelen invullen</Heading1>
      <form className="basiselementen-layout-form">
        <Fieldset className="basiselementen-layout-form__fieldset">
          <FormField className={'basiselementen-layout-form__field'}>
            <FormLabel htmlFor={'realname'}>Uw naam</FormLabel>
            <Textbox id={'realname'}></Textbox>
          </FormField>

          <RadioButtonField
            name="radio-buttons"
            label="Staat uw naam op de energierekening?"
            options={[
              { id: 'optionA', label: 'Ja' },
              { id: 'optionB', label: 'Nee' },
            ]}
          ></RadioButtonField>
        </Fieldset>
        <Fieldset className="basiselementen-layout-form__fieldset">
          <FormField className={'basiselementen-layout-form__field'}>
            <FormLabel htmlFor={'billingname'}>Uw naam</FormLabel>
            <Textbox id={'billingname'}></Textbox>
          </FormField>

          <RadioButtonField
            name="radio-buttons"
            label="Staat uw naam op de factuur van de zonnepanelen?"
            options={[
              { id: 'optionA', label: 'Ja' },
              { id: 'optionB', label: 'Nee' },
            ]}
          ></RadioButtonField>
        </Fieldset>
        <Fieldset className="basiselementen-layout-form__fieldset">
          <FormField>
            <h3 className={'utrecht-form-label'}>Factuurdatum</h3>
            <div className={'utrecht-form-field-description'}>
              Vul de datum in die op de factuur van de zonnepanelen staat.
            </div>
          </FormField>
          <FormField
            className={
              'basiselementen-layout-form__field basiselementen-layout-form__field--xs basiselementen-layout-form__field--collapse'
            }
          >
            <FormLabel htmlFor={'day'}>Dag</FormLabel>
            <Textbox id={'day'}></Textbox>
          </FormField>
          <FormField
            className={
              'basiselementen-layout-form__field basiselementen-layout-form__field--xs basiselementen-layout-form__field--collapse'
            }
          >
            <FormLabel htmlFor={'month'}>Maand</FormLabel>
            <Textbox id={'month'}></Textbox>
          </FormField>
          <FormField
            className={
              'basiselementen-layout-form__field basiselementen-layout-form__field--sm basiselementen-layout-form__field--collapse'
            }
          >
            <FormLabel htmlFor={'year'}>Jaar</FormLabel>
            <Textbox id={'year'}></Textbox>
          </FormField>
        </Fieldset>
        <Fieldset className="basiselementen-layout-form__fieldset">
          <FormField>
            <div className={'utrecht-form-label'}>Adres zonnepanelen</div>
            <div className={'utrecht-form-field-description'}>
              Vul het adres in waar de zonnepanelen zijn geplaatst.
            </div>
          </FormField>
          <FormField className={'basiselementen-layout-form__field basiselementen-layout-form__field--xl'}>
            <FormLabel htmlFor={'street'}>Straatnaam</FormLabel>
            <Textbox id={'street'}></Textbox>
          </FormField>
          <FormField className={'basiselementen-layout-form__field basiselementen-layout-form__field--xs'}>
            <FormLabel htmlFor={'housenumber'}>Huisnummer</FormLabel>
            <Textbox id={'housenumber'}></Textbox>
          </FormField>
          <FormField className={'basiselementen-layout-form__field basiselementen-layout-form__field--xs'}>
            <FormLabel htmlFor={'suffix'}>Toevoeging</FormLabel>
            <Textbox id={'suffix'}></Textbox>
          </FormField>
          <FormField className={'basiselementen-layout-form__field basiselementen-layout-form__field--sm'}>
            <FormLabel htmlFor={'postcode'}>Postcode</FormLabel>
            <Textbox id={'postcode'}></Textbox>
          </FormField>
          <FormField className={'basiselementen-layout-form__field basiselementen-layout-form__field--xl'}>
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
