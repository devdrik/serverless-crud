import axios from "axios";
const API_URL = window.REACT_APP_APIURL +"/";
const URL = API_URL + "dummy";

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
