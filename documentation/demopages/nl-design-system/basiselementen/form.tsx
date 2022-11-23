import { RadioButtonField } from '@nl-rvo/components/form-field-radio-button/css/template';
import { TextInputField } from '@nl-rvo/components/form-field-textinput/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import '../common/style.scss';
import { Button, ButtonGroup, Fieldset, Heading1 } from '@utrecht/component-library-react';

const Form = () => {
  return (
    <div className="basiselementen-demo-page">
      <Heading1>Gegevens zonnepanelen invullen</Heading1>
      <form className="rvo-layout-spacer rvo-layout-spacer--xs">
        <Fieldset>
          <TextInputField readOnly={true} label={'Uw naam'} />
          <RadioButtonField
            name="radio-buttons"
            label="Staat uw naam op de energierekening?"
            options={[
              { id: 'optionA', label: 'Ja' },
              { id: 'optionB', label: 'Nee' },
            ]}
          ></RadioButtonField>
        </Fieldset>
        <Fieldset>
          <TextInputField readOnly={true} label={'Uw naam'} />

          <RadioButtonField
            name="radio-buttons"
            label="Staat uw naam op de factuur van de zonnepanelen?"
            options={[
              { id: 'optionA', label: 'Ja' },
              { id: 'optionB', label: 'Nee' },
            ]}
          ></RadioButtonField>
        </Fieldset>
        <Fieldset>
          <div className={'utrecht-form-label'}>Factuurdatum</div>
          <div className={'utrecht-form-field-description'}>
            Vul de datum in die op de factuur van de zonnepanelen staat.
          </div>
          <LayoutColumnRow size="sm" row={true}>
            <TextInputField size={'sm'} label="Dag" />
            <TextInputField size={'sm'} label="Maand" />
            <TextInputField size={'sm'} label="Jaar" />
          </LayoutColumnRow>
        </Fieldset>
        <Fieldset>
          <div className={'utrecht-form-label'}>Adres zonnepanelen</div>
          <div className={'utrecht-form-field-description'}>Vul het adres in waar de zonnepanelen zijn geplaatst.</div>
          <LayoutColumnRow size="sm" row={true}>
            <TextInputField size={'md'} label="Straatnaam" />
            <TextInputField size={'sm'} label="Huisnummer" />
            <TextInputField size={'sm'} label="Toevoeging (niet verplicht)" />
          </LayoutColumnRow>
          <LayoutColumnRow size="sm" row={true}>
            <TextInputField size={'sm'} label="Postcode" />
            <TextInputField size={'md'} label="Plaatsnaam" />
          </LayoutColumnRow>
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
