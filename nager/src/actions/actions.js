import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
// async action creator
export const getData = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get('https://date.nager.at/api/v2/PublicHolidays/2017/AT')
    .then(res => {
      console.log(res,"data")
      dispatch({ type: FETCH_SUCCESS, payload: res.data.value });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};
