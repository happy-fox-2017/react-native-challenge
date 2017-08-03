import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import AppNavigator from './config/router'

class Navigator extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.prop.nav
      })}/>
    )
  }
}

const mapStateToProps = (state) => {
  nav: state.nav
}

export default connect(mapStateToProps)(Navigator)
