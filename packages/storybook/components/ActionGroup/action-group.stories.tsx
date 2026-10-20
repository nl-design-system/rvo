import { ActionGroup, IButtonProps } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Action group',
  component: ActionGroup,
  argTypes: {
    buttonsLeft: {
      control: 'object',
    },
    buttonsRight: {
      control: 'object',
    },
    fullWidth: {
      control: 'boolean',
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

const defaultButtonsLeft: IButtonProps[] = [
  {
    kind: 'primary',
    size: 'md',
    children: 'Primary action',
  },
];

const defaultButtonsRight: IButtonProps[] = [
  {
    kind: 'secondary',
    size: 'md',
    children: 'Secondary action',
  },
];

export const Base: Story = {
  args: {
    buttonsLeft: defaultButtonsLeft,
    buttonsRight: defaultButtonsRight,
    fullWidth: false,
    position: 'left',
  },
  name: 'Basis Component',
};
