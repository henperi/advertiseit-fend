// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

import { initialState } from './modules';

export const GlobalStore = React.createContext(initialState);


export const Provider = ({ children, state, dispatch }) => (
  <GlobalStore.Provider value={{ state, dispatch }}>
    {children}
  </GlobalStore.Provider>
);

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
};


/**
 * @typedef {{
 *  dispatch: Function,
 *  state: typeof initialState
 * }} useGlobal
 */

/**
 * @returns {useGlobal} store
 */
export const useGlobalStore = () => React.useContext(GlobalStore);
