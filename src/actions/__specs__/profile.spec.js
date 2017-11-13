import fetchMock from 'fetch-mock';
import should from 'should';
// import api from '../../utils/api';
import * as actions from '../profile';
import * as types from '../types';
import rp from 'request-promise';
import { BASE_URL } from '../../constants/config';

describe('actions(Profile)', () => {
  afterEach(() => fetchMock.restore());

  it('setUserProfile', () => {
    const data = { bio: 'bio', id: 1 };
    actions.setUserProfile(data).should.eql({ type: types.GET_USER_PROFILE, data });
  });

  it('setUserSliderImages', () => {
    const data = { images: [] };
    actions.setUserSliderImages(data).should.eql({ type: types.GET_SLIDER_IMAGES, data });
  });

  it('setUserGridImages', () => {
    const data = { images: [] };
    actions.setUserGridImages(data).should.eql({ type: types.GET_GRID_IMAGES, data });
  });
});

  describe('Server(Profile)', () => {
    afterEach(() => fetchMock.restore());

    it('UserProfileServer', async () => {
    try {
      const data = {
        'isThumbnailsOnly': true,
        _method: 'GET' 
      };
      await rp({
        method: 'POST',
        uri: `${BASE_URL}/classes/User/318381`, 
        body: data,
        json: true
      });
    }
    catch (e) {
      throw('error', e);
    }
    });

    it('UserSliderImagesServer', async () => {
    try {
      const data = {
        'isThumbnailsOnly': true,
        'limit': 18,
        'userId': 318381,
        _method: 'POST' 
      };
      await rp({
        method: 'POST',
        uri: `${BASE_URL}/functions/feed/profile/load-batch`, 
        body: data,
        json: true
      });
    }
    catch (e) {
      throw('error', e);
    }
    });

    it('UserGridImagesServer', async () => {
    try {
      const data = {
        'isThumbnailsOnly': true,
        'limit': 18,
        'userId': 318381,
        _method: 'POST'
      };
      await rp({
        method: 'POST',
        uri: `${BASE_URL}/functions/feed/popular/load-batch`, 
        body: data,
        json: true
      });
    }
    catch (e) {
      throw('error', e);
    }
  });
});

