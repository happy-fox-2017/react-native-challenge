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

class ApiScreen extends Component {
  constructor(props){
    super (props)
    this.state = {
      gambar: '',
      answer: ''
    }
    this.Sentuh = this.Sentuh.bind(this)
  }
  Sentuh() {

  return fetch('https://yesno.wtf/api')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          gambar: responseJson.image,
          answer: responseJson.answer
        })
      })
      .catch((error) => {
        console.error(error);
      });
 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Please Input your question
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.Sentuh}
            title="Find Out"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <Image
          style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center', paddingLeft:50}}
          source={{uri: this.state.gambar}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 5,
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
