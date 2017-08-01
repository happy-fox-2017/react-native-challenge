import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native'
import Answer from './components/Answer'
import Pokemon from './components/Pokemon'


const MainScreenNavigator = TabNavigator({
  Answer: { screen: Answer },
  Pokemon: { screen: Pokemon }
});

AppRegistry.registerComponent('mySeconds', () => MainScreenNavigator);
