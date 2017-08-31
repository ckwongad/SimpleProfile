import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from '../actions/profileActions';

class SaveButton extends Component {
	_onPress = () => {
        const { actions } = this.props
        actions.save();
	};

  render() {
    return (
        <Button
          onPress={this._onPress}
          title="Save"
          color="#841584"
          accessibilityLabel="Save"
        />
    );
  }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(profileActions, dispatch)
	};
}

export default connect(null, mapDispatchToProps)(SaveButton);