import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckBoxFilter } from './src/template';

const argTypes = {
  label: {
    control: { type: 'string' },
  },
  options: {
    control: { type: 'object' },
  },
  limit: {
    control: { type: 'number' },
  },
  showInputField: {
    control: { type: 'boolean' },
  },
  inputFieldPlaceholder: {
    control: { type: 'string' },
  },
  showMoreText: {
    control: { type: 'string' },
  },
  showLessText: {
    control: { type: 'string' },
  },
};

const inputOptions = [
  { id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1651', label: 'Agro en visserij', checked: false },
  { id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1652', label: 'Biotechnologie', checked: false },
  {
    id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1653',
    label: 'Bosbouw en hout(bewerkings)industrie',
    checked: false,
  },
  { id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1654', label: 'Bouw en infrastructuur', checked: false },
  { id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1655', label: 'Chemie en kunststoffen', checked: false },
  { id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1656', label: 'Chemische industrie', checked: false },
  {
    id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1657',
    label: 'Consumentengoederen en detailhandel',
    checked: false,
  },
  { id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1658', label: 'Creatieve industrie', checked: false },
  { id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1659', label: 'Dienstensector', checked: false },
  { id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1660', label: 'Elektronica-industrie', checked: false },
  { id: '0df9e5f2-3d23-4714-9bb1-d7a9b88a1661', label: 'Energiesector', checked: false },
];

const defaultArgs = {
  label: 'Subsidies',
  options: inputOptions,
};

const inputArgs = {
  showInputField: true,
  inputFieldPlaceholder: 'Zoeken...',
  ...defaultArgs,
};

const meta: Meta<typeof CheckBoxFilter> = {
  title: 'Componenten/Checkbox Filter',
  component: CheckBoxFilter,
  args: defaultArgs,
  argTypes,
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

export const CheckboxFilterInputField: Story = {
  args: inputArgs,
  name: 'Checkbox Filter met input',
  render: function Render(args) {
    let testData = [...inputOptions];

    const [{ options }, updateArgs] = useArgs();

    function onSearch(event) {
      const value = event.currentTarget.value;

      if (value === '') {
        updateArgs({ options: [...testData] });
      } else {
        updateArgs({
          options: [
            ...testData.filter((item) =>
              item.label.toLocaleLowerCase().includes(event.currentTarget.value.toLocaleLowerCase()),
            ),
          ],
        });
      }
    }

    function onSelect(selectedOptions) {
      const updatedData = testData.map((item, index) => {
        if (selectedOptions.indexOf(index) >= 0) {
          return { checked: true, ...item };
        }

        return item;
      });
      updateArgs({ options: [...updatedData] });
    }

    return <CheckBoxFilter options={[...options]} {...args} inputFieldOnChange={onSearch} optionsOnChange={onSelect} />;
  },
};
