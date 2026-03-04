import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-field-radio-button/defaultArgs';
import { RadioButtonField } from '@nl-rvo/component-library-react';

const meta: Meta<typeof RadioButtonField> = {
  title: 'Componenten/Radio button field',
  component: RadioButtonField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-radio-button',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=451-15347&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButtonField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Radio button field' };
