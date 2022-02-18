import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './index';

describe('Button', () => {
  test('Check Button Disabled', () => {
    render(<Button text="Submit" disabled />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });
  test('Check Button displays text', () => {
    render(<Button text="Testme" disabled />);
    expect(screen.getByRole('button', { name: 'Testme' })).toBeDisabled();
  });
  test('Check Button displays text', () => {
    render(<Button text="Testme" disabled />);
    expect(screen.getByRole('button', { name: 'Testme' })).toBeDisabled();
  });
  test('Check small button', () => {
    render(<Button text="Testme" size="small" />);
    expect(screen.getByRole('button', { name: 'Testme' })).toHaveStyle({
      padding: '7px 25px 8px',
    });
  });
  test('Check medium button', () => {
    render(<Button text="Testme" size="medium" />);
    expect(screen.getByRole('button', { name: 'Testme' })).toHaveStyle({
      padding: '9px 30px 11px',
    });
  });
  test('Check large button', () => {
    render(<Button text="Testme" size="large" />);
    expect(screen.getByRole('button', { name: 'Testme' })).toHaveStyle({
      padding: '14px 30px 16px',
    });
  });
  test('Check button primary color', () => {
    render(<Button text="Testme" primary size="small" />);
    expect(screen.getByRole('button', { name: 'Testme' })).toHaveStyle({
      color: '#1b116e',
      backgroundColor: '#6bedb5',
    });
  });
  test('Check button standard color', () => {
    render(<Button text="Testme" size="small" />);
    expect(screen.getByRole('button', { name: 'Testme' })).toHaveStyle({
      color: '#ffffff',
      backgroundColor: '#1b116',
    });
  });
});
