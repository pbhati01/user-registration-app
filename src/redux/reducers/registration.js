import initialState from '../initialState';
import * as actionTypes from '../actions/types';

const registration = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADER: 
    case actionTypes.HIDE_LOADER: 
      return {...state, loader: action.loader };
    case actionTypes.UPDATE_COUNTRIES: 
      return {...state, countries: action.countries };
    default:
      return state;
  }
}

export default registration;
