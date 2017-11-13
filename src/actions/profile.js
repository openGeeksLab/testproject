import api from '../utils/api';
import { GET_USER_PROFILE, GET_SLIDER_IMAGES, GET_GRID_IMAGES } from './types';

export const setUserProfile = response => ({ type: GET_USER_PROFILE, data: response });
export const getUserProfile = id => async (dispatch) => {
  const response = await api.post(`/classes/User/${id}`, { _method: 'GET' });
  dispatch(setUserProfile(response));
};

export const setUserSliderImages = response => ({ type: GET_SLIDER_IMAGES, data: response });
export const getUserSliderImages = id => async (dispatch) => {
  const data = {
    'isThumbnailsOnly': true,
    'limit': 5,
    'userId': 318381,
    _method: 'POST' 
  };
  const response = await api.post('/functions/feed/profile/load-batch', data);
  dispatch(setUserSliderImages(response.result.posts));
};

export const setUserGridImages = response => ({ type: GET_GRID_IMAGES, data: response });
export const getUserGridImages = () => async (dispatch) => {
  const data = {
    'isThumbnailsOnly': true,
    'limit': 18,
    _method: 'POST'
  };
  const response = await api.post('/functions/feed/popular/load-batch', data);

  dispatch(setUserGridImages(response.result.posts));
};
