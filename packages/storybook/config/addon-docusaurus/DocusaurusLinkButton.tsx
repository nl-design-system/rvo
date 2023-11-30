import { IconButton, Icons } from '@storybook/components';
import { useParameter } from '@storybook/manager-api';
import React, { memo } from 'react';

export default memo(function MyAddonSelector() {
  const docusaurusParameter = useParameter<{ link: string } | null>('docusaurus', null);

  let url = `${window.location.origin}${window.location.pathname}docs/`;
  if (window.location.hostname === 'localhost') {
    url = `http://localhost:3000/rvo/docs/`;
  }

  // If docusaurus link is defined, update the link to point it to the component page in docusaurus
  if (docusaurusParameter && docusaurusParameter.link) {
    url = `${url}components/${docusaurusParameter.link}`;
  }

  return (
    <React.Fragment>
      <IconButton key="docusaurus-link-button" title="Open documentatie in Docusaurus" href={url} target="_blank">
        <Icons icon="lightning" />
      </IconButton>
    </React.Fragment>
  );
});
