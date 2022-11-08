import Breadcrumbs, { defaultArgs } from '../template';

export default (
  <Breadcrumbs
    uxpId="breadcrumbs"
    {...{
      ...defaultArgs,
      // TODO: Remove these if defaultArgs works
      items: [
        { label: 'First step', url: '#' },
        { label: 'Second step', url: '#' },
        { label: 'Third step', url: '#' },
        { label: 'Current page' },
      ],
      size: 'sm',
    }}
  />
);
