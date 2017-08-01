import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';

export default class ApiScreen extends Component {
  constructor(){
    super ()
    this.state = {
      img: '',
      answer: ''
    }
  }

  }
  _onPress() {

  fetch('https://yesno.wtf/')
  .then(function(response) {
    Alert.alert(response);
  })

 }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Nugraha
        </Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://images.gr-assets.com/books/1347596568l/1861903.jpg'}}
        />
        <Text style={styles.instructions}>
          Or
        </Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'http://data.whicdn.com/images/152232618/superthumb.jpg'}}
        />

        <Text style={styles.instructions}>
          Click button below to find-up your answer
        </Text>
        <View style={styles.buttonContainer}>
          {/* <Button onPress={this._onPress} title="Helli" color="#FFFFFF" accessibilityLabel="Tap on Me"/> */}
          <Button
            onPress={this._onPress}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})


export default ApiScreen
