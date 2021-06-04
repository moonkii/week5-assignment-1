import reducer from './reducer';

import {
  setRegions,
  setRegion,
  setCategories,
  setCategory,
  setRestaurants,
} from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  context('with existed action type', () => {
    describe('setRegions', () => {
      it('change regions array', () => {
        const initialState = {
          regions: [],
        };

        const state = reducer(initialState, setRegions(regions));

        expect(state.regions).not.toHaveLength(0);
      });
    });

    describe('setRegion', () => {
      it('change value of region', () => {
        const initialState = {
          region: {},
        };

        const state = reducer(initialState, setRegion({
          id: 1,
          name: '서울',
        }));

        expect(state.region.id).toBe(1);
        expect(state.region.name).toBe('서울');
      });
    });

    describe('setCategories', () => {
      it('change categories array', () => {
        const initialState = {
          categories: [],
        };

        const state = reducer(initialState, setCategories(categories));

        expect(state.categories).not.toHaveLength(0);
      });
    });

    describe('setCategory', () => {
      it('change value of category', () => {
        const initialState = {
          category: {},
        };

        const state = reducer(initialState, setCategory({
          id: 1,
          name: '한식',
        }));

        expect(state.category.id).toBe(1);
        expect(state.category.name).toBe('한식');
      });
    });

    describe('setRestaurants', () => {
      it('change restaurants array', () => {
        const initialState = {
          restaurants: [],
        };

        const state = reducer(initialState, setRestaurants(restaurants));

        expect(state.restaurants).not.toHaveLength(0);
      });
    });
  });

  context('without existed action type', () => {
    it('returns previous state', () => {
      const previousState = {
        region: {
          id: '',
          name: '',
        },
        category: {
          id: '',
          name: '',
        },
        regions: [],
        categories: [],
        restaurants: [],
      };

      const state = reducer();

      expect(state).toEqual(previousState);
    });
  });
});
