import { defaultArgs } from './defaultArgs';
import { LogoWithText as LogoWithTextComponent } from './template';

export default {
  title: 'Componenten/Logo/Logo with alternate text',
  component: LogoWithTextComponent,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'logo',
    },
  },
};

export const LogoWithText = {
  render: LogoWithTextComponent.bind({}),
  name: 'Logo with alternate text',
  args: { ...defaultArgs, title: 'Alternatieve titel' },
};
