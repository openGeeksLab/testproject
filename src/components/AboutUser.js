import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import { width } from 'react-native-dimension';

const AboutUser = ({
	profileImage,
	bio,
	name,
	show,
	onToggleText,
}) => {
	let showOrHide = '...read more';
				let text = '';
	  const source = { uri: profileImage };

	if (bio && bio.length > 50 && !show) {
		text = bio.substr(0, bio.length - bio.length + 60);
		showOrHide = '...read more';
	} else if (show) {
		text = bio;
		showOrHide = ' ...hide text';
	}
	return (
		<View>
			<View style={styles.mainview}>
			<View style={styles.imgView}>
				<Image
				style={styles.img}
				source={source}
				/>
			</View>
			<View style={styles.textview}>
				<Text>{name + '\n'}</Text>
				<View>
					<Text>{text}
						<Text 
						onPress={onToggleText}
						style={{ color: 'blue' }}
						>  {showOrHide}</Text>
					</Text>
				</View>
			</View>
			</View>
			<View style={styles.line}></View>
		</View>
	);
};

AboutUser.defaultProps = {
	name: ''
};

const styles = StyleSheet.create({
	mainview: { 
		flexDirection: 'row',	
	},
	imgView: {
		flex: 3,
		height: 150,
		paddingTop: 20,
		alignItems: 'center'
	},
	textview: {
		paddingTop: 20,
		flex: 5,
	},
	img: {
		height: 100, 
		width: 100, 
		borderRadius: 50,
	},
	line: {
		height: 2, 
		width: width(100), 
		backgroundColor: '#666666', 
		alignSelf: 'flex-end'
	}
});

export default AboutUser;
