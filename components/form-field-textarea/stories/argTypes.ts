/**
 * Storybook-only argTypes copied from React component source.
 */
import { argTypes as fieldArgTypes } from '../../form-field/stories/argTypes';
import { argTypes as textareaArgTypes } from '../../form-textarea/stories/argTypes';

export const argTypes = { ...fieldArgTypes, ...textareaArgTypes };
