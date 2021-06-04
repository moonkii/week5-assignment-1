import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    region: '',
    category: '',
    regions: [],
    categories: [],
    restaurants: [],
  }));

  it('renders without crash', () => {
    render(<App />);
  });
});
