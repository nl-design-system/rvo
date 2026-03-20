/**
 * Storybook-only argTypes copied from React component source.
 */
import { argTypes as checkboxArgTypes } from '../../form-checkbox-group/stories/argTypes';
import { argTypes as fieldArgTypes } from '../../form-field/stories/argTypes';

export const argTypes = { ...fieldArgTypes, ...checkboxArgTypes };
