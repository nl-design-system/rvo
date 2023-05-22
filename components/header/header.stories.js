// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Header as HeaderComponent } from './template';

export default {
  title: 'Componenten/Header/Header',
  component: HeaderComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'header',
    },
  },
};

export const Header = {
  render: HeaderComponent.bind({}),
  name: 'Header',
  args: defaultArgs,
};
