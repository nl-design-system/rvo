import { CheckBoxFilter } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useArgs } from 'storybook/preview-api';

const inputOptions = [
  { id: 'agro-en-visserij', label: 'Agro en visserij', checked: false },
  { id: 'biotechnologie', label: 'Biotechnologie', checked: false },
  {
    id: 'bosbouw-en-houtbewerkingsindustrie',
    label: 'Bosbouw en hout(bewerkings)industrie',
    checked: false,
  },
  { id: 'bouw-en-infrastructuur', label: 'Bouw en infrastructuur', checked: false },
  { id: 'chemie-en-kunststoffen', label: 'Chemie en kunststoffen', checked: false },
  { id: 'chemische-industrie', label: 'Chemische industrie', checked: false },
  {
    id: 'consumentgoederen-en-detailhandel',
    label: 'Consumentengoederen en detailhandel',
    checked: false,
  },
  { id: 'creatieve-industrie', label: 'Creatieve industrie', checked: false },
  { id: 'dienstensector', label: 'Dienstensector', checked: false },
  { id: 'elektronica-industrie', label: 'Elektronica-industrie', checked: false },
  { id: 'energiesector', label: 'Energiesector', checked: false },
];

const defaultArgs = {
  label: 'Subsidies',
  options: inputOptions,
};

const inputArgs = {
  showInputField: true,
  ...defaultArgs,
};

export default {
  title: 'Componenten/Checkbox Filter',
  component: CheckBoxFilter,
  args: defaultArgs,
  argTypes: {
    label: {
      control: { type: 'text' },
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
    inputFieldLabel: {
      control: { type: 'text' },
    },
    showMoreText: {
      control: { type: 'text' },
    },
    showLessText: {
      control: { type: 'text' },
    },
    initialCollapseState: {
      control: { type: 'select' },
      options: ['expanded', 'collapsed'],
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'data-list',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=9166-1240&embed-host=share',
    },
  },
} satisfies Meta<typeof CheckBoxFilter>;
type Story = StoryObj<typeof CheckBoxFilter>;

export const Base: Story = { args: defaultArgs, name: 'Basis Component' };

export const CheckboxFilterWithInput: Story = {
  args: inputArgs,
  name: 'Met Inputveld',
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
