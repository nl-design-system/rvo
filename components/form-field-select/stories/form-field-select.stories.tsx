import { SelectField } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-field-select/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Select field',
  component: SelectField,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-select',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=393-9535&embed-host=share',
    },
  },
} satisfies Meta<typeof SelectField>;
type Story = StoryObj<typeof SelectField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Select field' };
