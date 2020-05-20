import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
// import submit from './submit';
import validate from '../Validation/Validate';
import asyncValidate from '../Validation/asyncValidate';
import {CONTACT_FORM} from '../../formName';
import SubmitButton from '../../components/submitButton';
import normalizePhoneNumber from './normalizePhoneNumber';
// const validate = (values: any) => {
//     const errors = {};
//     if (!values.username) {
//       errors.username = 'Required';
//     } else if (values.username.length > 20) {
//       errors.username = 'username must be less than or equal 20 characters';
//     }
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
//     if (!values.age) {
//       errors.age = 'Required';
//     } else if (isNaN(Number(values.age))) {
//       //sNaN() function determines whether a value is an illegal number (Not-a-Number).
//       errors.age = 'Age must be a number';
//     } else if (Number(values.age) < 18) {
//       errors.age = 'You must be at least 18 years old';
//     }
//     return errors;
//   };

//Normalize = "Auto Correct Input"
const normalizeUpper = (value: any) => value && value.toUpperCase();
const normalizeLower = (value: any) => value && value.toLowerCase();

const warn = (values: any) => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'You seem a bit Young';
  }
  return warnings;
};

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
        placeholder="Enter Name(lowercase)"
        normalize={normalizeLower}
        // validate={[required, maxLength20]}
      />
      <Field
        component={renderField}
        keyboardType="default"
        label="Fullname:"
        name="fullname"
        placeholder="Full Name(uppercase)"
        normalize={normalizeUpper}
        // validate={[required, maxLength20]}
      />
      <Field
        component={renderField}
        keyboardType="email-address"
        label="Email:"
        name="email"
        placeholder="Enter Email"
        // validate={isValidEmail}
      />
      <Field
        component={renderField}
        keyboardType="numeric"
        label="Phone No:"
        name="phonenumber"
        placeholder="Your phone number"
        normalize={normalizePhoneNumber}
      />

      <Field
        name="age"
        keyboardType="numeric"
        label="Age:"
        component={renderField}
        placeholder="Enter Age"
        // validate={[required, number, minValue18]}
      />
      <SubmitButton />
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
  form: CONTACT_FORM, // a unique identifier for this form
  validate,
  asyncValidate,
  warn,
  onSubmit: onSubmit,
})(formComponent);

export default Form;
