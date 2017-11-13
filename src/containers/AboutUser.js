import React from 'react';
import { connect } from 'react-redux';

import AboutUser from '../components/AboutUser';

import { getUserProfile } from '../actions/profile';
import { getUserBio, getUserProfileImage, getUserName } from '../selectors/profile';

class AboutUserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.props.getUserProfile(318381);
  }

  render() {
    return (
      <AboutUser
        profileImage={this.props.profileImage}
        bio={this.props.bio}
        name={this.props.name}
        show={this.state.show}
        onToggleText={() => this.setState({ show: !this.state.show })}
      />
    );
  }
}

const mapStateToProps = state => ({
  bio: getUserBio(state),
  profileImage: getUserProfileImage(state),
  name: getUserName(state),
});

export default connect(mapStateToProps, { getUserProfile })(AboutUserContainer);
