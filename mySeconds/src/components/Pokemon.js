import React, { Component } from 'react';
import axios from 'axios'
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image
} from 'react-native';

import {
  Button,
  Input,
  Card
} from 'nachos-ui'


class Pokemon extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: null,
      search: '',
      animating: true
    }
    // this.getPokemon = this.getPokemon.bind(this)
    closeActivityIndicator = () => setTimeout(() => this.setState({ animating: false }), 6000)
  }

  getPokemon (search, loading) {
    console.log('hi', search);
    this.setState({
      image: loading
    })
    axios.get('https://api.pokemontcg.io/v1/cards?name=' + search)
      .then((response) => {
        console.log(response.data);
        this.setState({
          name: response.data.cards.name,
          image: response.data.cards.image,
        })
        console.log('image di state: ', this.state.image);
      })
      .catch((error) => {
        return {error: true, message: "Not found"}
      })
  }
  render () {
    const animating = this.state.animating
    return (
      <View style={styles.container}>
        <Text>
          Welcome TO POKEDEX!
        </Text>
        <Input
          style={{margin: 15}}
          placeholder='Search Pokemon By Name'
          value={this.state.search}
          onChangeText={search => this.setState({ search })}
        />
        {
          this.state.image === null ?
          <ActivityIndicator
              animating = {animating}
              color = 'blue'
              size = "large"
              style = {styles.activityIndicator}
           />
          :
          this.state.image === "loading" ?
          <ActivityIndicator
              animating = {animating}
              color = 'blue'
              size = "large"
              style = {styles.activityIndicator}
           /> :
          <ScrollView>
          {
            this.state.image.map((x, idx) => {
            console.log('jasil x', x);
            // return (
              // <Image key= {idx} style = {styles.item}
              //   source={{uri: x}}
              //   style={{height: 400}}
              // />
              // )
              <Text>Hi</Text>
            })
          }
          </ScrollView>

        }
        <Card
          source={{uri: 'https://images.pokemontcg.io/base5/4.png'}}
        />
        <Button
          onPress={() => {
            this.getPokemon(this.state.search, "loading")
          }}
        >
          Get Answer
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputStyle: { margin: 15 },
  item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})

export default Pokemon
