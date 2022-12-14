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
          <FormField className={'utrecht-form-field--street'}>
            <FormLabel htmlFor={'street'}>Straatnaam</FormLabel>
            <Textbox id={'street'} placeholder={'Vriezenveensewijkseachtersteeg'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--street-number'}>
            <FormLabel htmlFor={'housenumber'}>Huis&shy;nummer</FormLabel>
            <Textbox id={'housenumber'} placeholder={'1024'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--addition'}>
            <FormLabel htmlFor={'suffix'}>Toe&shy;voeging</FormLabel>
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
        </Fieldset>
      </form>
    </div>
  );
};

export default FieldsetAdres;
