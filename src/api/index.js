import axios from 'axios';

// API call to fetch countries
export const fetchCountries = (url) => {
  return axios({
    method: 'get', 
    url,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
  });
};

// API call to regiter user information
export const registerUser = ({url, data}) => {
  return axios({
    method: 'post', 
    url,
    data,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
  });
};