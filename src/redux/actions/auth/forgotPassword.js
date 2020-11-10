import axios from '../../../configs/axiosConfig';

//Create Add Lead
export const forgotPass = data => async dispatch => {
  let obj = {
    email: data.email,
  };

  const res = await axios.put('/forgotpassword', obj);
  console.log('Response', res);
  return res;
};
