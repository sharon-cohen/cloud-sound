import * as React from 'react';
import {Text,StyleSheet} from 'react-native';
const styles = StyleSheet.create({
	
	title: {
		fontSize: 18,
		textAlign: 'center', 
		fontWeight: 'bold',
		marginTop: 75,
	  },
  
  });
export const TitlePage = (props) => {
  return <Text style={styles.title}>{props.title}</Text>
};
