import { DataList } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/data-list/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof DataList> = {
  title: 'Componenten/Data list',
  component: DataList,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'data-list',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=254-3707&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof DataList>;

export const Default: Story = { args: defaultArgs, name: 'Data list' };
