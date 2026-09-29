import { FormField } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Formfield',
  component: FormField,
  argTypes: {
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-fieldset',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=9151-320&embed-host=share',
    },
  },
} satisfies Meta<typeof FormField>;
type Story = StoryObj<typeof FormField>;

export const TextInput: Story = { name: 'Text Input', render: () => (
    <FormField id='form-field-with-text-input' label="Text Input">
        <FormField.Text type="text" size='lg'></FormField.Text>
    </FormField>
) };

export const Checkbox: Story = { name: 'Checkbox', render: () => (
    <FormField id='form-field-with-text-input' label="Checkbox">     
        <FormField.Checkbox label='Ja, vink ik aan'></FormField.Checkbox>
    </FormField>
) };

export const CheckboxGroup: Story = { name: 'Checkbox Group', render: () => (
    <FormField id='form-field-with-text-input' label="Checkbox">     
        <FormField.CheckboxGroup options={[{label: 'Optie 1'}, {label: 'Optie 2'}, {label: 'Optie 3'}]} />
    </FormField>
) };

export const FileInput: Story = { name: 'File Input', render: () => (
    <FormField id='form-field-with-text-input' label="Checkbox">     
        <FormField.FileInput />
    </FormField>
) };

export const RadioButton: Story = { name: 'Radio Button', render: () => (
    <FormField id='form-field-with-text-input' label="Checkbox">     
        <FormField.RadioButton label='Ja, vink ik aan' />
    </FormField>
) };

export const RadioButtonGroup: Story = { name: 'Radio Button Group', render: () => (
    <FormField id='form-field-with-text-input' label="Checkbox">     
        <FormField.RadioButtonGroup options={[{label: 'Optie 1'}, {label: 'Optie 2'}, {label: 'Optie 3'}]} />
    </FormField>
) };

export const Select: Story = { name: 'Select', render: () => (
    <FormField id='form-field-with-text-input' label="Checkbox">     
        <FormField.Select options={[{value: '1', label: 'Optie 1'}, {value: '2', label: 'Optie 2'}, {value: '3', label: 'Optie 3'}]}></FormField.Select>
    </FormField>
) };

export const TextArea: Story = { name: 'Text Area', render: () => (
    <FormField id='form-field-with-text-input' label="Checkbox">     
        <FormField.TextArea />
    </FormField>
) };
