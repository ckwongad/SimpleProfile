import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class InputRow extends Component {
  render() {
    const { placeholder, value, onChange } = this.props

    return (
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              style={{height: 40}}
            />
          </View>
        </View>
    );
  }
}

InputRow.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};