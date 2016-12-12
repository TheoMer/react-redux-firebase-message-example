import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './components/app';
import reducers from './redux/reducers';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  ,
  document.querySelector('#app-root')
);
