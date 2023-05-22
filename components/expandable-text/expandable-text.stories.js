// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, ExpandableText as ExpandableTextComponent } from './template';

export default {
  title: 'Componenten/Expandable text/Expandable text',
  component: ExpandableTextComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'expandable-text',
    },
  },
};

export const ExpandableText = {
  render: ExpandableTextComponent.bind({}),
  name: 'Expandable text',
  args: defaultArgs,
};
