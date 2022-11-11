import { Button } from '@nl-rvo/components/button/css/template';
import { RadioButtonField } from '@nl-rvo/components/form-field/css/radiobutton-field.template';
import { TextInputField } from '@nl-rvo/components/form-field/css/textinput-field.template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import '../common/style.scss';
import { ButtonGroup, Fieldset, Heading1 } from '@utrecht/component-library-react';

const Form = () => {
  return (
    <div className="basiselementen-demo-page">
      <Heading1>Gegevens zonnepanelen invullen</Heading1>
      <form className="rvo-layout-spacer rvo-layout-spacer--xs">
        <Fieldset>
          <TextInputField readOnly={true} labelText={'Uw naam'} />
          <RadioButtonField
            name="radio-buttons"
            labelText="Staat uw naam op de energierekening?"
            options={[
              { id: 'optionA', labelText: 'Ja' },
              { id: 'optionB', labelText: 'Nee' },
            ]}
          ></RadioButtonField>
        </Fieldset>
        <Fieldset>
          <TextInputField readOnly={true} labelText={'Uw naam'} />
          <RadioButtonField
            name="radio-buttons"
            labelText="Staat uw naam op de factuur van de zonnepanelen?"
            options={[
              { id: 'optionA', labelText: 'Ja' },
              { id: 'optionB', labelText: 'Nee' },
            ]}
          ></RadioButtonField>
        </Fieldset>
        <Fieldset>
          <div className={'utrecht-form-label'}>Factuurdatum</div>
          <div className={'utrecht-form-field-description'}>
            Vul de datum in die op de factuur van de zonnepanelen staat.
          </div>
          <LayoutColumnRow size="sm" row={true}>
            <TextInputField size={'sm'} labelText="Dag" />
            <TextInputField size={'sm'} labelText="Maand" />
            <TextInputField size={'sm'} labelText="Jaar" />
          </LayoutColumnRow>
        </Fieldset>
        <Fieldset>
          <div className={'utrecht-form-label'}>Adres zonnepanelen</div>
          <div className={'utrecht-form-field-description'}>Vul het adres in waar de zonnepanelen zijn geplaatst.</div>
          <LayoutColumnRow size="sm" row={true}>
            <TextInputField size={'md'} labelText="Straatnaam" />
            <TextInputField size={'sm'} labelText="Huisnummer" />
            <TextInputField size={'sm'} labelText="Toevoeging (niet verplicht)" />
          </LayoutColumnRow>
          <LayoutColumnRow size="sm" row={true}>
            <TextInputField size={'sm'} labelText="Postcode" />
            <TextInputField size={'md'} labelText="Plaatsnaam" />
          </LayoutColumnRow>
        </Fieldset>
        <ButtonGroup className="utrecht-button-group--horizontal">
          <Button
            kind="secondary"
            size="md"
            active={false}
            busy={false}
            focus={false}
            focusVisible={false}
            disabled={false}
            hover={false}
            showIcon="yes"
          >
            Vorige
          </Button>
          <Button
            kind="primary"
            size="md"
            active={false}
            busy={false}
            focus={false}
            focusVisible={false}
            disabled={false}
            hover={false}
            showIcon="yes"
          >
            Volgende
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default Form;
