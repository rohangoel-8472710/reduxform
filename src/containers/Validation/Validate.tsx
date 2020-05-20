const validate = (values: any) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 20) {
    errors.username = 'username must be less than or equal 20 characters';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    //sNaN() function determines whether a value is an illegal number (Not-a-Number).
    errors.age = 'Age must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'You must be at least 18 years old';
  }
  if (!values.phonenumber) {
    errors.phonenumber = 'Required';
  }
  if (!values.fullname) {
    errors.fullname = 'Required';
  }
  return errors;
};

export default validate;
