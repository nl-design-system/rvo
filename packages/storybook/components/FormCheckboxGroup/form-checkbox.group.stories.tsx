import { CheckboxGroup } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Checkbox group',
  component: CheckboxGroup,
  args: {
    options: [
      {
        id: 'optionA',
        label: 'Option A',
      },
      {
        id: 'optionB',
        label: 'Option B',
      },
      {
        id: 'optionC',
        label: 'Option C',
      },
      {
        id: 'optionD',
        label: 'Option D',
      },
    ],
  },
  argTypes: {
    invalid: { control: 'boolean' },
    options: { control: 'object' },
    currentSelection: {
      table: {
        disable: true,
      },
    },
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

export const Base: Story = { name: 'Basis Component' };
