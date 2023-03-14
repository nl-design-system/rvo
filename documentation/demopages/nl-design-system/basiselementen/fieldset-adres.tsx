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
          invalid={true}
        >
          <FieldsetLegend className={'utrecht-form-fieldset__legend--label'}>Afleveradress</FieldsetLegend>
          <FormFieldDescription id={'billingaddressdescription'}>
            Vul het adres in waar uw bestelling wordt afgeleverd.
          </FormFieldDescription>
          <FormField className={'utrecht-form-field--street'}>
            <FormLabel htmlFor={'street'}>Straatnaam</FormLabel>
            <Textbox id={'street'} placeholder={'Vriezenveensewijkseachtersteeg'} invalid={true}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--street-number'}>
            <FormLabel htmlFor={'housenumber'}>Huisnummer</FormLabel>
            <Textbox id={'housenumber'} placeholder={'1024'} invalid={true}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--addition'}>
            <FormLabel htmlFor={'suffix'}>Toevoeging</FormLabel>
            <Textbox id={'suffix'} placeholder={'a'} invalid={true}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--postcode utrecht-form-field--start'}>
            <FormLabel htmlFor={'postcode'}>Postcode</FormLabel>
            <Textbox id={'postcode'} placeholder={'0000 AD'} value={'1ooo ad'} invalid={true}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--city'}>
            <FormLabel htmlFor={'city'}>Plaatsnaam</FormLabel>
            <Textbox id={'city'} placeholder={'Westerhaar-Vriezenveensewijk'} invalid={true}></Textbox>
          </FormField>
          <FormFieldDescription invalid={true} id={'invalidbillingdate'}>
            Vul een geldige adres in.
          </FormFieldDescription>
        </Fieldset>
      </form>
    </div>
  );
};

export default FieldsetAdres;