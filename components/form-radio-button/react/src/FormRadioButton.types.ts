export interface IRadioButtonProps extends React.ComponentPropsWithoutRef<"input"> {
  id?: string;
  name?: string;
  label: string;
  checked?: boolean;
  hover?: boolean;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  invalid?: boolean;
  required?: boolean;
  onUpdateGroup?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
