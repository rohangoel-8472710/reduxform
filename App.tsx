import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import Navigator from './src/Navigator/Navigator';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
