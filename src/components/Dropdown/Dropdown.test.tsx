import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Dropdown from './index';

describe('Dropdown', () => {
  test('Dropdown with option and label', () => {
    render(
      <Dropdown label="Text Input" options={['test']} onChange={jest.fn()} />,
    );
    expect(screen.getByText('Text Input'));
    expect(screen.getByText('test'));
  });
});
