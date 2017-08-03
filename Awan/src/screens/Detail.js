import React, {Component} from 'react'
import {AppRegistry, StyleSheet} from 'react-native'
import {Text} from 'native-base'

class Detail extends Component {

  render () {
    return (
      <Text>Ini Detail</Text>
    )
  }

}

AppRegistry.registerComponent('Detail', () => Detail)
export default Detail
