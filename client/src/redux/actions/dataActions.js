import axios from 'axios';
import {SET_SCREAMS, LOADING_DATA, LIKE_SCREAM, UNLIKE_SCREAM} from '../types';

export const getScreams = ()=> async dispatch=>{
  try {
    dispatch({type: LOADING_DATA});
    const {data} = await axios.get('/screams')
    dispatch({
      type: SET_SCREAMS,
      payload: data
    })
  } catch (err) {
    console.log(err);
    dispatch({type: SET_SCREAMS, payload: []})
  } 
};

export const likeScream = (screamId) => async dispatch =>{
  try {
    const {data} = await axios.get(`/scream/${screamId}/like`);
    dispatch({type: LIKE_SCREAM, payload: data})
  } catch (err) {
    console.log(err)
  }
}


export const unlikeScream = (screamId) => async dispatch =>{
  try {
    const {data} = await axios.get(`/scream/${screamId}/unlike`);
    dispatch({type: UNLIKE_SCREAM, payload: data})
  } catch (err) {
    console.log(err)
  }
}
