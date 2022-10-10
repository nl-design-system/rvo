/* eslint-env jest */
/* This is a superfluous test. It's here to serve as an example. */
import { render } from '@testing-library/react';
import { Image } from './index';
import '@testing-library/jest-dom';

describe('Image', () => {
  it('renders an HTML IMG element', () => {
    const { container } = render(<Image />);

    const image = container.querySelector('img:only-child');

    expect(image).toBeInTheDocument();
  });
});
