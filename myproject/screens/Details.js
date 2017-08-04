import React, { Component } from 'react';
import { View } from 'react-native';
import PersonDetail from '../components/PersonDetail';
import store from '../stores';
import { getPerson } from '../actions';

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
    store.subscribe(this.updatePerson);
  }

  componentWillMount() {
    const url = this.props.navigation.state.params.detailsUrl;
    store.dispatch(getPerson(url));
  }

  updatePerson = () => {
    const { person } = store.getState();
    this.setState({ person });
  }

  render() {
    return (
      <View>
        <PersonDetail person={this.state.person} />
      </View>
    );
  }
}

export default Details;
