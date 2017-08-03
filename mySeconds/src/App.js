import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native'
import Answer from './components/Answer'
import Pokemon from './components/Pokemon'
import Yoda from './components/Yoda'


const MainScreenNavigator = TabNavigator({
  Answer: { screen: Answer },
  Pokemon: { screen: Pokemon },
  Yoda: { screen: Yoda }
});

AppRegistry.registerComponent('mySeconds', () => MainScreenNavigator);
