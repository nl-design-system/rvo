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
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--xs'}>
            <Textbox placeholder={'xs'}></Textbox>
          </FormField>

          <FormField className={clsx('utrecht-form-field--sm', 'utrecht-form-field--start')}>
            <Textbox placeholder={'sm'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <Textbox placeholder={'sm'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <Textbox placeholder={'sm'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <Textbox placeholder={'sm'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <Textbox placeholder={'sm'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--sm'}>
            <Textbox placeholder={'sm'}></Textbox>
          </FormField>

          <FormField className={clsx('utrecht-form-field--md', 'utrecht-form-field--start')}>
            <Textbox placeholder={'md'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--md'}>
            <Textbox placeholder={'md'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--md'}>
            <Textbox placeholder={'md'}></Textbox>
          </FormField>

          <FormField className={clsx('utrecht-form-field--start', 'utrecht-form-field--lg')}>
            <Textbox placeholder={'lg'}></Textbox>
          </FormField>
          <FormField className={clsx('utrecht-form-field--start', 'utrecht-form-field--xl')}>
            <Textbox placeholder={'xl'}></Textbox>
          </FormField>
          <FormField className={clsx('utrecht-form-field--full-1')}>
            <Textbox placeholder={'full-1'}></Textbox>
          </FormField>

          <FormField className={clsx('utrecht-form-field--start', 'utrecht-form-field--quarter')}>
            <Textbox placeholder={'quarter'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--quarter'}>
            <Textbox placeholder={'quarter'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--quarter'}>
            <Textbox placeholder={'quarter'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--quarter'}>
            <Textbox placeholder={'quarter'}></Textbox>
          </FormField>

          <FormField className={clsx('utrecht-form-field--start', 'utrecht-form-field--third')}>
            <Textbox placeholder={'third'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--third'}>
            <Textbox placeholder={'third'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--third'}>
            <Textbox placeholder={'third'}></Textbox>
          </FormField>
          <FormField className={clsx('utrecht-form-field--half')}>
            <Textbox placeholder={'half'}></Textbox>
          </FormField>
          <FormField className={'utrecht-form-field--half'}>
            <Textbox placeholder={'half'}></Textbox>
          </FormField>

          <FormField className={clsx('utrecht-form-field--full')}>
            <Textbox placeholder={'full'}></Textbox>
          </FormField>
        </Fieldset>
      </form>
    </div>
  );
};

export default Demo;
