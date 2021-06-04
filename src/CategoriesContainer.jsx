import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Options from './Options';

import {
  loadCategories,
  setCategory,
} from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, category } = useSelector((state) => ({
    categories: state.categories,
    category: state.category,
  }));

  function handleClick({ id, name }) {
    dispatch(setCategory({ id, name }));
  }

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <Options
      options={categories}
      selected={category}
      onClick={handleClick}
    />
  );
}
