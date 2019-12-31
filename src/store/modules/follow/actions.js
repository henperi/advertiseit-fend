import types from './types';
import httpService from '../../../services/httpService';
/**
 * @description method to set follow metrics in the store
 * @param {object} products
 * @returns {object} reducer action type and payload
 */
export const setFollowMetrics = ({ followers, follwing }) => ({
  type: types.SET_METRICS,
  payload: { followers, follwing },
});


/**
 * @description A thunk action to fetch follow metrics
 * @param {Function} dispatch
 * @returns {Promise<Function | void>} dispatch an action
 */
export const fetchFollowMetrics = async (dispatch) => {
  try {
    const {
      data: { data },
    } = await httpService.get('/follow');

    return dispatch(setFollowMetrics(data));
  } catch (error) {
    console.log(error);
    return console.log(error.response);
  }
};
