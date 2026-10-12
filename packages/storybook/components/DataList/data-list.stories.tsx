import { DataList } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Data list',
  component: DataList,
  argTypes: {
    children: {
      control: false,
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
    children: (
      <>
        <DataList.Item label="Voornaam" value="Mees" />
        <DataList.Item label="Achternaam" value="de Vos" />
        <DataList.Item
          label="Adres"
          value={
            <>
              Tweede Kamer der Staten-Generaal
              <br />
              Postbus 20018
              <br />
              2500 EA Den Haag
            </>
          }
        />
      </>
    ),
  },
  name: 'Data list',
};
