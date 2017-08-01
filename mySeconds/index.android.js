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
  Button,
  Animated,
  LayoutAnimation
} from 'react-native';

export default class mySeconds extends Component {
  constructor(props) {
    super(props)
    this.state = {question: '', answer: null, img: null, fadeAnim: new Animated.Value(0)}
  }
  // componentWillMount() {
  //   this.getAnswer()
  // }
  getAnswer() {
    return fetch('https://yesno.wtf/api')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('this is my response api: ', responseJson);
      this.setState({
        img: responseJson.image,
        answer: responseJson.answer
      })
      LayoutAnimation.spring();
      return responseJson
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    console.log('ini img: ', this.state.img);
    return (
      <View
        style={styles.container}
        style={styles.View}
      >
        <Text style={styles.welcome}>
          Welcome to mySeconds
        </Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Type Your Question Here.."
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          onPress={() => {
            this.getAnswer()
          }}
          title="Get Answer!"
        />
        {
          this.state.img === null ?
          <Image source={{uri: 'https://i.stack.imgur.com/h6viz.gif'}}/>
          // LayoutAnimation.spring();
          // null
          :
          <Image
            source={{uri: this.state.img}}
            style={{marginTop:50, marginLeft:35, width: 250, height: 250}}
          />

        }
        { this.state.img === null ? null
        :
          <Text
            style={{marginLeft: 30, padding:10, fontSize:22}}
          >
            The Answer Is: {this.state.answer}
          </Text>
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
    height: 40
  }
});

AppRegistry.registerComponent('mySeconds', () => mySeconds);
