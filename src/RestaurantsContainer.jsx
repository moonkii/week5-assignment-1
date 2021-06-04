import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { region, category, restaurants } = useSelector((state) => ({
    region: state.region,
    category: state.category,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(loadRestaurants());
  }, [category, region]);

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.name}>
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
}
