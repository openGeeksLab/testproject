import React from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet
} from 'react-native';

import { width, height } from 'react-native-dimension';

const Grid = ({
  images
}) => (
  <View style={{ flex: 1 }}>
    <FlatList 
      data={images}
      numColumns={3}
      renderItem={({ index }) => {
        const isMiddleElement = (index - 1) % 3 === 0;
        return (
          <Image 
            style={[styles.img, {
              marginLeft: isMiddleElement ? 3 : 0,
              marginRight: isMiddleElement ? 3 : 0
            }]}
            source={{ uri: images[index] }}
          />
        );
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  img: {
    width: width(33),
    height: height(20),
    marginTop: 3,
  }
});

export default Grid;
