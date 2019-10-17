import { authReducer, authInitialState } from './auth/reducer';

export const initialState = {
  auth: authInitialState,
};

export const rootReducer = (state, action) => {
  const { auth } = state;

  return {
    auth: authReducer(auth, action),
  };
};
