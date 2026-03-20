import { CheckboxField } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-field-checkbox/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Checkbox field',
  component: CheckboxField,
  args: defaultArgs,
  argTypes,
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

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Checkbox field' };
