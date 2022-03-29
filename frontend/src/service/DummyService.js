import axios from "axios";
// const API_URL = window.REACT_APP_APIURL +"/";
const API_URL = "https://d4af2fwaji.execute-api.eu-central-1.amazonaws.com/Prod/";
// const URL = API_URL + "dummy";
const URL = API_URL

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export const setAuthToken = (authToken) => {
  axios.defaults.headers.common['Authorization'] = authToken;

}

export const findAllDummies = () => {
  return axios.get(URL);
};

export const saveDummy = (dummy) => {
  return axios.post(URL, dummy);
};

export const deleteDummy = (dummy) => {
  return axios.delete(URL + "/" + dummy.id);
};

export const updateDummy = (dummy) => {
  return axios.put(URL, dummy);
};
