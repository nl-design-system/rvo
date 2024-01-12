import { defaultArgs } from './defaultArgs';
import { AllAlertKinds, argTypes } from './template';
import { Button } from '../button/template';

export default {
  title: 'Componenten/Alert/Examples',
  component: AllAlertKinds,
  argTypes: argTypes,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'alert',
    },
  },
};

export const WithHeading = {
  render: AllAlertKinds.bind({}),
  name: 'With heading',

  args: {
    defaultArgs,
    heading: 'Heading',
  },
};

export const WithButton = {
  render: AllAlertKinds.bind({}),
  name: 'With button',

  args: {
    defaultArgs,

    content: (
      <div className="rvo-layout-column rvo-layout-gap--md">
        <div>This is an example of an alert with button</div>
        <Button kind="primary" size="sm">
          Button
        </Button>
      </div>
    ),
  },
};

export const WithCloseButton = {
  render: AllAlertKinds.bind({}),
  name: 'With close button',

  args: {
    defaultArgs,
    content: 'This is an example of an alert with close button',
    closable: true,
  },
};
