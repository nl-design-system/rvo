import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { Accordion, argTypes } from './template';

const meta: Meta<typeof Accordion> = {
  title: 'Componenten/Accordion',
  component: Accordion,
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

type Story = StoryObj<typeof Accordion>;

export const Default: Story = { args: defaultArgs, name: 'Accordion' };
