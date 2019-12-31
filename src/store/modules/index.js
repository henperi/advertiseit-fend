import { authReducer, authInitialState } from './auth/reducer';
import { productsReducer, productsInitialState } from './products/reducer';
import { followReducer, followInitialState } from './follow/reducer';
import { appReducer, appInitialState } from './init/reducer';

export const initialState = {
  auth: authInitialState,
  products: productsInitialState,
  follow: followInitialState,
  app: appInitialState,
};

export const rootReducer = (state, action) => {
  const {
    app, auth, products, follow,
  } = state;

  return {
    app: appReducer(app, action),
    auth: authReducer(auth, action),
    products: productsReducer(products, action),
    follow: followReducer(follow, action),
  };
};
