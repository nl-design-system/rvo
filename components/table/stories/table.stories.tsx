import { Table } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/table/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Table',
  component: Table,
  args: defaultArgs,
  argTypes,
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
} satisfies Meta<typeof Table>;
type Story = StoryObj<typeof Table>;

export const Default: Story = { args: defaultArgs, name: 'Table' };
