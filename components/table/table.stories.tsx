import type { Meta, StoryObj } from '@storybook/react-webpack5';
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
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-7705&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = { args: defaultArgs, name: 'Table' };
