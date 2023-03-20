import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { Icons, TabButton } from '@storybook/components';
// eslint-disable-next-line no-unused-vars
import React from 'react';

addons.register('docusaurus', () => {
  console.log(addons);
  addons.add('docusaurus', {
    type: types.TOOL,
    title: 'Documentatie',
    // route: ({ storyId, refId }) => 'http://www.nos.nl',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => {
      const docusaurusParameter = useParameter('docusaurus', null);

      let url = `${window.location.origin}${window.location.pathname}docs/`;
      if (window.location.hostname === 'localhost') {
        url = `http://localhost:3000/rvo/docs/`;
      }

      // If docusaurus link is defined, update the link to point it to the component page in docusaurus
      if (docusaurusParameter && docusaurusParameter.link) {
        url = `${url}components/${docusaurusParameter.link}`;
      }

      return (
        <TabButton href={url} target="_blank">
          <Icons icon="document" style={{ width: '14px' }} />
          &nbsp; Documentatie
        </TabButton>
      );
    },
  });
});
