import React from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addSearch,toggleTrack} from './playActions'
import { Searchbar } from 'react-native-paper';
import TrackItem from './TrackItem'
import {addQuary} from '../RecentSearches/RecentSearchesAction'
import {BottonButton} from '../Common/bottonButton'
import {TitlePage} from '../Common/title'
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  

  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    position: 'absolute', 
    bottom: 0, 
},

});
const Play = ({ navigation,playList, add ,toggle,addQ}) => {
  const [searchQuery, setSearchQuery] = React.useState('');


  const onChangeSearch = query => {
    setSearchQuery(query);
  }

  
  return(
  <View style={styles.MainContainer}>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      onSubmitEditing={() => {add(searchQuery)
        addQ(searchQuery)
      }}
      value={searchQuery}
    />
    <SafeAreaView style={styles.MainContainer}>
    
    {
    !playList.length ? <TitlePage title='No result'/>
      :<FlatList
      data={playList}
      keyExtractor={(playItem) => playItem.id}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => {
       
          toggle(item.id)
         
          }}>  
			<TrackItem track={item}  index={index}/>
    	</TouchableOpacity>
      )}
    />
        }
  
  <BottonButton   navigation={navigation} routeName='Play' />

  </SafeAreaView>
  </View>
    )
      };




function mapStateToProps(state) {
	console.log(state.quary.list)
	return {
		playList:state.search.list,
    listQuart:state.quary.list
	};
  }
  
  function mapDispatchToProps(dispatch) {
	return {
    add: (text) => dispatch(addSearch(text)),
    toggle: (id) => dispatch(toggleTrack(id)),
    addQ: (quary)=> dispatch(addQuary(quary))
	};
  }
  
  
  Play.propTypes = {
	playList: PropTypes.array,
	addSearch: PropTypes.func,
  toggleTrack:PropTypes.func, 
  addQuary:PropTypes.func, 
  };
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Play)