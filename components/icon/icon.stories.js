// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Icon as IconComponent } from './template';

export default {
  title: 'Componenten/Icon/Icon',
  component: IconComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'icon',
    },
  },
};

export const Icon = {
  render: IconComponent.bind({}),
  name: 'Icon',
  args: defaultArgs,
};
