import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './defaultArgs';
import { LayoutColumnRow } from './template';

const meta: Meta<typeof LayoutColumnRow> = {
  title: 'Componenten/Layout column & row',
  component: LayoutColumnRow,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docusaurus: {
      link: 'layout-column-row',
    },
  },
};
export default meta;

type Story = StoryObj<typeof LayoutColumnRow>;

export const Default: Story = { args: defaultArgs, name: 'Componenten/Layout column & row' };
