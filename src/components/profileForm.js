import React, { Component } from 'react';
import InputRow from './inputRow';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from '../actions/profileActions';

class ProfileForm extends Component {
  onChange = (value, fieldKey) => {
    const { actions } = this.props;
		actions.changeValue(fieldKey, value);
	}

  onPress = () => {
    const { actions } = this.props;
    //alert(this.props)
		actions.save();
	}

  componentDidMount = () => {
    this.props.actions.fetchProfile();
  }


  render() {
    const { firstName, lastName, company, department, position, email } = this.props

    return (
      <View style={{paddingTop: 30, paddingLeft: 10, paddingRight: 10}}>
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

        <InputRow
          placeholder="Company"
          value={company}
          onChange={value => {this.onChange(value, 'company')}}
        />
        <InputRow
          placeholder="Department"
          value={department}
          onChange={value => {this.onChange(value, 'department')}}
        />
        <InputRow
          placeholder="Position"
          value={position}
          onChange={value => {this.onChange(value, 'position')}}
        />
        
        <InputRow
          placeholder="Email"
          value={email}
          onChange={value => {this.onChange(value, 'email')}}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
