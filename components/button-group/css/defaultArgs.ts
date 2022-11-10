import { IButtonGroupProps } from './template';

const defaultButtonsLeft = [
  {
    kind: 'primary' as const,
    size: 'md' as const,
    label: 'Primary action',
  },
];

const defaultButtonsRight = [
  {
    kind: 'secondary' as const,
    size: 'md' as const,
    label: 'Secondary action',
  },
];

export const defaultArgs: IButtonGroupProps = {
  buttonsLeft: defaultButtonsLeft,
  buttonsRight: defaultButtonsRight,
};
