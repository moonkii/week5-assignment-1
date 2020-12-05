import {
  setRegions,
  loadRegions,
  setRegion,
  setCategories,
  loadCategories,
  setCategory,
  setRestaurants,
  loadRestaurants,
} from './actions';

import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('./services/api');

async function dispatch(thunk, state) {
  const actions = [];

  const getState = () => state;

  await thunk((action) => actions.push(action), getState);

  return actions;
}

test('setRegions', () => {
  expect(setRegions(regions)).toEqual({
    type: 'setRegions',
    payload: {
      regions,
    },
  });
});

test('loadRegions', async () => {
  fetchRegions.mockResolvedValue(regions);

  const actions = await dispatch(loadRegions());

  expect(actions).toEqual([{
    type: 'setRegions',
    payload: {
      regions,
    },
  }]);
});

test('setRegion', () => {
  const id = 1;
  const name = '서울';

  expect(setRegion({ id, name })).toEqual({
    type: 'setRegion',
    payload: {
      id,
      name,
    },
  });
});

test('setCategories', () => {
  expect(setCategories(categories)).toEqual({
    type: 'setCategories',
    payload: {
      categories,
    },
  });
});

test('loadCategories', async () => {
  fetchCategories.mockResolvedValue(categories);

  const actions = await dispatch(loadCategories());

  expect(actions).toEqual([{
    type: 'setCategories',
    payload: {
      categories,
    },
  }]);
});

test('setCategory', () => {
  const id = 1;
  const name = '서울';

  expect(setCategory({ id, name })).toEqual({
    type: 'setCategory',
    payload: {
      id,
      name,
    },
  });
});

test('setRestaurants', () => {
  expect(setRestaurants(restaurants)).toEqual({
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  });
});

describe('loadRestaurants', () => {
  fetchRestaurants.mockResolvedValue(restaurants);

  context('with selected region and category', () => {
    it('dispatches setRestaurants', async () => {
      const state = {
        region: { name: '밀면넘어져요' },
        category: { id: 1 },
      };

      const actions = await dispatch(loadRestaurants(), state);

      expect(actions).toEqual([{
        type: 'setRestaurants',
        payload: {
          restaurants,
        },
      }]);
    });
  });

  context('without selected region and category', () => {
    it('dispatches setRestaurants', async () => {
      const state = {
        region: { name: '' },
        category: { id: '' },
      };
      const actions = await dispatch(loadRestaurants(), state);

      expect(actions).toEqual([{
        type: 'setRestaurants',
        payload: {
          restaurants: [],
        },
      }]);
    });
  });
});
