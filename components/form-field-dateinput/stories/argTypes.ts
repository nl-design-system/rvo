/**
 * Storybook-only argTypes copied from React component source.
 */
import { argTypes as dateInputArgTypes } from '../../form-dateinput/stories/argTypes';
import { argTypes as fieldArgTypes } from '../../form-field/stories/argTypes';

export const argTypes = { ...fieldArgTypes, ...dateInputArgTypes };
