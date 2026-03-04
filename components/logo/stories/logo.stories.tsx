import { argTypes, Logo } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/logo/defaultArgs';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Logo> = {
  title: 'Componenten/Logo',
  component: Logo,
  args: defaultArgs,
  argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'logo',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=107-5162&embed-host=share',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Logo',
};

export const AlternateText: Story = {
  args: { ...defaultArgs, title: 'Ministerie van Economische Zaken en Klimaat' },
  name: 'Alternatieve tekst',
};
