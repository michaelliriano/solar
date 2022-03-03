import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import TextInput from './index';

describe('TextInput', () => {
  test('Valid text input', () => {
    render(<TextInput label="Text Input" valid />);
    expect(screen.getByPlaceholderText('Text Input')).toHaveStyle({
      border: '1px solid green',
    });
  });
  test('Invalid text input', () => {
    render(<TextInput label="Text Input" valid={false} />);
    expect(screen.getByPlaceholderText('Text Input')).toHaveStyle({
      border: '1px solid red',
    });
  });
});
