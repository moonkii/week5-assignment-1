import React from 'react';

import Option from './Option';

export default function Options({ options, selected, onClick }) {
  return (
    <ul>
      {options.map((option) => (
        <li key={option.name}>
          <Option
            option={option}
            selected={selected}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
}
