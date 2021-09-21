import * as types from './types';
import * as api from '../../api';
import * as constants from '../../utils/constants';

export const updateCountries = (countries) => {
  return {
    type: types.UPDATE_COUNTRIES,
    countries
  };
}

// To be used on initial fetch of countries on any respective data required for the form
export const showLoader = () => {
  return {
    type: types.SHOW_LOADER,
    loader: {show: true}
  };
}

// To be used on initial fetch of countries on any respective data required for the form
export const hideLoader = () => {
  return {
    type: types.HIDE_LOADER,
    loader: {show: false}
  };
}

export const fetchCountries = (region) => {
  const requestUrl= 'https://restcountries.eu/rest/v2/region/' + region.toLowerCase();
  return (dispatch) => {
    api.fetchCountries(requestUrl)
      .then(async ({ status, data }) => {
        if (status === 200) {
          if (data.length > 0) {
            dispatch(updateCountries(data));
          } else {
            console.log('No Data Found');
            dispatch(updateCountries([]));
          }
        } else {
          console.log('Error');
        }
      })
      .catch((error) => {
        console.log('Error: ', error)
      });
  };
};

export const registerUser = (request) => {
  return (dispatch) => {
    api.registerUser(request)
      .then(async ({ status, data }) => {
        // setTimeout(() => {dispatch(hideLoader())}, 1000);
        if (status === 200) {
          if (data.length > 0) {
            // on succcess redirect to another page
          }
        } else {
          //error handling
        }
      })
      .catch((error) => {
        //error handling
      });
  };
};