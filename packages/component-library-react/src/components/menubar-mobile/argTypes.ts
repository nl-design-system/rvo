export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  items: {
    type: {
      name: 'array',
      required: true,
    },
  },
  submenuItems: {
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
  isOpen: {
    control: 'boolean',
  },
};
