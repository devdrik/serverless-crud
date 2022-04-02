import axios from "axios";
// const API_URL = window.REACT_APP_APIURL +"/";
const API_URL = "https://plqfuss6d8.execute-api.eu-central-1.amazonaws.com/Prod";
// const URL = API_URL + "dummy";
const URL = API_URL

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'


axios.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
})

axios.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response, null, 2))
  return response
})


export const setAuthToken = (authToken) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;

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
  return axios.post(URL, dummy);
};
