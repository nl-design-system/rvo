// import changeLog from './CHANGELOG.md';
import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { AccordionItem, argTypes } from './template';

const meta: Meta<typeof AccordionItem> = {
  title: 'Componenten/Accordion/Accordion item',
  component: AccordionItem,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'accordion',
    },
  },
};
export default meta;

type Story = StoryObj<typeof AccordionItem>;

export const Default: Story = { args: defaultArgs, name: 'Accordion item' };
