/**
 * Storybook-only argTypes copied from React component source.
 */
import { argTypes as fieldArgTypes } from '../../form-field/stories/argTypes';
import { argTypes as radioButtonArgTypes } from '../../form-radio-button-group/stories/argTypes';

export const argTypes = { ...fieldArgTypes, ...radioButtonArgTypes };
