import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { Table } from './src/template';

const meta: Meta<typeof Table> = {
  title: 'Componenten/Table',
  component: Table,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'table',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = { args: defaultArgs, name: 'Table' };
