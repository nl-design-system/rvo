import { RadioButton } from '@nl-rvo/component-library-react';
import { defaultArgs } from '@nl-rvo/component-library-react/src/components/form-radio-button/defaultArgs';
import { argTypes } from './argTypes';

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

  args: {
    ...defaultArgs,
    hover: true,
  },
};

export const Checked = {
  render: RadioButton.bind({}),

  args: {
    ...defaultArgs,
    checked: true,
  },
};

export const Disabled = {
  render: RadioButton.bind({}),

  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const Active = {
  render: RadioButton.bind({}),

  args: {
    ...defaultArgs,
    active: true,
  },
};

export const Focus = {
  render: RadioButton.bind({}),

  args: {
    ...defaultArgs,
    focus: true,
  },
};
