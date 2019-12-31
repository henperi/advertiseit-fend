import types from './types';
import httpService from '../../../services/httpService';
/**
 * @description method to set products in the store
 * @param {object} products
 * @returns {object} reducer action type and payload
 */
export const setProducts = (products) => ({
  type: types.SET_PRODUCTS,
  payload: {
    products,
  },
});


/**
 * @description A thunk action to fetch products
 * @param {Function} dispatch
 * @returns {Promise<Function | void>} dispatch an action
 */
export const fetchProducts = async (dispatch) => {
  try {
    const {
      data: { data },
    } = await httpService.get('/product');

    return dispatch(setProducts(data.products));
  } catch (error) {
    console.log(error);
    return console.log(error.response);
  }
};
