import { StackNavigator } from 'react-navigation'

import Main from './Main'
import Landing from './Landing'
import News from './News'

const App = StackNavigator({
  Landing: { screen: Landing },
  Main: { screen: Main },
  News: { screen: News }
}, { headerMode: 'screen' })

export default App
