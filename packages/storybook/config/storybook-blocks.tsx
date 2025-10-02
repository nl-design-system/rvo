/**
 * @license CC0-1.0
 */
import { Markdown } from '@storybook/blocks';
import { HTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';

export interface HTMLHeadingProps extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  level: number;
}

export const headingElement = (level: number) => {
  return level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : level === 6 ? 'h6' : 'h1';
};

export const MarkdownBlock = ({ markdown, omitH1 = false, headingLevel = 1 }) => {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: omitH1 ? () => null : headingElement(headingLevel),
          },
          h2: {
            component: headingElement(headingLevel + 1),
          },
          h3: {
            component: headingElement(headingLevel + 2),
          },
          h4: {
            component: headingElement(headingLevel + 3),
          },
          h5: {
            component: headingElement(headingLevel + 4),
          },
          h6: {
            component: headingElement(headingLevel + 5),
          },
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};

export const Changelog = ({ markdown }) => <MarkdownBlock omitH1 headingLevel={2} markdown={markdown} />;

export const Readme = ({ markdown, children }) => {
  if (markdown) return <MarkdownBlock omitH1 markdown={markdown} />;

  if (children) {
    // If children are pure text nodes → treat as markdown
    const nodes = React.Children.toArray(children);
    const allStrings = nodes.every((n) => typeof n === 'string');

    if (allStrings) {
      const text = nodes.join('');
      return <Markdown>{text}</Markdown>;
    }

    // Otherwise: render JSX/MDX components normally
    return <div className="sbdocs sbdocs-content">{children}</div>;
  }
  return null;
};
