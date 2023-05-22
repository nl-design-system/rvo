// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, TimeInput as TimeInputComponent } from './template';

export default {
  title: 'Componenten/Form/Time input/Time input',
  component: TimeInputComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'form-timeinput',
    },
  },
};

export const TimeInput = {
  render: TimeInputComponent.bind({}),
  name: 'Time input',
  args: defaultArgs,
};
