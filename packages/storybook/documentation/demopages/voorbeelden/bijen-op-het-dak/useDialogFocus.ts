import { useEffect } from 'react';

/**
 * Moves focus into the open dialog and returns it to the previously focused element on close.
 */
export const useDialogFocus = (isOpen: boolean) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const frame = requestAnimationFrame(() => {
      document.querySelector<HTMLElement>('dialog.rvo-dialog')?.focus();
    });

    return () => {
      cancelAnimationFrame(frame);
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);
};
