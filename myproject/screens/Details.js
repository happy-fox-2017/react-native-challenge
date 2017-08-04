import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PersonDetail from '../components/PersonDetail';
import { getPerson } from '../actions';

class Details extends Component {

  componentWillMount() {
    const url = this.props.navigation.state.params.detailsUrl;
    this.props.getPerson(url);
  }

  render() {
    return (
      <View>
        <PersonDetail person={this.props.person} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  person: state.person,
});

const mapDispatchToProps = dispatch => ({
  getPerson: url => dispatch(getPerson(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
