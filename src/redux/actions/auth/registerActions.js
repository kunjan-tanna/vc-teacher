import axios from '../../../configs/axiosConfig';

//Create Add User
export const RegUsers = data => async dispatch => {
  const bodyFormData = new FormData();
  bodyFormData.append('firstName', data.firstName);
  bodyFormData.append('lastName', data.lastName);
  bodyFormData.append('email', data.email);
  bodyFormData.append('password', data.password);
  bodyFormData.append('address', data.address);
  bodyFormData.append('roleId', data.roleId);
  bodyFormData.append('mobile', data.mobile);
  bodyFormData.append('avtar', data.avtar);
  // bodyFormData.append('status',data.status)
  const res = await axios.post('create/users', bodyFormData);
  console.log('ADD USER=======', res);
  return res;
};
