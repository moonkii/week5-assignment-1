import React from 'react';

export default function Option({ option, selected, onClick }) {
  const { id, name } = option;

  function handleClick() {
    onClick({ id, name });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      {name}
      {name === selected.name && '(V)'}
    </button>
  );
}
