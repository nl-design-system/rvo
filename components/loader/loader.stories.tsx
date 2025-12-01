import type { Meta, StoryObj } from '@storybook/react';
import { ILoaderStatus, Loader } from './src/template';
import { IButtonProps } from '../button/src/template';

const argTypes = {
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
};

// Arguments
const defaultArgs = {
  animateLoader: true,
  overlay: false,
};

const status: ILoaderStatus = {
  type: 'waarschuwing',
  text: 'Het laden duurt iets langer dan verwacht',
};

const primaryAction: IButtonProps = {
  label: 'Probeer het opnieuw',
};

const secondaryAction: IButtonProps = {
  label: 'Probleem melden',
};

const meta: Meta<typeof Loader> = {
  title: 'Componenten/Loader',
  component: Loader,
  args: defaultArgs,
  argTypes,
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
};
export default meta;

// Stories
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: defaultArgs,
  name: 'Loader',
};

export const LoaderWithStatus: Story = {
  args: { status, ...defaultArgs },
  name: 'Loader Status',
};

export const LoaderOverlay: Story = {
  args: { overlay: true, ...defaultArgs },
  name: 'Loader Overlay',
};

export const LoaderWithActions: Story = {
  args: { primaryAction, secondaryAction, ...defaultArgs },
  name: 'Loader Actions',
};

export const LoaderWithStatusandActions: Story = {
  args: { status, primaryAction, secondaryAction, ...defaultArgs },
  name: 'Loader Status and Actions',
};
