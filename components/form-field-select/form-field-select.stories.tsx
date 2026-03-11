import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from './src/defaultArgs';
import { SelectField } from './src/template';

const meta: Meta<typeof SelectField> = {
  title: 'Componenten/Select field',
  component: SelectField,
  args: defaultArgs,
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
};
export default meta;

type Story = StoryObj<typeof SelectField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Select field' };
