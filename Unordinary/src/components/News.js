import React from 'react'
import { WebView } from 'react-native'

export default class News extends React.Component {
  static navigationOptions = {
    title: 'Unordinary Reader'
  }

  render() {
    const { params } = this.props.navigation.state

    return (
      <WebView
        source={{uri: params.url}}
        style={{marginTop: 20}}
      />
    )
  }
}
