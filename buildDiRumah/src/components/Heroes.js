import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { List, ListItem } from 'react-native-elements'
import axios from 'axios'

export default class Heroes extends Component {
  constructor() {
    super()
    this.state = {
      littleContent: ''
    }
  }

  componentDidMount() {
    axios.get(`https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10`, {
      headers: {
        "X-Mashape-Key": "wFxKaDqES8mshupXO1jC3ymRVwk0p1qbFjdjsnGxHqSt12Vkje"
      }
    })
      .then(response => {
        console.log(response.data);
        this.setState({littleContent : response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    console.log(this.props.navigation.params);
    return (
      <View>
        <List containerStyle={{marginBottom: 20}}>
        { (this.state.littleContent === '') ? <Text /> :
          this.state.littleContent.map((l, i) => (
            <ListItem
              key={i}
              title={l.quote}
              titleNumberOfLines={2}
              subtitle={l.author}
            />
          ))
        }
        </List>
      </View>
    )
  }
}
