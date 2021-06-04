import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    region: { id: '', name: '' },
    regions: [{ id: 1, name: '서울' }],
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders region list', () => {
    const { container } = render(<RegionsContainer />);

    expect(container).toHaveTextContent('서울');
  });

  it('listens click event', () => {
    const { getByText } = render(<RegionsContainer />);

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'setRegion',
      payload: {
        id: 1,
        name: '서울',
      },
    });
  });
});
