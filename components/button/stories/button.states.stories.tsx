import { argTypes, Button } from '@nl-rvo/component-library-react';

export default {
  title: 'Componenten/Button/States',
  component: Button,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'PRODUCTION',
    },

    docusaurus: {
      link: 'button',
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Sj6myBL1Fvot5M1qGxzvEo/ROOS--RVO-Design-System-?node-id=46-529&embed-host=share',
    },
  },
};

const allButtons = (buttonArgs) => (
  <div>
    <p>
      <Button label="Button" {...buttonArgs} kind="primary" />
    </p>
    <p>
      <Button label="Button" {...buttonArgs} kind="secondary" />
    </p>
    <p>
      <Button label="Button" {...buttonArgs} kind="tertiary" />
    </p>
    <p>
      <Button label="Button" {...buttonArgs} kind="quaternary" />
    </p>
    <p>
      <Button label="Button" {...buttonArgs} kind="warning-subtle" />
    </p>
    <p>
      <Button label="Button" {...buttonArgs} kind="warning" />
    </p>
  </div>
);

export const Hover = {
  render: allButtons,
  name: 'Hover',

  args: {
    hover: true,
    showIcon: 'before',
  },
};

export const Active = {
  render: allButtons,
  name: 'Active',

  args: {
    active: true,
    showIcon: 'before',
  },
};

export const Focus = {
  render: allButtons,
  name: 'Focus',

  args: {
    focus: true,
    showIcon: 'before',
  },
};

export const FocusVisible = {
  render: allButtons,
  name: 'Focus visible',

  args: {
    focus: true,
    focusVisible: true,
    showIcon: 'before',
  },
};

export const Disabled = {
  render: allButtons,
  name: 'Disabled',

  args: {
    disabled: true,
    showIcon: 'before',
  },
};

export const Busy = {
  render: allButtons,
  name: 'Busy',

  args: {
    busy: true,
    showIcon: 'before',
  },
};
