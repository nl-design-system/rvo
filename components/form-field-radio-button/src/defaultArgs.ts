import { IRadioButtonFieldProps } from './template';
import { defaultArgs as fieldDefaultArgs } from '../../form-field/src/defaultArgs';
import { defaultArgs as radioButtonDefaultArgs } from '../../form-radio-button-group/src/defaultArgs';

export const defaultArgs: IRadioButtonFieldProps = { ...fieldDefaultArgs, ...radioButtonDefaultArgs };
