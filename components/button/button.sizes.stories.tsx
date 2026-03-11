import { argTypes, Button } from './src/template';

export default {
  title: 'Componenten/Button/Sizes',
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

export const ExtraSmall = {
  render: allButtons,
  name: 'Extra small',

  args: {
    kind: 'primary',
    size: 'xs',
  },
};

export const Small = {
  render: allButtons,
  name: 'Small',

  args: {
    kind: 'primary',
    size: 'sm',
  },
};

export const Medium = {
  render: allButtons,
  name: 'Medium',

  args: {
    kind: 'primary',
    size: 'md',
  },
};
