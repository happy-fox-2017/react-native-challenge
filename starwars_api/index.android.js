/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen'

const navigator = StackNavigator({
  Home: {screen: HomeScreen},
  Detail: {screen: DetailScreen}
},{
  headerMode: "none"
})

AppRegistry.registerComponent('starwars_api', () => navigator);
