import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import App from './src/components/';

const store = configureStore();

export default class root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}