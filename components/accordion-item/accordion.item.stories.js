// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { AccordionItem, argTypes } from './template';

export default {
  title: 'Componenten/Accordion',
  component: AccordionItem,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'accordion',
    },
  },
};

export const Item = {
  render: AccordionItem.bind({}),
  name: 'Item',
  args: defaultArgs,
};
