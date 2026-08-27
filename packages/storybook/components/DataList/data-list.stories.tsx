import { DataList } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Data list',
  component: DataList,
  argTypes: {
    items: {
      name: 'array',
      required: true,
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
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=254-3707&embed-host=share',
    },
  },
} satisfies Meta<typeof DataList>;
type Story = StoryObj<typeof DataList>;

export const Base: Story = {
  args: {
    items: [
      {
        label: 'Voornaam',
        value: 'Mees',
      },
      {
        label: 'Achternaam',
        value: 'de Vos',
      },
      {
        label: 'Adres',
        value: 'Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag',
      },
    ],
  },
};
