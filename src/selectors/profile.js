import { createSelector } from 'reselect';

export const getUserBio = state => state.profile.bio;
export const getUserProfileImage = state => state.profile.profileImage;
export const getUserName = state => state.profile.name;

const getUserSliderImages = state => state.profile.sliderImages;
export const getImagesForSlider = createSelector(
  getUserSliderImages,
  images => images.map(({ objectId: id, thumbnail }) => ({ id, thumbnail }))
);

const getGridImages = state => state.profile.gridImages;
export const getImagesForGrid = createSelector(
  getGridImages,
  images => images.map(({ objectId: id, thumbnail }) => ({ id, thumbnail }))
);
