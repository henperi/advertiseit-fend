import React from 'react';


import Routes from './routes';
import { Provider } from './store';


/**
 * @description Profile Application with the routes and store
 * @returns {JSX.Element} jsx
 */
const App = () => (
  <Provider>
    <Routes />
  </Provider>
);

export default App;
