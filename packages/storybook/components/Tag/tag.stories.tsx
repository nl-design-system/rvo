import { Tag } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { iconOptions } from '@nl-rvo/component-library-react';

export default {
  title: 'Componenten/Tag',
  component: Tag,
  args: { children: 'Tag' },
  argTypes: {
    content: {
      control: 'text',
    },
    type: {
      options: ['-', 'info', 'bevestiging', 'foutmelding', 'waarschuwing'],
      control: { type: 'select' },
      mapping: {
        '-': undefined,
      },
    },
    icon: {
      control: { type: 'select' },
      options: iconOptions,
    },
    isPill: {
      control: 'boolean',
    },
    link: {
      control: 'text',
    },
    linkTarget: {
      options: ['_blank', '_self', '_parent', '_top'],
      control: { type: 'radio' },
    },
    iconPlacement: {
      options: ['-', 'left', 'right'],
      control: { type: 'select' },
      mapping: {
        '-': undefined,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'tag',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=263-3553&embed-host=share',
    },
  },
} satisfies Meta<typeof Tag>;
type Story = StoryObj<typeof Tag>;

export const Base: Story = { name: 'Basis Component' };

export const WithIcon: Story = {
  name: 'Met Icoon',
  render: () => (
    <div style={{ display: 'inline-flex', gap: '1rem', flexDirection: 'column' }}>
      <Tag icon="home" iconPlacement="left">
        Tag met Icon Links
      </Tag>
      <Tag icon="home" iconPlacement="right">
        Tag met Icon Rechts
      </Tag>
    </div>
  ),
};

export const WithType: Story = {
  name: 'Type Variants',
  render: () => (
    <div style={{ display: 'inline-flex', gap: '1rem', flexDirection: 'column' }}>
      <Tag type="info">Tag met 'info' type</Tag>
      <Tag type="success">Tag met 'success' type</Tag>
      <Tag type="error">Tag met 'error' type</Tag>
      <Tag type="warning">Tag met 'warning' type</Tag>
    </div>
  ),
};
