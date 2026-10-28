import { IProgressTrackerStepProps, ProgressTracker } from '@nl-rvo/component-library-react';

interface ResponsiveProgressTrackerProps {
  steps: IProgressTrackerStepProps[];
  isDesktop: boolean;
}

export const ResponsiveProgressTracker = ({ steps, isDesktop }: ResponsiveProgressTrackerProps) => {
  if (isDesktop) return <ProgressTracker steps={steps} />;

  const mainSteps = steps.filter((s) => s.size !== 'sm');
  const currentStep = [...steps].reverse().find((s) => s.state === 'doing');
  const currentIndex = mainSteps.findIndex((s) => s === currentStep || s.label === currentStep?.label) + 1;

  return (
    <details>
      <summary className="rvo-paragraph rvo-text--bold rvo-margin-block-end--sm">
        Stap {currentIndex} van {mainSteps.length}: {currentStep?.label}
      </summary>
      <ProgressTracker steps={steps} />
    </details>
  );
};
