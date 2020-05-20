import React from 'react';
import {connect} from 'react-redux';
import {submit} from 'redux-form';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CONTACT_FORM} from '../formName';
import {vw, vh} from '../constants/dimensions';
import colors from '../constants/colors';

const SubmitButton = ({dispatch}) => {
  return (
    <TouchableOpacity
      style={styles.submitButton}
      onPress={() => dispatch(submit(CONTACT_FORM))}
      activeOpacity={0.7}>
      <Text style={styles.submitText}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    alignItems: 'center',
    margin: vw(5),
    backgroundColor: colors.blue,
  },
  submitText: {
    color: colors.white,
    fontSize: vw(16),
    height: vw(37),
    width: vw(200),
    textAlign: 'center',
    padding: vw(10),
  },
});

export default connect()(SubmitButton);
