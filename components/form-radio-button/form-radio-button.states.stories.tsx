import { defaultArgs } from './src/defaultArgs';
import { argTypes, RadioButton } from './src/template';

export default {
  title: 'Componenten/Radio button/States',
  component: RadioButton,
  argTypes: argTypes,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-radio-button',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=282-7950&embed-host=share',
    },
  },
};

export const Hover = {
  render: RadioButton.bind({}),
  name: 'Hover',

  args: {
    ...defaultArgs,
    hover: true,
  },
};

export const Checked = {
  render: RadioButton.bind({}),
  name: 'Checked',

  args: {
    ...defaultArgs,
    checked: true,
  },
};

export const Disabled = {
  render: RadioButton.bind({}),
  name: 'Disabled',

  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const Active = {
  render: RadioButton.bind({}),
  name: 'Active',

  args: {
    ...defaultArgs,
    active: true,
  },
};

export const Focus = {
  render: RadioButton.bind({}),
  name: 'Focus',

  args: {
    ...defaultArgs,
    focus: true,
  },
};
