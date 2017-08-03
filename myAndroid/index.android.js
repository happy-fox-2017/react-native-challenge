import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  AppRegistry
} from 'react-native'

import store from './src/redux/stores'
import App from './src/App'

export default class myAndroid extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

})

AppRegistry.registerComponent('myAndroid', () => myAndroid);
