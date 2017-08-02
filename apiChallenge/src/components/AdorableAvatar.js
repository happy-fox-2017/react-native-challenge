import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

class AdorableAvatar extends React.Component {
  static navigationOptions = {
    title: 'Adorable Avatar',
  };
  constructor() {
      super()
      this.state =  {
        text: "",
        imgUrl: ""
      }
    }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to The Jungle
        </Text>
        <Text style={styles.instructions}>
          Please Input your Username to get your Avatar
        </Text>
        <TextInput style={{width: '80%'}}
        onChangeText={(text) => this.setState({text: text})}
        placeholder="Username"
        />
        {this.state.imgUrl !== "" ?
        <View>
          <Image style={{width: 150, height: 150, marginBottom: 10}} source={{uri: this.state.imgUrl}} />
          <Button
            onPress={() => this.getImageUrl()}
            title="Generate"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View> :
        <Button
          onPress={() => this.getImageUrl()}
          title="Generate"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={{marginBottom: 100}}
        /> }
      </View>
    );
  }

  getImageUrl() {
    this.setState({
      imgUrl: 'https://api.adorable.io/avatars/199/'+ this.state.text +'.png'
    })
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
});

export default AdorableAvatar
