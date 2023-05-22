// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Tag as TagComponent } from './template';

export default {
  title: 'Componenten/Tag',
  component: TagComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'tag',
    },
  },
};

export const Tag = {
  render: TagComponent.bind({}),
  name: 'Tag',
  args: defaultArgs,
};
