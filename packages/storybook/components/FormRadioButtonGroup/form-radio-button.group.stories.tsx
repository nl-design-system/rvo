import { RadioButtonGroup } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Radio button group',
  component: RadioButtonGroup,
  argTypes: {
    name: { control: 'text' },
    invalid: { control: 'boolean' },
    currentSelection: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    onChange: {
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
      link: 'form-radio-button-group',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=450-11252&embed-host=share',
    },
  },
} satisfies Meta<typeof RadioButtonGroup>;
type Story = StoryObj<typeof RadioButtonGroup>;

export const Default: Story = { name: 'Radio button group' };
