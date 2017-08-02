/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry } from 'react-native';
 import { TabNavigator } from 'react-navigation';


 import HomeScreen from './src/screens/Homepage'
 import NewsScreen from './src/screens/NewsBerita'


 const App = TabNavigator({
   Home: {screen : HomeScreen},
   News: {screen : NewsScreen}
 })

AppRegistry.registerComponent('reactnative', () => App);
