import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Modal from './index';

const dispatch = jest.fn();

describe('Modal', () => {
  test('Dropdown with option and label', () => {
    render(<Modal heading="Modal heading" onClose={dispatch} />);
    expect(screen.getByText('Modal heading'));
    const closeBtn = screen.getByText('X');
    expect(closeBtn);
    closeBtn.click();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
