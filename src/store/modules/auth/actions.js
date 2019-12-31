import JWT from 'jsonwebtoken';
import types from './types';
import httpService, { setAuthHeader, removeAuthHeader } from '../../../services/httpService';
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
 * @description method to remove the auth user
 * @returns {object} reducer action type
 */
export const removeAuthUser = () => {
  removeAuthHeader();

  return {
    type: types.REMOVE_AUTH_USER,
  };
};


/**
 * @description A thunk action to register a new customer
 * @typedef {{
 *  firstName: string,
 *  lastName: string,
 *  email: string,
 *  password: string,
 * }} SignupData
 * @param {SignupData} userData
 * @returns {Function} dispatch an action
 */
export const registerUser = (userData) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await httpService.post('/auth', userData);

    return dispatch(setAuthUser(data.token));
  } catch (error) {
    return console.log(error.response);
  }
};

/**
 * @description A thunk action to login a user
 * @typedef {{
 *  email: string,
 *  password: string,
 * }} LoginData
 * @param {LoginData} loginData
 * @returns {Function} dispatch an action
 */
export const loginUser = (loginData) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await httpService.post('/auth/login', loginData);

    return dispatch(setAuthUser(data.token));
  } catch (error) {
    return console.log(error.response);
  }
};

/**
 * @description A thunk action to login a use
 * @param {string} token token
 * @returns {Function} dispatch an action
 */
export const facebookAuth = (token) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await httpService.post('/auth/facebook', { access_token: token });

    return dispatch(setAuthUser(data.token));
  } catch (error) {
    return console.log(error.response);
  }
};
