// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Heading as HeadingComponent } from './template';

export default {
  title: 'Componenten/Heading',
  component: HeadingComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'heading',
    },
  },
};

export const Heading = {
  render: HeadingComponent.bind({}),
  name: 'Heading',

  args: {
    ...defaultArgs,
    type: 'h1',
    distanced: false,
    textContent: 'Heading',
  },
};
