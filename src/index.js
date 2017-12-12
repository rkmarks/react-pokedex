import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './stores/configureStore';
import './styles/index.css';

const store = configureStore();

render(
  <MuiThemeProvider>
    <App store={store} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
