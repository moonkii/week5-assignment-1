import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function setRegion({ id, name }) {
  return {
    type: 'setRegion',
    payload: {
      id,
      name,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function setCategory({ id, name }) {
  return {
    type: 'setCategory',
    payload: {
      id,
      name,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { region, category } = getState();

    if (region.name && category.id) {
      const restaurants = await fetchRestaurants({
        region: region.name,
        categoryId: category.id,
      });

      dispatch(setRestaurants(restaurants));
      return;
    }

    dispatch(setRestaurants([]));
  };
}
