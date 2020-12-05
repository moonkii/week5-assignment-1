const initialState = {
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

function reducer(state = initialState, action = {}) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setRegion') {
    const { id, name } = action.payload;

    return {
      ...state,
      region: {
        ...state.region,
        id,
        name,
      },
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setCategory') {
    const { id, name } = action.payload;

    return {
      ...state,
      category: {
        ...state.category,
        id,
        name,
      },
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  return state;
}

export default reducer;
