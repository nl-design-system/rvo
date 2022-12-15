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

const FieldsetDate = () => {
  return (
    <div className={'basiselementen-demo-page'}>
      <Heading1>Fieldset Date</Heading1>
      <form className="basiselementen-layout-form">
        <Fieldset
          aria-describedby={'billingdatedescription'}
          className={clsx(
            'utrecht-form-fieldset--subtle',
            'utrecht-form-fieldset--date',
            'utrecht-form-fieldset--grid',
          )}
          invalid={true}
        >
          <FieldsetLegend className={'utrecht-form-fieldset__legend--label'}>Geboortedatum</FieldsetLegend>
          <FormFieldDescription id={'billingdatedescription'}>Vul uw geboortedatum in.</FormFieldDescription>
          <FormField>
            <FormLabel htmlFor={'day'}>Dag</FormLabel>
            <Textbox id={'day'} invalid={true} value={'12'}></Textbox>
          </FormField>
          <FormField>
            <FormLabel htmlFor={'month'}>Maand</FormLabel>
            <Textbox id={'month'} invalid={true} value={'31'}></Textbox>
          </FormField>
          <FormField>
            <FormLabel htmlFor={'year'}>Jaar</FormLabel>
            <Textbox id={'year'} invalid={true} value={'2023'}></Textbox>
          </FormField>
          <FormFieldDescription invalid={true} id={'invalidbillingdate'}>
            Vul een geldige datum in.
          </FormFieldDescription>
        </Fieldset>
      </form>
    </div>
  );
};

export default FieldsetDate;
