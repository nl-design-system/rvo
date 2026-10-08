export interface IFileInputProps extends React.ComponentPropsWithoutRef<'input'> {
  id?: string;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  accept?: string;
  multiple?: boolean;
}
