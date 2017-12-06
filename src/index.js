import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store';
import './stylesheets/entry.scss';

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  application,
  document.getElementById('root')
);
