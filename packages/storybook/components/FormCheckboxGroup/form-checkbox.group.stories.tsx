import { CheckboxGroup } from '@nl-rvo/component-library-react';
import type { ICheckboxProps } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Checkbox group',
  component: CheckboxGroup,
  argTypes: {
    invalid: { control: 'boolean' },
    options: { control: 'object' },
    currentSelection: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
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
} satisfies Meta<typeof CheckboxGroup>;
type Story = StoryObj<typeof CheckboxGroup>;

const defaultOptions: ICheckboxProps[] = [
  { id: 'checkbox-group-option-a', label: 'Optie A' },
  { id: 'checkbox-group-option-b', label: 'Optie B', checked: true },
  { id: 'checkbox-group-option-c', label: 'Optie C' },
];

export const Default: Story = {
  args: {
    invalid: false,
    options: defaultOptions,
  },
  name: 'Checkbox group',
};
