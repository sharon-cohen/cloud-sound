
import { ADD_SEARCH, GET_TOP_SEARCHES, TOGGLE_TRACK } from './playActions';

 const initialState = {
   list: [],
	
 };
 export const playReducer = (state = initialState, action) => {
	console.log(action.type)
	switch (action.type) {
	 case  ADD_SEARCH:
	var results=[]
	for(var i in action.payload.data)
    results.push({
		id:i,
		titleTrack:action.payload.data[i].title,
		avatar_url:action.payload.data[i].artwork_url,
		stream_url:action.payload.data[i].stream_url,
		playCount:action.payload.data[i].playback_count,
		name:action.payload.data[i].user.username,
		isOn:false
	});	
	
	 	
		
		return {
		 ...state,
		 list: results
	   };
	 case TOGGLE_TRACK:
		console.log('\n'.repeat('25'));
	 	console.log(action.payload)	
		const updatedList = state.list.map(listItem=>{
			const updatedListItem = {...listItem}
			if(updatedListItem.id === action.payload){
				updatedListItem.isOn = !updatedListItem.isOn
				return updatedListItem

			}
				updatedListItem.isOn=false
				return updatedListItem
		})
		
		return {
		  ...state,
		list: updatedList
		};
	 
		case  GET_TOP_SEARCHES:
			console.log("GET_TOP_SEARCHES")	
			console.log(state)
			
			
			return state
				
			  
	default:
	   return state;
   }
 };