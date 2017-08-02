import React  from 'react';
import { View, Text, Button, Image } from 'react-native';

const dayWalpaper = require('../images/bluesky.jpg')

class HomeScreen extends React.Component  {

  render(){
    return (
      <View>
        <Image source={dayWalpaper}></Image>
      </View>
    )
  }
}

export default HomeScreen;
