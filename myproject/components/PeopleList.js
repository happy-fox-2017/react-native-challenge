import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import axios from 'axios';

const SWAPI_URL = 'https://swapi.co/api/people';

class PeopleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentWillMount() {
    axios.get(SWAPI_URL)
    .then((response) => {
      console.log(response);
      this.setState({
        people: response.data.results,
      });
    });
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <FlatList
        data={this.state.people}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Details', { detailsUrl: item.url } )} underlayColor="white">
            <View>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default PeopleList;
