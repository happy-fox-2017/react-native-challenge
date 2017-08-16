import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import axios from 'axios';

export default class DetailScreen extends Component {
  static navigationOptions = {
    title: "Detail"
  }
  constructor() {
    super()
  }
  
  render() {
    const { navigate, goBack } = this.props.navigation;
    console.log(`ini detail ${this.props.navigation.state.params.data}`)
    let data = this.props.navigation.state.params.data
    return(
      <View style={styles.container}>
        <Text style={{fontSize:40}}>{data.name}</Text>
        <Text>{"Hair_color is : "+data.hair_color}</Text>
        <Text>{"Gender is : "+data.gender}</Text>
        <Text>{"height is : "+data.height}</Text>
        <Text>{"Skin Color is : "+data.skin_color}</Text>
        <Button onPress={() => goBack() } title="Go Back"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});