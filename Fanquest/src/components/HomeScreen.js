import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Modal,
  TouchableHighlight
} from 'react-native';

class HomeScreen extends Component {
  constructor(props){
    super (props)
    this.state = {
      gambar: '',
      answer: '',
      modalVisible: false
    }
    this.Sentuh = this.Sentuh.bind(this)
    this.setModalVisible = this.setModalVisible.bind(this)

  }

  setModalVisible(visible){
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
          answer: responseJson.answer
        })
      })
      .catch((error) => {
        console.error(error);
      });
 }

 componentWillMount(){
   console.log('inijalan');
   console.log(this.state.image);
 }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Did You Have Question??? Broo!!!
        </Text>
            {this.state.modalVisible ?
              <TouchableHighlight onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)
                  }}>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: 'https://images.gr-assets.com/books/1347596568l/1861903.jpg'}}
              />
              </TouchableHighlight>
              :
              <TouchableHighlight onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)
                  }}>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: 'http://data.whicdn.com/images/152232618/superthumb.jpg'}}
              />
              </TouchableHighlight>
            }
        <Text style={styles.instructions}>
          Click button below to find-up your answer
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigate('Api')}
            title="Find Out"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
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


export default HomeScreen
