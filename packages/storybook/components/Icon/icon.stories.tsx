import { Icon } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { iconColors, iconOptions } from '@nl-rvo/component-library-react/src/components/icon';

export default {
  title: 'Componenten/Icon',
  component: Icon,
  args: {
    icon: 'home',
    size: 'md',
    color: 'hemelblauw',
    ariaLabel: '',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconOptions,
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      control: { type: 'radio' },
    },
    color: {
      options: iconColors,
      control: { type: 'radio' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'icon',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=50-13&embed-host=share',
    },
  },
} satisfies Meta<typeof Icon>;
type Story = StoryObj<typeof Icon>;

export const Base: Story = {};
