import JWT from 'jsonwebtoken';
import types from './types';
import httpService, { setAuthHeader } from '../../../services/httpService';
/**
 * @description method to set the auth user
 * @param {object} token
 * @returns {object} reducer action type and payload
 */
export const setAuthUser = (token) => {
  const decodedToken = JWT.decode(token);
  setAuthHeader(token);

  return {
    type: types.SET_AUTH_USER,
    payload: {
      user: decodedToken,
    },
  };
};


/**
 * @description A thunk action to register a new customer
 * @param {{
 *  firstName: string,
 *  lastName: string,
 *  email: string,
 *  password: string,
 * }} userData
 * @returns {Function} dispatch an action
 */
export const registerUser = (userData) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await httpService.post('/auth', userData);

    return dispatch(setAuthUser(data.token));
  } catch (error) {
    console.log(error);
    return console.log(error.response);
  }
};
