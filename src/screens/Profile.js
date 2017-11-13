import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Platform
} from 'react-native';

import AboutUser from '../containers/AboutUser';
import Slide from '../containers/Slider';
import Grid from '../containers/Grid';


class ProfileScreen extends React.Component {
	render() {
		return (
			<ScrollView style={styles.mainView}>
        <View style={{ flex: 1 }}>
          <AboutUser />
        </View>
        <View style={{ flex: 1, paddingTop: 20 }}>
          <Slide />
        </View>
        <View style={{ flex: 1, paddingBottom: 20 }}>
          <Grid />
        </View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	mainView: {
		paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    flex: 1
	},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
});

export default ProfileScreen;
