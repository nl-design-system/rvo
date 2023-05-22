// import changeLog from './CHANGELOG.md';
// import markdown from './README.md';
import { Favicon as FaviconComponent } from './template';

export default {
  title: 'Componenten/Favicon/Favicon',
  component: FaviconComponent,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docs: {
      transformSource: () =>
        '<link rel="manifest" href="/manifest.webmanifest">\n<link rel="icon" href="/favicon.ico" sizes="any">\n<link rel="icon" href="/icon.svg" type="image/svg+xml">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
    },

    docusaurus: {
      link: 'favicon',
    },
  },
};

export const Favicon = {
  render: FaviconComponent.bind({}),
  name: 'Favicon',
};
