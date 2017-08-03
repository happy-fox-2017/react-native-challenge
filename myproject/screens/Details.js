import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import PersonDetail from '../components/PersonDetail';

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }

  componentWillMount() {
    const url = this.props.navigation.state.params.detailsUrl;
    axios.get(url)
    .then((response) => {
      this.setState({
        person: response.data,
      });
    });
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
