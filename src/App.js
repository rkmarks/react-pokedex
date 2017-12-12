import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PokeDex from './containers/PokeDex';

const AppRoot = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={PokeDex} />
    </Router>
  </Provider>
);

AppRoot.propTypes = {
  store: PropTypes.object.isRequired
};

export default AppRoot;
