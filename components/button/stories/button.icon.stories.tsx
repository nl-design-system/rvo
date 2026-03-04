import { argTypes, Button } from '@nl-rvo/component-library-react';

export default {
  title: 'Componenten/Button/Icons',
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

export const WithIconBefore = {
  render: allButtons,
  name: 'With icon before',

  args: {
    kind: 'primary',
    showIcon: 'before',
  },
};

export const WithIconAfter = {
  render: allButtons,
  name: 'With icon after',

  args: {
    kind: 'primary',
    showIcon: 'after',
  },
};
