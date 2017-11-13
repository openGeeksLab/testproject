import * as types from '../actions/types';

export const BASE_URL = 'http://api.pumpup.com/1';

export const DEFAULT_BODY = {
  _version: '5.0.5',
  _SessionToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
};

export const initialState = {
  userId: 318381,
  bio: '',
  sliderImages: [],
  gridImages: [],
};

export const GetUserProfile = {
  userId: 318381,
  bio: 'thisIsBio',
  sliderImages: [],
  gridImages: [],
};
export const actionGetUserProfile = {
  type: types.GET_USER_PROFILE,
  data: {
    bio: 'thisIsBio'
  }
};

export const GetSliderImages = {
  userId: 318381,
  bio: '',
  sliderImages: ['slideURL'],
  gridImages: [],
};
export const actionGetSliderImages = {
  type: types.GET_USER_PROFILE,
  data: {
    sliderImages: ['slideURL']
  }
};

export const GetGridImages = {
  userId: 318381,
  bio: '',
  sliderImages: [],
  gridImages: {
    gridImages: ['gridImage']
  },
};
export const actionGetGridImages = {
  type: types.GET_GRID_IMAGES,
  data: {
    gridImages: ['gridImage'],
  }
};
