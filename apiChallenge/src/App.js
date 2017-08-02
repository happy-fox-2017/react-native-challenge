import { TabNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native'

import AdorableAvatar from './components/AdorableAvatar'
import chatWithSidik from './components/chatWithSidik'

const apiChallenge = TabNavigator({
  Chat: { screen: chatWithSidik },
  Home: { screen: AdorableAvatar },
});

AppRegistry.registerComponent('apiChallenge', () => apiChallenge);
