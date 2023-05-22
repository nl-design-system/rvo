// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, ProgressTracker as ProgressTrackerComponent } from './template';

export default {
  title: 'Componenten/Progress Tracker/Progress Tracker',
  component: ProgressTrackerComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'progress-tracker',
    },
  },
};

export const ProgressTracker = {
  render: ProgressTrackerComponent.bind({}),
  name: 'Progress Tracker',
  args: defaultArgs,
};
