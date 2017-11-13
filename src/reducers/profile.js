import { GET_USER_PROFILE, GET_SLIDER_IMAGES, GET_GRID_IMAGES } from '../actions/types';
import { initialState } from '../constants/config';

function userProfileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_PROFILE: {
      return { 
        ...state,
        ...action.data
      };
    }
    case GET_SLIDER_IMAGES: {
      return {
        ...state,
        sliderImages: action.data,
      };
    }
    case GET_GRID_IMAGES: {
      return {
        ...state,
        gridImages: action.data,
      };
    }
    default: {
      return state;
    }
  }
}

export default userProfileReducer;
