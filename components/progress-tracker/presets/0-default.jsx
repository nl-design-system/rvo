import ProgressTrackerStep from '../../progress-tracker-step/template';
import { defaultArgs } from '../defaultArgs';
import ProgressTracker from '../template';

export default (
  <ProgressTracker uxpId="progressTracker" {...defaultArgs}>
    <ProgressTrackerStep
      uxpId="progressTrackerStep1"
      state="start"
      label="Progress Tracker"
      link="#"
      size="md"
      line="straight"
    />
    <ProgressTrackerStep
      uxpId="progressTrackerStep2"
      state="completed"
      label="Step completed"
      link="#"
      size="md"
      line="straight"
    />
    <ProgressTrackerStep
      uxpId="progressTrackerStep3"
      state="doing"
      label="Step doing"
      link="#"
      size="md"
      line="straight"
    />
    <ProgressTrackerStep
      uxpId="progressTrackerStep4"
      state="incomplete"
      label="Step incomplete"
      link="#"
      size="md"
      line="substep-start"
    />
    <ProgressTrackerStep
      uxpId="progressTrackerStep5"
      state="incomplete"
      label="First sub-step"
      link="#"
      size="sm"
      line="straight"
    />
    <ProgressTrackerStep
      uxpId="progressTrackerStep6"
      state="doing"
      label="Sub-step doing"
      link="#"
      size="sm"
      line="straight"
    />
    <ProgressTrackerStep
      uxpId="progressTrackerStep7"
      state="completed"
      label="Sub-step completed"
      link="#"
      size="sm"
      line="straight"
    />
    <ProgressTrackerStep
      uxpId="progressTrackerStep8"
      state="disabled"
      label="Sub-step disabled"
      link="#"
      size="sm"
      line="straight"
    />
    <ProgressTrackerStep
      uxpId="progressTrackerStep9"
      state="incomplete"
      label="Last sub-step"
      link="#"
      size="sm"
      line="substep-end"
    />
    <ProgressTrackerStep
      uxpId="progressTrackerStep10"
      state="disabled"
      label="Step disabled"
      link="#"
      size="md"
      line="straight"
    />
    <ProgressTrackerStep
      uxpId="progressTrackerStep11"
      state="end"
      label="Process completed"
      link="#"
      size="md"
      line="none"
    />
  </ProgressTracker>
);
