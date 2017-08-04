import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { getPeople } from '../actions';

class PeopleList extends Component {

  componentWillMount() {
    this.props.getPeople();
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <FlatList
        data={this.props.people}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => this.props.detailsScreen(item.url)} underlayColor="white">
            <View>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  people: state.people,
});

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(getPeople()),
  detailsScreen: detailsUrl => dispatch(NavigationActions.navigate({ routeName: 'Details', params: { detailsUrl } })),
});


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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
