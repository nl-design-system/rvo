import { FormLayout } from '@nl-rvo/component-library-react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';

export default {
  title: 'Componenten/Form layout',
  component: FormLayout,
  argTypes: {
    content: {
      control: 'text',
    },
    children: {
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
      link: 'form-layout',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=2734-2208&embed-host=share',
    },
  },
} satisfies Meta<typeof FormLayout>;
type Story = StoryObj<typeof FormLayout>;

export const Base: Story = {
  args: {
    content: `Deze gecentreerde container heeft een maximale breedte van ${designTokens.rvoLayoutMaxWidthSm} en dient gebruikt te worden voor formulieren.`,
  },
  name: 'Basis Component',
};
