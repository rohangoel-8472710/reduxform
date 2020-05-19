import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
// import submit from './submit';
import validate from '../Validation/Validate';
import asyncValidate from '../Validation/asyncValidate';

const renderField = ({
  keyboardType,
  label,
  meta: {touched, error, warning, asyncValidating},
  input: {onChange, ...restInput},
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>{label}</Text>
        <TextInput
          style={styles.input}
          keyboardType={keyboardType}
          onChangeText={onChange}
          {...restInput}
          autoCapitalize="none"
          returnKeyType="next"
          placeholder={placeholder}
        />
      </View>
      {touched &&
        ((error && <Text style={{color: colors.red}}>{error}</Text>) ||
          (warning && <Text style={{color: colors.yellow}}>{warning}</Text>) ||
          (asyncValidating && (
            <Text style={{color: colors.darkGreen}}>Validating</Text>
          )))}
    </View>
  );
};

const onSubmit = (values: any) => {
  alert(`Validation success. Values = ~${JSON.stringify(values)}`);
};

const warn = (values: any) => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'You seem a bit young...';
  }
  return warnings;
};

const formComponent = (props: any) => {
  const {handleSubmit, submitting, reset} = props;
  console.log(`submitting = ${submitting}`);
  return (
    <View style={styles.parentView}>
      <Text style={styles.heading}>Sign Up</Text>
      <Field
        component={renderField}
        keyboardType="default"
        label="Username:"
        name="username"
        placeholder="Enter Name"
      />
      <Field
        component={renderField}
        keyboardType="email-address"
        label="Email:"
        name="email"
        placeholder="Enter Email"
      />
      <Field
        name="age"
        keyboardType="numeric"
        label="Age:"
        component={renderField}
        placeholder="Enter Age"
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}
        disabled={submitting}
        activeOpacity={0.7}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.clearButton}
        onPress={reset}
        disabled={submitting}
        activeOpacity={0.7}>
        <Text style={styles.clearText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const Form = reduxForm({
  form: 'Simple', // a unique identifier for this form
  validate,
  asyncValidate,
  warn,
})(formComponent);

export default Form;
