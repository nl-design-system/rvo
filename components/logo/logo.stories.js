// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { Logo as LogoComponent } from './template';

export default {
  title: 'Componenten/Logo/Logo',
  component: LogoComponent,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'logo',
    },
  },
};

export const Logo = {
  render: LogoComponent.bind({}),
  name: 'Logo',
  args: defaultArgs,
};
