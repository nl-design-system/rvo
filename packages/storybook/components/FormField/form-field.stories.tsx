import { FormField } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Formfield',
  component: FormField,
  argTypes: {
    label: {
      control: 'text',
    },
    labelSize: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
      table: {
        type: { summary: "'sm' | 'md'" },
        defaultValue: { summary: "'md'" },
      },
    },
    labelType: {
      options: ['default', 'optional', 'required'],
      control: { type: 'radio' },
      table: {
        type: { summary: "'default' | 'optional' | 'required'" },
        defaultValue: { summary: "'default'" },
      },
    },
    helperText: {
      control: 'text',
    },
    warningText: {
      control: 'text',
    },
    errorText: {
      control: 'text',
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=9151-320&embed-host=share',
    },
  },
} satisfies Meta<typeof FormField>;

type Story = StoryObj<typeof FormField>;

export const TextInput: Story = {
  name: 'Text Input',
  args: {
    id: 'form-field-text-input',
    label: 'Text Input',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Text type="text" sizeInput="md" />
    </FormField>
  ),
};

export const TimeInput: Story = {
  name: 'Time Input',
  args: {
    id: 'form-field-time-input',
    label: 'Time Input',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Text type="time" sizeInput="md" />
    </FormField>
  ),
};

export const DateInput: Story = {
  name: 'Date Input',
  args: {
    id: 'form-field-date-input',
    label: 'Date Input',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Date sizeInput="md" />
    </FormField>
  ),
};

export const Checkbox: Story = {
  name: 'Checkbox',
  args: {
    id: 'form-field-checkbox',
    label: 'Checkbox',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Checkbox label="Ja, vink ik aan" />
    </FormField>
  ),
};

export const CheckboxGroup: Story = {
  name: 'Checkbox Group',
  args: {
    id: 'form-field-checkbox-group',
    label: 'Checkbox Group',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.CheckboxGroup options={[{ label: 'Optie 1' }, { label: 'Optie 2' }, { label: 'Optie 3' }]} />
    </FormField>
  ),
};

export const FileInput: Story = {
  name: 'File Input',
  args: {
    id: 'form-field-file-input',
    label: 'File Input',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.FileInput />
    </FormField>
  ),
};

export const RadioButton: Story = {
  name: 'Radio Button',
  args: {
    id: 'form-field-radio-button',
    label: 'Radio Button',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.RadioButton label="Ja, vink ik aan" />
    </FormField>
  ),
};

export const RadioButtonGroup: Story = {
  name: 'Radio Button Group',
  args: {
    id: 'form-field-radio-button-group',
    label: 'Radio Button Group',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.RadioButtonGroup options={[{ label: 'Optie 1' }, { label: 'Optie 2' }, { label: 'Optie 3' }]} />
    </FormField>
  ),
};

export const Select: Story = {
  name: 'Select',
  args: {
    id: 'form-field-select',
    label: 'Select',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Select
        options={[
          { value: '1', label: 'Optie 1' },
          { value: '2', label: 'Optie 2' },
          { value: '3', label: 'Optie 3' },
        ]}
      />
    </FormField>
  ),
};

export const TextArea: Story = {
  name: 'Text Area',
  args: {
    id: 'form-field-text-area',
    label: 'Text Area',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.TextArea />
    </FormField>
  ),
};
