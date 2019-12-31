import types from './types';

export const followInitialState = {
  followers: 0,
  follwing: 0,
};

export const followReducer = (state = followInitialState, action) => {
  switch (action.type) {
    case types.SET_METRICS:
      return {
        ...state,
        followers: action.payload.followers,
        follwing: action.payload.follwing,
      };

    default:
      return state;
  }
};
