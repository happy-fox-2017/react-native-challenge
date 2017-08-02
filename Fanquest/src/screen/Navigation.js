import {
  StackNavigator,
} from 'react-navigation';
import {
  AppRegistry
} from 'react-native';

import HomeScreen from '../components/HomeScreen'
import ApiScreen from '../components/ApiScreen'

 const Fanquest = StackNavigator({
  Home: { screen: HomeScreen },
  Api: { screen: ApiScreen },
});

AppRegistry.registerComponent('Fanquest', () => Fanquest);
