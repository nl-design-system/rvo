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
  { id: 'Agro en visserij', label: 'Agro en visserij', checked: false },
  { id: 'Biotechnologie', label: 'Biotechnologie', checked: false },
  {
    id: 'Bosbouw en hout(bewerkings)industrie',
    label: 'Bosbouw en hout(bewerkings)industrie',
    checked: false,
  },
  { id: 'Bouw en infrastructuur', label: 'Bouw en infrastructuur', checked: false },
  { id: 'Chemie en kunststoffen', label: 'Chemie en kunststoffen', checked: false },
  { id: 'Chemische industrie', label: 'Chemische industrie', checked: false },
  {
    id: 'Consumentengoederen en detailhandel',
    label: 'Consumentengoederen en detailhandel',
    checked: false,
  },
  { id: 'Creatieve industrie', label: 'Creatieve industrie', checked: false },
  { id: 'Dienstensector', label: 'Dienstensector', checked: false },
  { id: 'Elektronica-industrie', label: 'Elektronica-industrie', checked: false },
  { id: 'Energiesector', label: 'Energiesector', checked: false },
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

export const Default: Story = {
  args: defaultArgs,
  name: 'Checkbox Filter',
  render: function Render(args) {
    let testData = [...inputOptions];

    const [{ options }, updateArgs] = useArgs();

    function onSelect(selectedOptions) {
      const updatedData = testData.map((item, index) => {
        if (selectedOptions.indexOf(index) >= 0) {
          return { checked: true, ...item };
        }

        return item;
      });
      updateArgs({ options: [...updatedData] });
    }

    return <CheckBoxFilter options={[...options]} {...args} optionsOnChange={onSelect} />;
  },
};

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
