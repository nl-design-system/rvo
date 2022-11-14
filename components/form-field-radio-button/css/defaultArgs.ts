import { defaultArgs as fieldDefaultArgs } from '../../form-field/css/defaultArgs';
import { defaultArgs as radioButtonDefaultArgs } from '../../form-radio-button-group/css/defaultArgs';
import { IRadioButtonFieldProps } from './template';

export const defaultArgs: IRadioButtonFieldProps = { ...fieldDefaultArgs, ...radioButtonDefaultArgs };
