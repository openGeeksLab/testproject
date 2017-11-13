import fetchMock from 'fetch-mock';
import should from 'should';
import * as selectors from '../profile';

describe('selectors(profile)', () => {
  afterEach(() => fetchMock.restore());

  it('selectorSliderImages', () => { 
    const state = {
      profile: {
        sliderImages: [{
            objectId: 1,
            thumbnail: 'https'
          }]
      }
    };
    selectors.getImagesForSlider(state).should.eql([{ id: 1, thumbnail: 'https' }]);
  });

  it('selectorGridImages', () => {
    const state = {
      profile: {
        gridImages: [{
          objectId: 1,
          thumbnail: 'https',
        }],
        
      }
    };
    selectors.getImagesForGrid(state).should.eql([{ id: 1, thumbnail: 'https' }]);
  });
  
  describe('selectors(profileUserInfo)', () => {
    afterEach(() => fetchMock.restore());

    it('selectorUserBio', () => {
      const state = { profile: { bio: 'bio' } };
      selectors.getUserBio(state).should.eql('bio');
    });

    it('selectorUserImage', () => {
      const state = { profile: { profileImage: 'urlToImg' } };
      selectors.getUserProfileImage(state).should.eql('urlToImg');
    });

    it('seсtorUserName', () => {
      const state = { profile: { name: 'name' } };
      selectors.getUserName(state).should.eql('name');
    });
  });
});
