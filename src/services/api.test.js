import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './api';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';
import restaurants from '../../fixtures/restaurants';

function mockFetch(data) {
  window.fetch = jest.fn().mockResolvedValue({
    json: async () => data,
  });
}

test('fetchRegions', async () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  mockFetch(regions);

  expect(await fetchRegions()).toEqual(regions);
});

test('fetchCategories', async () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  mockFetch(categories);

  expect(await fetchCategories()).toEqual(categories);
});

test('fetchRestaurants', async () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  mockFetch(restaurants);

  const region = '서울';
  const categoryId = 1;

  expect(await fetchRestaurants({ region, categoryId })).toEqual(restaurants);
});
