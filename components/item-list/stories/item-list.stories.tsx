import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/item-list/defaultArgs';
import { ItemList } from '@nl-rvo/component-library-react';

const meta: Meta<typeof ItemList> = {
  title: 'Componenten/Item list',
  component: ItemList,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'item-list',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-2220&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ItemList>;

export const Default: Story = { args: defaultArgs, name: 'Item list' };
