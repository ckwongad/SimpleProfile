import React, { Component } from 'react';
import InputRow from './inputRow';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from '../actions/profileActions';

class ProfileForm extends Component {
  onChange = (value, fieldKey) => {
    this.props.changeValue(fieldKey, value);
	}

  onPress = () => {
    this.props.save();
	}

  componentDidMount = () => {
    this.props.fetchProfile();
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

ProfileForm.propTypes = {
  changeValue: React.PropTypes.func.isRequired,
  save: React.PropTypes.func.isRequired,
  fetchProfile: React.PropTypes.func.isRequired,
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  company: React.PropTypes.string,
  department: React.PropTypes.string,
  position: React.PropTypes.string,
  email: React.PropTypes.string
}

function mapStateToProps(state) {
	return state.profile
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(profileActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
