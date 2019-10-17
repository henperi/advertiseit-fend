import types from './types';

export const authInitialState = {
  isAuthenticated: false,
  user: null,
};

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...state.user,
          ...action.payload.user,
        },
      };

    default:
      return state;
  }
};
