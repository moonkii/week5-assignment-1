import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    category: { id: '', name: '' },
    categories: [{ id: 1, name: '한식' }],
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders categories list', () => {
    const { container } = render(<CategoriesContainer />);

    expect(container).toHaveTextContent('한식');
  });

  it('listens click event', () => {
    const { getByText } = render(<CategoriesContainer />);

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith({
      type: 'setCategory',
      payload: {
        id: 1,
        name: '한식',
      },
    });
  });
});
