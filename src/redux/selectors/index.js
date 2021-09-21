
export const getRegistration = state => state.registration;
export const getCountries = state => getRegistration(state).countries;
export const getLoader = state => getRegistration(state).loader;
export const getError = state => getRegistration(state).error;
