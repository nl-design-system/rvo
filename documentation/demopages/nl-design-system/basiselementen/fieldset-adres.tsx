import '../common/style.scss';
import {
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Textbox,
} from '@utrecht/component-library-react';
import clsx from 'clsx';

const FieldsetAdres = () => {
  return (
    <div className={'basiselementen-demo-page'}>
      <Heading1>Fieldset Adres</Heading1>
      <form className="basiselementen-layout-form">
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
          <FormField className={'utrecht-form-field--md utrecht-form-field--start'}>
            <FormLabel htmlFor={'postcode'}>Postcode</FormLabel>
            <Textbox id={'postcode'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--lg'}>
            <FormLabel htmlFor={'city'}>Plaatsnaam</FormLabel>
            <Textbox id={'city'}></Textbox>
          </FormField>
        </Fieldset>
      </form>
    </div>
  );
};

export default FieldsetAdres;
