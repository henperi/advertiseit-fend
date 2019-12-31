import React, { useEffect } from 'react';


import Routes from './routes';
import { Provider } from './store';
import { asyncHelper } from './store/utils/asyncHelper';
import { rootReducer, initialState } from './store/modules';
import { initialiseStore } from './store/utils/authHelper';
import { AppLoader } from './components/AppLoader';


/**
 * @description Profile Application with the routes and store
 * @returns {JSX.Element} jsx
 */
const App = () => {
  const [state, dispatchBase] = React.useReducer(rootReducer, initialState);
  const dispatch = React.useCallback(asyncHelper(dispatchBase, state), [dispatchBase]);

  useEffect(() => {
    initialiseStore(dispatch);
  }, [dispatch]);


  return (
    <Provider state={state} dispatch={dispatch}>
      {state.app.isReady ? <Routes /> : <AppLoader />}
    </Provider>
  );
};

export default App;
