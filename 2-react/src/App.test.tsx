import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getAllByTestId('form')).toBeTruthy();
  expect(screen.getAllByTestId('record-list')).toBeTruthy();
});
