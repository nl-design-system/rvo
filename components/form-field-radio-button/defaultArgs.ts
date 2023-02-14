import { defaultArgs as fieldDefaultArgs } from '../form-field/defaultArgs';
import { defaultArgs as radioButtonDefaultArgs } from '../form-radio-button-group/defaultArgs';
import { IRadioButtonFieldProps } from './template';

export const defaultArgs: IRadioButtonFieldProps = { ...fieldDefaultArgs, ...radioButtonDefaultArgs };
