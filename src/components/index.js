import React, { Component } from 'react';
import InputRow from './InputRow';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from '../actions/profileActions';

class App extends Component {
  onChange = (value, fieldKey) => {
    const { actions } = this.props
		actions.changeValue(fieldKey, value);
	}

  onPress = (value, fieldKey) => {
		actions.save();
	}

  render() {
    const { firstName, lastName } = this.props

    return (
      <View>
        <InputRow
          placeholder="First Name"
          value={firstName}
          onChange={value => {this.onChange(value, 'firstName')}}
        />
        <InputRow
          placeholder="Last Name"
          value={lastName}
          onChange={value => {this.onChange(value, 'lastName')}}
        />
        <Button
          onPress={this.onPress}
          title="Save"
          color="#841584"
          accessibilityLabel="Save"
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
	return state.profile
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(profileActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
