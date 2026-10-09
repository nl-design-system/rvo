import { ActionGroup } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Action group',
  component: ActionGroup,
  argTypes: {
    buttonsLeft: {},
    buttonsRight: {},
    fullWidth: {
      type: {
        name: 'boolean',
        required: false,
      },
    },
    position: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'action-group',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=4207-18737&embed-host=share',
    },
  },
} satisfies Meta<typeof ActionGroup>;
type Story = StoryObj<typeof ActionGroup>;

const defaultButtonsLeft = [
  {
    kind: 'primary' as const,
    size: 'md' as const,
    label: 'Primary action',
  },
];

const defaultButtonsRight = [
  {
    kind: 'secondary' as const,
    size: 'md' as const,
    label: 'Secondary action',
  },
];

export const Default: Story = {
  args: {
    buttonsLeft: defaultButtonsLeft,
    buttonsRight: defaultButtonsRight,
    position: 'left',
  },
  name: 'Action group',
};
