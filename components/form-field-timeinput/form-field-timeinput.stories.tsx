import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { TimeInputField } from './src/template';

const meta: Meta<typeof TimeInputField> = {
  title: 'Componenten/Time input field',
  component: TimeInputField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-timeinput',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-2196&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TimeInputField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper time' }, name: 'Time input field' };
