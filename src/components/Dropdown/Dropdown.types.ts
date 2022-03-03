import { ChangeEventHandler } from 'react';

export interface DropdownProps {
  label?: string;
  defaultValue?: string;
  options: string[];
  onChange: ChangeEventHandler<HTMLInputElement & HTMLSelectElement>;
}
