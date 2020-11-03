import axios from '../../../configs/axiosConfig';

//get Role
export const getRole = () => async dispatch => {
  const res = await axios.get('/role');
  if (res) {
    dispatch({ type: 'ROLE', payload: res.data });
  }
  // console.log(res)
  return res;
};
// //get packages
// export const getPackage = () => async (dispatch) => {
//    const res = await axios.get("/package");
//    if (res) {
//       dispatch({ type: "PACKAGE", payload: res.data });
//    }
//    return res;
//    //console.log("leadstatus",res)
// };
// //get packagesType
// export const getPackageType = () => async (dispatch) => {
//    const res = await axios.get("/packageType");
//    if (res) {
//       dispatch({ type: "PACKAGETYPE", payload: res.data });
//    }
//    return res;
//    //console.log("leadstatus",res)
// };
// //Get Racks
// export const getRack = () => async (dispatch) => {
//    const res = await axios.get("/rack");
//    if (res) {
//       dispatch({ type: "RACK", payload: res.data });
//    }
//    return res;
// };
// //get Companies
// export const getCompanies = () => async (dispatch) => {
//    const res = await axios.get("/companies");
//    if (res) {
//       dispatch({ type: "COMPANIES", payload: res.data });
//    }
//    // console.log(res)
//    return res;
// };
// //get payments
// export const getPayments = () => async (dispatch) => {
//    const res = await axios.get("/payment");
//    if (res) {
//       dispatch({ type: "PAYMENTS", payload: res.data });
//    }
//    // console.log(res)
//    return res;
// };
// //get customers
// export const getCustomers = () => async (dispatch) => {
//    const res = await axios.get("/customer");
//    if (res) {
//       dispatch({ type: "CUSTOMERS", payload: res.data });
//    }
//    // console.log(res)
//    return res;
// };
