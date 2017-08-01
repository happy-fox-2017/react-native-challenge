import {
  StackNavigator,
} from 'react-navigation';


import HomeScreen from '../components/Home'
import ApiScreen from '../components/ApiScreen'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Api: { screen: ApiScreen },
});

AppRegistry.registerComponent('App', () => App);
