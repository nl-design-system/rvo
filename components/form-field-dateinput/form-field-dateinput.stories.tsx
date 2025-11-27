import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { DateInputField } from './src/template';

const meta: Meta<typeof DateInputField> = {
  title: 'Componenten/Date input field',
  component: DateInputField,
  args: defaultArgs,
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
};
export default meta;

type Story = StoryObj<typeof DateInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper date' }, name: 'Date input field' };
