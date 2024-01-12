import { useParameter } from '@storybook/api';
import { IconButton, Icons } from '@storybook/components';
import { addons, types } from '@storybook/manager-api';
// @ts-expect-error
import React from 'react';

addons.register('docusaurus', () => {
  addons.add('docusaurus', {
    type: types.TOOLEXTRA,
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
        <IconButton
          href={url}
          target="_blank"
          content={undefined}
          autoFocus={undefined}
          rel={undefined}
          rev={undefined}
          placeholder={undefined}
          title="Open documentatie in Docusaurus"
        >
          <Icons icon="document" style={{ width: '12px' }} />
        </IconButton>
      );
    },
  });
});
