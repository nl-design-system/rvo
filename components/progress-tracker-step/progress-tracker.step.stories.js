// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, ProgressTrackerStep as ProgressTrackerStepComponent } from './template';

export default {
  title: 'Componenten/Progress Tracker',
  component: ProgressTrackerStepComponent,
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

export const Step = {
  render: ProgressTrackerStepComponent.bind({}),
  name: 'Step',
  args: defaultArgs,
};
