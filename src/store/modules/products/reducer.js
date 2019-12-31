import types from './types';

export const productsInitialState = [];

export const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return [...action.payload.products];

    default:
      return state;
  }
};
