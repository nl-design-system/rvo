// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Link as LinkComponent } from './template';

export default {
  title: 'Componenten/Link',
  component: LinkComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'link',
    },
  },
};

export const Link = {
  render: LinkComponent.bind({}),
  name: 'Link',
  args: defaultArgs,
};
