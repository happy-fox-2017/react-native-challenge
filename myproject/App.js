import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import MainScreen from './screens/Main';
import DetailsScreen from './screens/Details';
// import PeopleList from './components/PeopleList';



// class AppX extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <PeopleList />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App2 = StackNavigator({
  Main: { screen: MainScreen },
  Details: { screen: DetailsScreen },
});

export default App2;

