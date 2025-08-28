import { Meta, StoryObj } from '@storybook/react';
import Autocomplete, { IAutocompleteProps } from './src/template';

const defaultArgs: IAutocompleteProps = {
  placeholder: 'Type to search...',
  size: 'lg',
  renderLinksHeader: () => <div>Links</div>,
  renderSuggestionsHeader: () => <div>Suggesties</div>,
  keywordSuggestions: [
    { value: 'boek' },
    { value: 'boer ' },
    { value: 'boere ' },
    { value: 'boeren' },
    { value: 'boerd ' },
    { value: 'boerde ' },
    { value: 'boerderij ' },
    { value: 'boerderije' },
    { value: 'boerderijen' },
  ],
  linkSuggestions: [
    {
      title: 'Dankzij deze subsidie kunnen we investeren in onze boerderijen',
      href: 'https://www.rvo.nl/praktijkverhalen/echt-investeren-toekomst-boerderij',
    },
    {
      title: 'Mest vergisten op boerderijen',
      href: 'https://www.rvo.nl/onderwerpen/bio-energie/vergisting-en-vergassing/monomestvergisten',
    },
  ],
};

const meta: Meta<typeof Autocomplete> = {
  title: 'Componenten/Autocomplete',
  component: Autocomplete,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'autocomplete',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = { args: defaultArgs, name: 'Autocomplete' };
