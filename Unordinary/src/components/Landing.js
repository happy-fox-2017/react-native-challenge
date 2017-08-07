import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

export default class Landing extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation
    console.log(this.props);

    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Main')}
          title="Get Started"
        />
      </View>
    )
  }
}
