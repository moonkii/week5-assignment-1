import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

test('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    selectedRegion: 1,
  }));
  const { container, getByText } = render((
    <RegionsContainer />
  ));

  expect(container).toHaveTextContent('서울');

  fireEvent.click(getByText('서울'));

  expect(dispatch).toBeCalled();
});
