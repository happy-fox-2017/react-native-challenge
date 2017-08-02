import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
  Modal
} from 'react-native';

class ApiScreen extends Component {
  constructor(props){
    super (props)
    this.state = {
      gambar: '',
      answer: '',
      question: ''
    }

    this.Sentuh = this.Sentuh.bind(this)
  }

  setModelVisible(visible){
    this.setState({
      modalVisible: visible
    })
  }
  
  Sentuh() {

  return fetch('https://yesno.wtf/api')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          gambar: responseJson.image,
          answer: responseJson.answer,
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
          Please Input your question.!!
        </Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={this.state.question}
      />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.Sentuh}
            title="Find Out"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={styles.picture}>
          <Text style={styles.titleText}>
            {this.state.answer}
          </Text>
          <Image
            style={{width: 400, height: 250}}
            source={{uri: this.state.gambar}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  picture: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
