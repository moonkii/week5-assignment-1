import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Options from './Options';

describe('Options', () => {
  it('renders name of items', () => {
    const options = [
      { id: 1, name: '서울' },
    ];

    const selected = { id: '', name: '' };

    const handleClick = jest.fn();

    const { getByText } = render((
      <Options
        options={options}
        selected={selected}
        onClick={handleClick}
      />
    ));

    expect(getByText(/서울/)).not.toBeNull();

    fireEvent.click(getByText(/서울/));

    expect(handleClick).toBeCalled();
  });
});
