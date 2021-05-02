import React from 'react';
import { View, Text, FlatList, StyleSheet,SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {BottonButton} from '../Common/bottonButton'
import {TitlePage} from '../Common/title'
const styles = StyleSheet.create({

	listSection:{
		flex: 1,
		justifyContent: 'flex-start',
        alignItems: 'stretch'
		
	},
	text: {
		fontSize: 18,
	
	  },	
	  listItem: {
		
		borderColor: '#333',
		padding: 25,
	  }

  });
const LastSearch = ({ navigation, listQuary}) => {

	return(
	
	 <View style={styles.listSection}>

	
	  {
	  !listQuary.length ? <TitlePage title='No result'/>
		:
	<FlatList contentContainerStyle={{ flexGrow: 1,
			justifyContent: "center",
			}}
		data={listQuary}
		keyExtractor={(quaryItem) => quaryItem.id}
		renderItem={({ item, index }) => (
			<View style={styles.listItem}>
		<Text style={styles.text}>{index+1}. {item.quary}</Text>
		</View>
		)}
	  />
		  }
	 <BottonButton navigation={navigation} routeName='LastSearch' />

	 </View>

	  )
};

function mapStateToProps(state) {
	console.log(state.quary.list)
	return {
    listQuary:state.quary.list
	};
  }
  
  
  
  
  LastSearch.propTypes = {
	listQuary: PropTypes.array,
	
 
  };
  export default connect(
	mapStateToProps,
	
  )( LastSearch)