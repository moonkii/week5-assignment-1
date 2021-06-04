import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    region: '서울',
    category: '한식',
    restaurants: [{ id: 1, name: '밀면넘어져요' }],
  }));

  it('renders restaurant list', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(container).toHaveTextContent('밀면넘어져요');
  });
});
