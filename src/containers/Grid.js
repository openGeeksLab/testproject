import React from 'react';

import { connect } from 'react-redux';

import Grid from '../components/Grid';

import { getUserGridImages } from '../actions/profile';
import { getImagesForGrid } from '../selectors/profile';

class GridContainer extends React.Component {
  componentWillMount() {
    this.props.getUserGridImages();
  }

  render() {
    const newimages = this.props.gridImages.map((index) => index.thumbnail);

    return (
      <Grid
        images={newimages}
      />
    );
  }
}

const mapStateToProps = state => ({
  gridImages: getImagesForGrid(state),
});

export default connect(mapStateToProps, { getUserGridImages })(GridContainer);
