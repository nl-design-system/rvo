// import changeLog from './CHANGELOG.md';
// import markdown from './README.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, MaxWidthLayout as MaxWidthLayoutComponent } from './template';

export default {
  title: 'Componenten/Layout/Max width layout',
  component: MaxWidthLayoutComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'max-width-layout',
    },
  },
};

export const MaxWidthLayout = {
  render: MaxWidthLayoutComponent.bind({}),
  name: 'Max width layout',
  args: defaultArgs,
};
