import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import Form from './src/containers/Form/Form';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form/>
      </Provider>
    );
  }
}
