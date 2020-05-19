const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));
const asyncValidate = (values: any) => {
  return sleep(1000).then(() => {
    if (!['rohan', 'rg', 'rohangoel'].includes(values.username)) {
      throw {username: 'User does not exist'};
    }
  });
};
export default asyncValidate;
