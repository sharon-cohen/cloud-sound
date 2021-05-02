import * as React from 'react';
import { Button,View,StyleSheet } from 'react-native';
const styles = StyleSheet.create({

	bottomView: {
	  width: '100%',
	  height: 50,
	  justifyContent: 'flex-end',
	  position: 'absolute', 
	  bottom: 0, 
  },
  
  });
 export const BottonButton = (props) => {
  const titleButton = props.routeName === 'LastSearch' ? 'Play' : 'Last search page';
  let onNavigation = () => props.navigation.navigate('LastSearch');
  if (props.routeName != 'Play') {
    onNavigation = () => props.navigation.goBack();
  }
  return (
	<View style={styles.bottomView}>
		<Button  onPress={onNavigation} title={titleButton} />
	</View>
  );
  

  
    

};
