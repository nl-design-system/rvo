import { Grid } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/grid/defaultArgs';
import { argTypes } from './argTypes';

export default {
  title: 'Layout/Grid/Using divisions',
  component: Grid,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'grid',
    },
  },
};

export const TwoColumns = {
  render: Grid.bind({}),
  name: '2fr 1fr',

  args: {
    ...defaultArgs,
    division: '2fr 1fr',
  },
};

export const ThreeColumns = {
  render: Grid.bind({}),
  name: '2fr 1fr 2fr',

  args: {
    ...defaultArgs,
    columns: 'three',
    division: '2fr 1fr 2fr',
  },
};
