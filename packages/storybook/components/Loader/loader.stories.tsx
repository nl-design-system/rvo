import { Loader } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

// Arguments
const status = {
  type: 'waarschuwing',
  text: 'Het laden duurt iets langer dan verwacht',
};

const primaryAction = {
  label: 'Probeer het opnieuw',
};

const secondaryAction = {
  label: 'Probleem melden',
};

export default {
  title: 'Componenten/Loader',
  component: Loader,
  args: {
    animateLoader: true,
    overlay: false,
  },
  argTypes: {
    animateLoader: {
      control: { type: 'boolean' },
    },
    overlay: {
      control: { type: 'boolean' },
    },
    status: {
      control: { type: 'object' },
    },
    primaryAction: {
      control: { label: 'object' },
    },
    secondaryAction: {
      control: { label: 'object' },
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'loader',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=6605-175&embed-host=share',
    },
  },
} satisfies Meta<typeof Loader>;
// Stories
type Story = StoryObj<typeof Loader>;

export const Base: Story = {
  name: 'Loader',
};

export const LoaderWithStatus: Story = {
  args: { status: status as any },
  name: 'Loader Status',
};

export const LoaderOverlay: Story = {
  args: { overlay: true },
};

export const LoaderWithActions: Story = {
  args: { primaryAction, secondaryAction },
  name: 'Loader Actions',
};

export const LoaderWithStatusandActions: Story = {
  args: { status: status as any, primaryAction, secondaryAction },
  name: 'Loader Status and Actions',
};
