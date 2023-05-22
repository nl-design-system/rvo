// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Feedback as FeedbackComponent } from './template';

export default {
  title: 'Componenten/Form/Feedback',
  component: FeedbackComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-feedback',
    },
  },
};

export const Feedback = {
  render: FeedbackComponent.bind({}),
  name: 'Feedback',
  args: defaultArgs,
};
