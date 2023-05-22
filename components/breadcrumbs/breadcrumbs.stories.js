// import changeLog from './CHANGELOG.md';
import { defaultArgs } from './defaultArgs';
import { argTypes, Breadcrumbs as BreadcrumbsComponent } from './template';

export default {
  title: 'Componenten/Breadcrumbs/Breadcrumbs',
  component: BreadcrumbsComponent,
  argTypes: argTypes,

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },

    docusaurus: {
      link: 'breadcrumbs',
    },
  },
};

export const Breadcrumbs = {
  render: BreadcrumbsComponent.bind({}),
  name: 'Breadcrumbs',
  args: defaultArgs,
};
