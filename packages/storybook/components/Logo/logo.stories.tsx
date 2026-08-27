import { Logo } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

export default {
  title: 'Componenten/Logo',
  component: Logo,
  args: {
    title: 'Rijksdienst voor Ondernemend Nederland',
    subtitle: '',
    link: '',
    className: '',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    link: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
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
} satisfies Meta<typeof Logo>;
type Story = StoryObj<typeof Logo>;

export const Base: Story = {};

export const AlternateText: Story = {
  args: { title: 'Ministerie van Economische Zaken en Klimaat' },
  name: 'Alternatieve tekst',
};

export const WithLink: Story = {
  args: { link: 'https://rvo.nl' },
  name: 'Met link',
};
