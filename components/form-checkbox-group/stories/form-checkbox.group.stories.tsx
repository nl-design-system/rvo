import { CheckboxGroup } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-checkbox-group/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Componenten/Checkbox group',
  component: CheckboxGroup,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-checkbox-group',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-6161&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = { args: defaultArgs, name: 'Checkbox group' };
