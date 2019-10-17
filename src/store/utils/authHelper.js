import { setAuthUser } from '../modules/auth/actions';

export const initialiseStore = (dispatch) => {
  const token = localStorage.getItem('authToken');

  if (token) {
    dispatch(setAuthUser(token));
  }
};
