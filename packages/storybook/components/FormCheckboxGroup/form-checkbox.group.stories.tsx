import { CheckboxGroup } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Checkbox group',
  component: CheckboxGroup,
  argTypes: {
    invalid: { control: 'boolean' },
    onChange: {
      table: {
        disable: true,
      },
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
      link: 'form-checkbox-group',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-6161&embed-host=share',
    },
  },
} satisfies Meta<typeof CheckboxGroup>;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = { name: 'Checkbox group' };
