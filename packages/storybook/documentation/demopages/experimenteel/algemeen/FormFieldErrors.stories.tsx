import type { Meta, StoryObj } from '@storybook/react-webpack5';
import FormFieldErrors from './FormFieldErrors';

const meta: Meta<typeof FormFieldErrors> = {
  title: "Pagina's/Experimenteel/Algemeen/Form Field Errors",
  component: FormFieldErrors,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FormFieldErrors>;

export const Default: Story = { name: 'Form Field Errors' };
