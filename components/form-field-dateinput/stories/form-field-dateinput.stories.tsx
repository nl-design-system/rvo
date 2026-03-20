import { DateInputField } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-field-dateinput/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { argTypes } from './argTypes';

export default {
  title: 'Componenten/Date input field',
  component: DateInputField,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-dateinput',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=5909-269&embed-host=share',
    },
  },
} satisfies Meta<typeof DateInputField>;
type Story = StoryObj<typeof DateInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper date' }, name: 'Date input field' };
