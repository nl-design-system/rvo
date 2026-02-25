import { IActionGroupProps } from './template';

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

export const defaultArgs: IActionGroupProps = {
  buttonsLeft: defaultButtonsLeft,
  buttonsRight: defaultButtonsRight,
  position: 'left',
};
