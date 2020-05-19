import {SubmissionError} from 'redux-form';
const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms)); //'resolve' is called after 'ms' miliseconds

const submit = (values: any) => {
  return sleep(1000).then(() => {
    //Do "fake server" task for 1000 miliseconds
    //username must be:'rohan','rg','rohangoel'
    if (!['rohan', 'rg', 'rohangoel'].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login Failed',
      });
    } else if (values.email !== 'rohan@gmail.com') {
      throw new SubmissionError({
        email: 'Wrong Email',
        _error: 'Login Failed',
      });
    } else {
      alert(`Validation success. Values = ~${JSON.stringify(values)}`);
    }
  });
};
export default submit;
