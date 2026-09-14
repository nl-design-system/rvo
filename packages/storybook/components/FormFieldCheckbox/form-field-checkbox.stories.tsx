import { CheckboxField } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Checkbox field',
  component: CheckboxField,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-checkbox',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=4231-18757&embed-host=share',
    },
  },
} satisfies Meta<typeof CheckboxField>;
type Story = StoryObj<typeof CheckboxField>;

export const Default: Story = { args: { helperText: 'Helper text' }, name: 'Checkbox field' };
