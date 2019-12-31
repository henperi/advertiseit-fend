import { setAuthUser } from '../modules/auth/actions';
import { initApp } from '../modules/init/actions';

export const initialiseStore = (dispatch) => {
  const token = localStorage.getItem('authToken');

  if (token) {
    dispatch(setAuthUser(token));
    dispatch(initApp());
  }
};
