/**
 * Storybook-only argTypes copied from React component source.
 */
import { argTypes as fieldArgTypes } from '../../form-field/stories/argTypes';
import { argTypes as timeInputArgTypes } from '../../form-timeinput/stories/argTypes';

export const argTypes = { ...fieldArgTypes, ...timeInputArgTypes };
