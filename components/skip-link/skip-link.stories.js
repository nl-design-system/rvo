// import changeLog from './CHANGELOG.md';
import { argTypes, defaultArgs, SkipLink as SkipLinkComponent } from './template';

export default {
  title: 'Componenten/Skip link/Skip link',
  component: SkipLinkComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'skip-link',
    },
  },
};

export const SkipLink = {
  render: SkipLinkComponent.bind({}),
  name: 'Skip link',
  args: defaultArgs,
};
