import React ,{useEffect}from 'react';
import { StyleSheet,View ,Text,Image} from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({

	card:{
		borderWidth:0,
		borderRadius:20,
		backgroundColor:'#e0e0e0'
	},
	topCard:{
		flexDirection:'row', 
		justifyContent:'space-between', 
		alignItems:'center'
	},
	time:{
		
		fontSize:38,
		color:'#fff'
	},
	notes: {
		flex:1,
		fontSize: 16,
		color:'black',
		textTransform:'capitalize',
		margin:5
	}
  });
const TrackItem = ({ track,index}) => {
	const [status, setStatus] = React.useState({});
	const video = React.useRef(null);
	useEffect(() => {
		
		track.isOn ? video.current.playAsync():video.current.pauseAsync()
			
		
	  }, [track]);
	

	return (
	<Card containerStyle={styles.card}>
	  <View style={styles.topCard}>
	  <Image style={{width:70, height:70}} source={{uri:track.avatar_url}} />
	  <Text style={styles.notes}>{track.titleTrack}</Text>
	  <Video
        ref={video}
        source={{
          uri: track.stream_url+'?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        isPlaying
		onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
		<Icon name={status.isPlaying ?  "pause" : "play"} size={30} color="#ff7700" />

	  </View>
		<Divider style={{ backgroundColor: '#ffff', marginVertical:5}} />
		<View style={{flexDirection:'row', justifyContent:'space-between'}}>
					<Text style={styles.notes}>{track.name}</Text>
					<Text style={styles.notes}>playCount: {track.playCount}</Text>
				</View>
	</Card>

  );
};

  
export default TrackItem;
 
 