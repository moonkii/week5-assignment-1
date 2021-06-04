import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Option from './Option';

describe('Option', () => {
  context('when option is not selected', () => {
    it('renders name of items', () => {
      const handleClick = jest.fn();

      const option = { id: 1, name: '서울' };
      const selected = { id: '', name: '' };

      const { getByText } = render((
        <Option
          option={option}
          selected={selected}
          onClick={handleClick}
        />
      ));

      expect(getByText(/서울/)).not.toBeNull();
    });
  });

  context('when option is selected', () => {
    it('renders name of items with “(V)”', () => {
      const handleClick = jest.fn();

      const option = { id: 1, name: '서울' };
      const selected = { id: 1, name: '서울' };

      const { getByText } = render((
        <Option
          option={option}
          selected={selected}
          onClick={handleClick}
        />
      ));

      fireEvent.click(getByText(/서울/));

      expect(handleClick).toBeCalled();

      expect(getByText('서울(V)')).not.toBeNull();
    });
  });
});
