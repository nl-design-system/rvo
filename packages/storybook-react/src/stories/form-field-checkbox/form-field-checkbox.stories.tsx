import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { CheckboxField } from './src/template';

const meta: Meta<typeof CheckboxField> = {
  title: 'Componenten/Checkbox field',
  component: CheckboxField,
  args: defaultArgs,
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
};
export default meta;

type Story = StoryObj<typeof CheckboxField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Checkbox field' };
