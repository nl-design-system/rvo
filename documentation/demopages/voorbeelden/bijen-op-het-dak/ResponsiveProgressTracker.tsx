import { ProgressTracker } from '@nl-rvo/component-library-react';
import type { ComponentProps } from 'react';

type ProgressTrackerStep = NonNullable<ComponentProps<typeof ProgressTracker>['steps']>[number];

interface ResponsiveProgressTrackerProps {
  steps: ProgressTrackerStep[];
  isDesktop: boolean;
}

export const ResponsiveProgressTracker = ({ steps, isDesktop }: ResponsiveProgressTrackerProps) => {
  if (isDesktop) return <ProgressTracker steps={steps} />;

  const mainSteps = steps.filter((s) => s.size !== 'sm');
  const currentStep = [...steps].reverse().find((s) => s.state === 'doing');
  const currentIndex = mainSteps.findIndex((s) => s === currentStep || s.label === currentStep?.label) + 1;

  return (
    <details className="rvo-expandable-content">
      <summary className="rvo-expandable-content__summary rvo-paragraph rvo-text--bold rvo-margin-block-end--sm">
        Stap {currentIndex} van {mainSteps.length}: {currentStep?.label}
      </summary>
      <div className="rvo-expandable-content__details">
        <ProgressTracker steps={steps} />
      </div>
    </details>
  );
};
