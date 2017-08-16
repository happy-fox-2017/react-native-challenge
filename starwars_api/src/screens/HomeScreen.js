import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import axios from 'axios';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  }
  constructor() {
    super()
    this.state = {
      random_swapi: [],
      loading: false
    }
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> Welcome To Starwars API </Text>
        <Text>{`\n`}</Text>
        <Button
          onPress={() => this.testButton()}
          title="Get Random Your Starwars"
          color="#000000"
          accessibilityLabel="Learn more about this purple button"
        />
        <View>
          {
            this.state.loading ? <View><Text>{`\n\n`}</Text><Image style={{width: 150, height: 200}} source={{uri: 'http://1.bp.blogspot.com/-oY2YNtXaedA/UrGmMMnVXuI/AAAAAAAAiYs/euoGVh0p7PY/s1600/Star_Wars_Funny_gif__0357.GIF'}}/></View>: null
          }
        </View>
        <Text> {`\n`} </Text>
        <View>
            {
              (this.state.random_swapi.length < 1) ? 
                  null : 
                <View>
                  <Text>{`The name Is : ${this.state.random_swapi.name}`}</Text>
                  <Button color = "#e5e21b" onPress={() => navigate('Detail', {data: this.state.random_swapi})} title="Find Your Detail Starwars"/>
                </View>
            }
        </View>
        
      </View>
    );
  }
  
  testButton() {
    this.setState({loading: true})
    let random = Math.floor(Math.random() * (87 - 1) + 1)
    axios.get(`https://swapi.co/api/people/${random}`)
    .then(res => {
      this.setState({random_swapi: res.data, loading: false})
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    });
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

export default HomeScreen