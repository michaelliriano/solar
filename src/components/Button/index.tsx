import React, { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  border: ${(props) => (props.primary ? '0' : `1px solid #000`)};
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  display: inline-block;
  padding: ${(props) =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
      ? '9px 30px 11px'
      : '14px 30px 16px'};
  color: ${(props) => (props.primary ? '#FFF' : '#00000')};
  background-color: ${(props) => (props.primary ? '#2666CF' : '#fff')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? '' : '#000')};
    color: ${(props) => (props.primary ? '' : '#FFF')};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === 'small'
        ? '5px 23px 6px'
        : props.size === 'medium'
        ? '7px 28px 9px'
        : '12px 28px 14px'};
  }
`;

const Button: FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => (
  <StyledButton
    type="button"
    onClick={onClick}
    primary={primary}
    disabled={disabled}
    size={size}
    {...props}
  >
    {text}
  </StyledButton>
);

export default Button;
