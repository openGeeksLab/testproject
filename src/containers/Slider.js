import React from 'react';

import { connect } from 'react-redux';

import Slider from '../components/Slider';

import { getUserSliderImages } from '../actions/profile';
import { getImagesForSlider } from '../selectors/profile';

class SliderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
    };
  }

  componentDidMount() {
    this.props.getUserSliderImages(318381);
  } 

  render() {
    const slidesProps = this.props.slide;
         const slides = [];

    slidesProps.map((index) => (
      slides.push(index.thumbnail)
    ));

    return (
      <Slider
        position={this.state.position}
        slides={slides}
        onPositionChanged={position => this.setState({ position })}
      />
    );
  }
}


const mapStateToProps = state => ({
  slide: getImagesForSlider(state),
});

export default connect(mapStateToProps, { getUserSliderImages })(SliderContainer);

