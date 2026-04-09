import { FileInputField } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-field-fileinput/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/File input field',
  component: FileInputField,
  args: defaultArgs,
  argTypes,
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
} satisfies Meta<typeof FileInputField>;
type Story = StoryObj<typeof FileInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'File input field' };
