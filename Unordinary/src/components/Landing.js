import React from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FF6600'
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#328FE6',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#32c5e6'
  },
  welcome: {
    fontSize: 20,
    padding: 10,
    color: 'white',
    alignSelf: 'center',
  },
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff'
  },
})

export default class Landing extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation
    console.log(this.props);

    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Welcome to Unordinary Reader!</Text>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={() => navigate('Main')}>
            <Text style={styles.label}>Get Started</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
