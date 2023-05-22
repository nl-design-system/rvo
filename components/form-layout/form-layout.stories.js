// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, FormLayout as FormLayoutComponent } from './template';

export default {
  title: 'Componenten/Layout/Form layout',
  component: FormLayoutComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-layout',
    },
  },
};

export const FormLayout = {
  render: FormLayoutComponent.bind({}),
  name: 'Form layout',
  args: defaultArgs,
};
