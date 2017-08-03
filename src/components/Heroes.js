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
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=game+of+thrones+:keyes&key=AIzaSyAdHo_ZVWJ9C39NyFP_atDrkgDndFTo-JQ`)
      .then(response => {
        console.log(response.data);
        this.setState({littleContent : response.data.items})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <View>
        <List containerStyle={{marginBottom: 20}}>
        { (this.state.littleContent === '') ? <Text>''</Text> :
          this.state.littleContent.map((l, i) => (
            <ListItem
              key={i}
              title={l.volumeInfo.title}
            />
          ))
        }
        </List>
      </View>
    )
  }
}
