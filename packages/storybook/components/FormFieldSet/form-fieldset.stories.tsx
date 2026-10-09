import { Fieldset, FormField } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Fieldset',
  component: Fieldset,
  argTypes: {
    legend: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
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
      link: 'form-fieldset',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=9151-320&embed-host=share',
    },
  },
} satisfies Meta<typeof Fieldset>;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  name: 'Fieldset',
  args: {
    legend: 'Fieldset legend',
    disabled: false,
  },
  render: (args) => (
    <Fieldset {...args}>
      <FormField id="fieldA" label="Field">
        <FormField.Text type="text" sizeInput="lg" />
      </FormField>
      <FormField
        id="fieldB"
        label="Field met helper tekst"
        helperText="Deze helpertekst kan gebruikt worden voor instructies"
      >
        <FormField.Text type="text" sizeInput="lg" />
      </FormField>
      <FormField id="fieldC" label="Field met waarschuwing" warningText="Dit is een waarschuwing">
        <FormField.Text type="text" sizeInput="lg" />
      </FormField>
      <FormField id="fieldD" label="Field met foutmelding" errorText="Dit is een foutmelding">
        <FormField.Text type="text" sizeInput="lg" />
      </FormField>
    </Fieldset>
  ),
};
