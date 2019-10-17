// @ts-nocheck
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { rootReducer, initialState } from './modules';
import { asyncHelper } from './utils/asyncHelper';
import { initialiseStore } from './utils/authHelper';


export const GlobalStore = React.createContext({});


export const Provider = ({ children }) => {
  const [state, dispatchBase] = React.useReducer(rootReducer, initialState);
  const dispatch = React.useCallback(asyncHelper(dispatchBase, state), []);

  useEffect(() => {
    initialiseStore(dispatch);
  }, [dispatch]);

  return (
    <GlobalStore.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStore.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
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
