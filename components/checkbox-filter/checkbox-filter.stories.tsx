import type { Meta, StoryObj } from '@storybook/react';
import { CheckBoxFilter, ICheckboxFilter } from './src/template';

const defaultArgs: ICheckboxFilter = {
  label: 'Subsidies',
  options: [
    { id: 'Agro en visserij', label: 'Agro en visserij' },
    { id: 'Biotechnologie', label: 'Biotechnologie' },
    {
      id: 'Bosbouw en hout(bewerkings)industrie',
      label: 'Bosbouw en hout(bewerkings)industrie',
    },
    { id: 'Bouw en infrastructuur', label: 'Bouw en infrastructuur' },
    { id: 'Chemie en kunststoffen', label: 'Chemie en kunststoffen' },
    { id: 'Chemische industrie', label: 'Chemische industrie' },
    {
      id: 'Consumentengoederen en detailhandel',
      label: 'Consumentengoederen en detailhandel',
    },
    { id: 'Creatieve industrie', label: 'Creatieve industrie' },
    { id: 'Dienstensector', label: 'Dienstensector' },
    { id: 'Elektronica-industrie', label: 'Elektronica-industrie' },
    { id: 'Energiesector', label: 'Energiesector' },
  ],
};

const meta: Meta<typeof CheckBoxFilter> = {
  title: 'Componenten/Checkbox Filter',
  component: CheckBoxFilter,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'data-list',
    },
  },
};
export default meta;

type Story = StoryObj<typeof CheckBoxFilter>;

export const Default: Story = { args: defaultArgs, name: 'Checkbox Filter' };
