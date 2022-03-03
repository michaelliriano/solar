import { ChangeEventHandler } from 'react';

export interface TextInputProps {
  label?: string;
  valid?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
