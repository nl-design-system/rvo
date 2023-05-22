// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Footer as FooterComponent } from './template';

export default {
  title: 'Componenten/Footer/Footer',
  component: FooterComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'footer',
    },
  },
};

export const Footer = {
  render: FooterComponent.bind({}),
  name: 'Footer',
  args: defaultArgs,
};
