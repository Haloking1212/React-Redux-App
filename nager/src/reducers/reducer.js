import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
  } from '../actions';
  
  const initialState = {
    name: null,
    date: null,
    isFetching: false,
    error: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          date: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  