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
  args: {
    id: 'form-field-checkbox',
    label: 'Checkbox',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Checkbox label="Checkbox" />
    </FormField>
  ),
};

export const CheckboxGroup: Story = {
  args: {
    id: 'form-field-checkbox-group',
    label: 'Checkbox Group',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.CheckboxGroup
        options={[
          { id: 'optionA', label: 'Option A' },
          { id: 'optionB', label: 'Option B' },
          { id: 'optionC', label: 'Option C' },
          { id: 'optionD', label: 'Option D' },
        ]}
      />
    </FormField>
  ),
};

export const FileInput: Story = {
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
  args: {
    id: 'form-field-radio-button',
    label: 'Radio Button',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.RadioButton label="Radio button" />
    </FormField>
  ),
};

export const RadioButtonGroup: Story = {
  args: {
    id: 'form-field-radio-button-group',
    label: 'Radio Button Group',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.RadioButtonGroup
        options={[
          { id: 'optionA', label: 'Option A' },
          { id: 'optionB', label: 'Option B' },
          { id: 'optionC', label: 'Option C' },
          { id: 'optionD', label: 'Option D' },
        ]}
      />
    </FormField>
  ),
};

export const Select: Story = {
  args: {
    id: 'form-field-select',
    label: 'Select',
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Select
        options={[
          { value: '1', label: 'Option #1' },
          { value: '2', label: 'Option #2' },
          { value: '3', label: 'Option #3' },
        ]}
      />
    </FormField>
  ),
};

export const TextArea: Story = {
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
