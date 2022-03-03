import React, { FC } from 'react';
import styled from 'styled-components';

import { DropdownProps } from './Dropdown.types';

const StyledDropdown = styled.select<DropdownProps>``;

const Dropdown: FC<DropdownProps> = ({
  onChange,
  label,
  options,
  defaultValue,
  ...props
}) => (
  <>
    <label>{label}</label>
    <StyledDropdown
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={label}
      options={options}
      {...props}
    >
      {options.map((opt) => (
        <option value={opt} key={opt}>
          {opt}
        </option>
      ))}
    </StyledDropdown>
  </>
);

export default Dropdown;
