import { useEffect, useState } from 'react';

export const useFormLeaveGuard = (guardUrl: string) => {
  const [leaveTarget, setLeaveTarget] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href !== guardUrl) return;
      e.preventDefault();
      e.stopPropagation();
      setLeaveTarget(href);
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [guardUrl]);

  return {
    showLeaveDialog: leaveTarget !== null,
    leaveTarget: leaveTarget ?? '',
    dismissLeaveDialog: () => setLeaveTarget(null),
  };
};
