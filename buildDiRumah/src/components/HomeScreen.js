import React, { Component } from 'react'
import {
  // StyleSheet,
  Text,
  View,
  StyleSheet
} from 'react-native'
import {
  Button,
  FormLabel,
  FormInput,
  SearchBar
} from 'react-native-elements';

export default class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      littleContent: ''
    }
  }

  // componentDidMount() {
  //   axios.get(`http://quotes.rest/qod.json`)
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({littleContent : response.data})
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.viewParent}>
        <Text style={styles.quoteText}>
        "Many of life's failures are experienced by people who did not realize how close they were to success when they gave up"{'\n'}
        <Text style={styles.authorText}>
        "Thomas Edison"
        </Text>
        </Text>

        <Button
        onPress={() => navigate('Quotes')}
        title='Get Quotes'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewParent: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  quoteText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 20,
    paddingTop: 100,
    textAlignVertical: 'center'
  },
  authorText: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 15,
  },
})
