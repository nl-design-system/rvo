/**
 * Storybook-only argTypes copied from React component source.
 */
export const argTypes = {
  background: {
    options: ['none', 'color', 'image'],
    control: { type: 'radio' },
  },
  backgroundColor: {
    if: { arg: 'background', eq: 'color' },
    options: ['', 'grijs-100'],
    control: { type: 'radio' },
  },
  backgroundImage: { if: { arg: 'background', eq: 'image' }, control: { type: 'text' } },
  padding: {
    options: ['none', 'sm', 'md', 'lg'],
    control: { type: 'radio' },
  },
  outline: { control: { type: 'boolean' } },
  title: { control: { type: 'text' } },
  link: { control: { type: 'text' } },
  fullCardLink: { control: { type: 'boolean' } },
  image: { control: { type: 'text' } },
  imageSize: {
    if: { arg: 'background', eq: 'image' },
    options: ['sm', 'md'],
    control: { type: 'radio' },
  },
  imageLine: {
    options: ['none', 'top-right', 'bottom-left'],
    control: { type: 'radio' },
  },
  showLinkIndicator: { control: { type: 'boolean' } },
  invertedColors: { control: { type: 'boolean' } },
  content: { control: { type: 'text' } },
  children: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
};
