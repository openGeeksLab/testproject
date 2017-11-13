import fetchMock from 'fetch-mock';
import should from 'should';
import userProfileReducer from '../profile';
import * as constants from '../../constants/config';

describe('reducer(profile)', () => {
  afterEach(() => fetchMock.restore());

  it('reducerGetUserProfile', () => {
    userProfileReducer(
      constants.initialState,
      constants.actionGetUserProfile
    ).should.eql(constants.GetUserProfile, constants.actionGetUserProfile);
  });

  it('reducerGetSliderImages', () => {
    userProfileReducer(
      constants.initialState, 
      constants.actionGetSliderImages
    ).should.eql(constants.GetSliderImages, constants.actionGetSliderImages);
  });

  it('reducerGetGridImages', () => {
    userProfileReducer(
      constants.initialState,
      constants.actionGetGridImages
    ).should.eql(constants.GetGridImages, constants.actionGetGridImages);
  });
});
