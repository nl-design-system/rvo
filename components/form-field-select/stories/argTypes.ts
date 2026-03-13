/**
 * Storybook-only argTypes copied from React component source.
 */
import { argTypes as fieldArgTypes } from '../../form-field/stories/argTypes';
import { argTypes as selectArgTypes } from '../../form-select/stories/argTypes';

export const argTypes = { ...fieldArgTypes, ...selectArgTypes };
