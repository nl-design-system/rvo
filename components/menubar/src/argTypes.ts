export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  direction: {
    options: ['horizontal', 'vertical'],
    control: { type: 'radio' },
  },
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
  useIcons: {
    control: 'boolean',
  },
  iconPlacement: {
    options: ['before', 'after'],
    control: { type: 'radio' },
  },
  maxWidth: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  maxWidthInlinePadding: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  type: {
    options: ['primary', 'sub', 'sub-grid'],
    control: { type: 'radio' },
  },
  deltaForActiveItem: {
    control: 'boolean',
  },
  horizontalRule: {
    control: 'boolean',
  },
  linkColor: {
    options: ['donkerblauw', 'hemelblauw', 'logoblauw', 'grijs-700', 'zwart'],
    control: { type: 'radio' },
  },
  useBackgroundColor: {
    control: 'boolean',
  },
  children: {
    table: {
      disable: true,
    },
  },
};
