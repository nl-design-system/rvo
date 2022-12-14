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
import clsx from 'clsx';

const Form = () => {
  return (
    <div className={'basiselementen-demo-page'}>
      <Heading1>Gegevens zonnepanelen invullen</Heading1>
      <form className="basiselementen-layout-form">
        <Fieldset className={'utrecht-form-fieldset--grid'}>
          <Fieldset>
            <FormField>
              <FormLabel htmlFor={'realname'}>Uw naam</FormLabel>
              <Textbox id={'realname'}></Textbox>
            </FormField>
          </Fieldset>
          <Fieldset className={'utrecht-form-fieldset--subtle'}>
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
        </Fieldset>
        <Fieldset className={clsx('utrecht-form-fieldset--subtle', 'utrecht-form-fieldset--grid')}>
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
        <Fieldset className={clsx('utrecht-form-fieldset--subtle', 'utrecht-form-fieldset--grid')}>
          <Fieldset
            aria-describedby={'billingdatedescription'}
            className={clsx('utrecht-form-fieldset--subtle', 'utrecht-form-fieldset--date')}
          >
            <FieldsetLegend className={'utrecht-form-fieldset__legend--label'}>Factuurdatum</FieldsetLegend>
            <FormFieldDescription id={'billingdatedescription'}>
              Vul de datum in die op de factuur van de zonnepanelen staat.
            </FormFieldDescription>
            <FormField>
              <FormLabel htmlFor={'day'}>Dag</FormLabel>
              <Textbox id={'day'} invalid={true}></Textbox>
            </FormField>
            <FormField>
              <FormLabel htmlFor={'month'}>Maand</FormLabel>
              <Textbox id={'month'} invalid={true}></Textbox>
            </FormField>
            <FormField>
              <FormLabel htmlFor={'year'}>Jaar</FormLabel>
              <Textbox id={'year'} invalid={true}></Textbox>
            </FormField>
            <FormFieldDescription invalid={true} id={'invalidbillingdate'}>
              Vul een geldige datum in.
            </FormFieldDescription>
          </Fieldset>
          <Fieldset
            aria-describedby={'billingaddressdescription'}
            className={clsx(
              'utrecht-form-fieldset--subtle',
              'utrecht-form-fieldset--adres',
              'utrecht-form-fieldset--grid',
            )}
          >
            <FieldsetLegend className={'utrecht-form-fieldset__legend--label'}>Afleveradress</FieldsetLegend>
            <FormFieldDescription id={'billingaddressdescription'}>
              Vul het adres in waar uw bestelling wordt afgeleverd.
            </FormFieldDescription>
            <FormField className={'utrecht-form-field--street'}>
              <FormLabel htmlFor={'street'}>Straatnaam</FormLabel>
              <Textbox id={'street'} placeholder={'Vriezenveensewijkseachtersteeg'}></Textbox>
            </FormField>
            <FormField className={'utrecht-form-field--street-number'}>
              <FormLabel htmlFor={'housenumber'}>Huis&shy;num&shy;mer</FormLabel>
              <Textbox id={'housenumber'} placeholder={'1024'}></Textbox>
            </FormField>
            <FormField className={'utrecht-form-field--addition'}>
              <FormLabel htmlFor={'suffix'}>Toe&shy;voeg&shy;ing</FormLabel>
              <Textbox id={'suffix'} placeholder={'a'}></Textbox>
            </FormField>
            <FormField className={'utrecht-form-field--postcode utrecht-form-field--start'}>
              <FormLabel htmlFor={'postcode'}>Postcode</FormLabel>
              <Textbox id={'postcode'} placeholder={'0000 AB'}></Textbox>
            </FormField>
            <FormField className={'utrecht-form-field--city'}>
              <FormLabel htmlFor={'city'}>Plaatsnaam</FormLabel>
              <Textbox id={'city'} placeholder={'Westerhaar-Vriezenveensewijk'}></Textbox>
            </FormField>
          </Fieldset>{' '}
        </Fieldset>
        <ButtonGroup className="utrecht-button-group--horizontal">
          <Button appearance="primary-action-button" busy={false} disabled={false}>
            Volgende
          </Button>
          <Button appearance="secondary-action-button" busy={false} disabled={false}>
            Vorige
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default Form;
