import React, { Component } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

class PeopleList extends Component {

  render() {
    return (
      <FlatList
       data={[
         { key: 'Devin' },
         { key: 'Jackson' },
         { key: 'James' },
         { key: 'Joel' },
         { key: 'John' },
         { key: 'Jillian' },
         { key: 'Jimmy' },
         { key: 'Julie' },
       ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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