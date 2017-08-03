import {AppRegistry} from 'react-native'
import {StackNavigator} from 'react-navigation'

import Home from './screens/Home'
import Detail from './screens/Detail'

const Awan = StackNavigator({
  HomeScreen: {screen: Home},
  DetailScreen: {screen: Detail}
}, {
  headerMode: 'none'
})

AppRegistry.registerComponent('Awan', () => Awan)
