import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { TextareaField } from './src/template';

const meta: Meta<typeof TextareaField> = {
  title: 'Componenten/Textarea field',
  component: TextareaField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-textarea',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=5909-2331&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  args: { ...defaultArgs, helperText: 'Helper text', maxLength: 300, maxLengthIndicator: true },
  name: 'Textarea field',
};
