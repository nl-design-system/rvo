import { Children, FC, isValidElement, ReactElement, ReactNode } from 'react';

export function getChildComponent<Props>(Component: FC<Props>, children: ReactNode): ReactElement<Props> | undefined {
  const childrenArray = Children.toArray(children);

  for (const child of childrenArray) {
    if (isValidElement(child)) {
      if (child.type === Component) {
        return child as ReactElement<Props>;
      }

      // Recursively check the children of this element
      const found = getChildComponent<Props>(Component, child.props.children);
      if (found) return found;
    }
  }

  return undefined;
}

export function getChildComponentPropValue<Props>(
  Component: FC<Props>,
  prop: keyof Props,
  children: ReactNode,
): Props[keyof Props] | undefined {
  const ChildComponent = getChildComponent(Component, children);

  if (!ChildComponent) {
    return undefined;
  }

  const propValue = ChildComponent.props[prop];
  return propValue;
}

export function filterComponents<Props>(Component: FC<Props>, children: ReactNode) {
  return Children.toArray(children).filter((child) => !(isValidElement(child) && child.type === Component));
}
