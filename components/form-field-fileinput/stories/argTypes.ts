/**
 * Storybook-only argTypes copied from React component source.
 */
import { argTypes as fieldArgTypes } from '../../form-field/stories/argTypes';
import { argTypes as fileInputArgTypes } from '../../form-fileinput/stories/argTypes';

export const argTypes = { ...fieldArgTypes, ...fileInputArgTypes };
