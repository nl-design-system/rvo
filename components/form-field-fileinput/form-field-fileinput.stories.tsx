import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { FileInputField } from './src/template';

const meta: Meta<typeof FileInputField> = {
  title: 'Componenten/File input field',
  component: FileInputField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-fileinput',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=4231-19443&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FileInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'File input field' };
