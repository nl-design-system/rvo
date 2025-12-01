import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { TextInputField } from './src/template';

const meta: Meta<typeof TextInputField> = {
  title: 'Componenten/Text input field',
  component: TextInputField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-textinput',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=436-26520&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Text input field' };
