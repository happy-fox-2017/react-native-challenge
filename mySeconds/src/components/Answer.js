/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Animated,
  LayoutAnimation,
  Easing,
  ActivityIndicator,
  Modal,
} from 'react-native';

import {
  Card,
  Button
} from 'nachos-ui'

import { withConnection, connectionShape } from 'react-native-connection-info';


export default class mySeconds extends Component {
  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0)
    this.state = {text: '', answer: null, img: null, animating: true, modalVisible: false}
  }
  closeActivityIndicator = () => setTimeout(() => this.setState({ animating: false }), 6000)

  getAnswer(loading) {
    this.setState({img: loading})
    return fetch('https://yesno.wtf/api')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('this is my response api: ', responseJson);
      this.setState({
        img: responseJson.image,
        answer: 'the lord said....'+responseJson.answer
      })
      LayoutAnimation.spring();
      return responseJson
    })
    .catch((error) => {
      console.log(error);
    })
  }

  getHydra(visible) {
    if (visible !== true) {
      this.setState({text: '', img: null, answer: null})
    }
    this.setState({modalVisible: visible})
  }

  render() {
    const animating = this.state.animating

    return (
      <View
        style={styles.container}
        style={styles.View}
      >
        <Text style={styles.welcome}>
          ASK the Lord Anything....
        </Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Type Your Question Here.."
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text
          style={{marginLeft: 30, padding:10, fontSize:15}}
        >
          Your Question is {this.state.text}
        </Text>

        {
          this.state.img === null ?
          null
          :
          this.state.img === "loading" ?
          <ActivityIndicator
              animating = {animating}
              color = 'blue'
              size = "large"
              style = {styles.activityIndicator}
           />

          :

          <Card style={styles.okLord}
            footerContent={this.state.answer}

            image={this.state.img}
            style={{margin: 15, height: 120, width: 280, borderRadius: 5}}
          />

        }

        {/* {
          this.state.answer === null ?
          null :
          <Text
            style={{marginLeft: 30, padding:10, fontSize:15}}
          >
            the lord said.... {this.state.answer}
          </Text>
        } */}

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hail Lord Magic Shell</Text>
            <Card
              image='http://i.imgur.com/y04Bu1o.gif'
              style={{height: '80%'}}
            />
            <Button onPress={() => {
              this.getHydra(!this.state.modalVisible)
            }}>
              {/* <Text>Hide Modal</Text> */}
              HAIL HYRDRA!
            </Button>
          </View>
         </View>
        </Modal>
        {
          this.state.img === null ?
          <Button
            onPress={() => {
              this.getAnswer("loading", "text")
            }}
          >
            Ask The Lord!
          </Button>
          :
          this.state.img === "loading" ?
          null :
          <Button onPress={() => this.getHydra(true)}>OK LORD!</Button>
        }

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
  View: {
    padding: 20,
  },
  TextInput: {
    height: 40,
    fontSize: 15
  },
  cardStyle: {
  },
  okLord: {
    justifyContent: 'flex-end',
    backgroundColor: 'yellow',
  }
});

AppRegistry.registerComponent('mySeconds', () => mySeconds);
