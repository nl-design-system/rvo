import '../common/style.scss';
import { Fieldset, FormField, Heading1, Textbox } from '@utrecht/component-library-react';
import clsx from 'clsx';

const Demo = () => {
  return (
    <div className={'basiselementen-demo-page'}>
      <Heading1>Fieldset Grid Test Demo</Heading1>
      <form className="basiselementen-layout-form">
        <Fieldset className={clsx('utrecht-form-fieldset--grid')}>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox></Textbox>
          </FormField>

          <FormField className={'utrecht-form-field--sm'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <Textbox></Textbox>
          </FormField>

          <FormField className={'utrecht-form-field--quarter'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--quarter'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--quarter'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--quarter'}>
            <Textbox></Textbox>
          </FormField>

          <FormField className={'utrecht-form-field--md'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--md'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--md'}>
            <Textbox></Textbox>
          </FormField>

          <FormField className={'utrecht-form-field--half'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--half'}>
            <Textbox></Textbox>
          </FormField>

          <FormField className={'utrecht-form-field--lg'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xl'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--full-1'}>
            <Textbox></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--full'}>
            <Textbox></Textbox>
          </FormField>
        </Fieldset>
      </form>
    </div>
  );
};

export default Demo;
