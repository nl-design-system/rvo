import { addons, types } from '@storybook/manager-api';
import DocusaurusLinkButton from './DocusaurusLinkButton';

addons.register('docusaurus', () => {
  // Register the tool
  addons.add('docusaurus-link-button', {
    type: types.TOOLEXTRA,
    title: 'Documentatie',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: DocusaurusLinkButton as any,
  });
});
