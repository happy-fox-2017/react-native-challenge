import React, { Component } from 'react'
import {
  // StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Button,
  FormLabel,
  FormInput,
  SearchBar
} from 'react-native-elements';

export default class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
        HomeScreen
        </Text>

        <SearchBar
          lightTheme
          round
          placeholder='Type Here...' />
        <Button
        onPress={() => navigate('Heroes')}
        title='BUTTON'
        />
      </View>
    )
  }
}
