import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import '@nl-rvo/component-library-css/dist/components/form-textinput.css';
import Label from '../form-field-label';

export default interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  sized?: 'xs' | 'sm' | 'md' | 'lg';
}

export const InputField = (props: IInputField) => {
  const { id, required, label, className, sized = 'md', ...rest } = props;

  return (
    <div className="utrecht-form-field utrecht-form-field--text rvo-form-field" role="group" aria-labelledby={id}>
      {label && (
        <div className="rvo-form-field__label">
          <Label id={id} small={false} type={required ? 'required' : 'default'} htmlFor={id}>
            {label}
          </Label>
        </div>
      )}
      <input id={id} className={clsx(className, 'utrecht-textbox', sized && `utrecht-textbox--${sized}`)} {...rest} />
    </div>
  );
};
