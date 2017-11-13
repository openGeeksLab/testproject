import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { width, height } from 'react-native-dimension';
import ImageSlider from 'react-native-image-slider';

const Slider = ({
  position,
  slides,
  onPositionChanged,
}) => (
  <View style={styles.mainView}>
  <View style={{ width: width(90) }}>
      <ImageSlider
        height={height(50)}
        images={slides}
        position={position}
        onPositionChanged={onPositionChanged}
      />
  </View>
  </View>
);

const styles = StyleSheet.create({
  mainView: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingBottom: 20 
  }
});

export default Slider;
