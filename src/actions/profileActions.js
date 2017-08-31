import * as types from './actionTypes';
import firebase from '../lib/firebase';

export function changeValue(fieldKey, value) {
  return {
    type: types.INPUT_VALUE_CHANGE,
    fieldKey,
    value
  };
}

export function save() {
  return (dispatch, getState) => {
    const state = getState();

    firebase.database().ref('profiles/1').set(state.profile)
      .then(() => {
        Alert.alert('profile saved');
      })
      .catch(function(error) {
        if (error && error.message) Alert.alert(JSON.stringify(error.message));
      });
  };
}

export function fetchProfile() {
  return (dispatch, getState) => {
    return firebase.database().ref('profiles/1').once('value').then(function(snapshot) {
      dispatch(setProfile(snapshot.val()));
    }, error => {
      if (error && error.message) Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function setProfile(payload) {
  return {
    type: types.SET_PROFILE,
    payload
  };
}
