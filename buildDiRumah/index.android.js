/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import Heroes from './src/components/Heroes'
import HomeScreen from './src/components/HomeScreen'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Quotes: { screen: Heroes }
}, {
  headerMode: 'none'
})

AppRegistry.registerComponent('cobaMacMini', () => App);
