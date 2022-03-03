import React, { FC } from 'react';
import styled from 'styled-components';

import { TextInputProps } from './Input.types';

const StyledTextInput = styled.input<TextInputProps>`
  border: ${(props) => (props.valid ? '1px solid green' : '1px solid red')};
  font-size: 18px;
  color: ${(props) => (props.valid ? '' : 'red')};
  &:focus {
    outline: none;
  }
  padding: 0.5rem 1rem;
`;

const TextInput: FC<TextInputProps> = ({
  onChange,
  valid,
  label,
  ...props
}) => (
  <StyledTextInput
    onChange={onChange}
    placeholder={label}
    valid={valid}
    {...props}
  />
);

export default TextInput;
