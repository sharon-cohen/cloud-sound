export const ADD_SEARCH = 'ADD_SEARCH';
export const TOGGLE_TRACK = 'TOGGLE_TRACK';
export const GET_TOP_SEARCHES = 'GET_TOP_SEARCHES'

export function addSearch(text) {
	return (dispatch) =>{
		return fetch('http://api.soundcloud.com/tracks.json?client_id='+ 'CW62xLA9h8wXrXC1WIaSX9OWA6novVIE' + '&q=' + text)
			  .then(r=>r.json())
			  .then(data=>dispatch({type:ADD_SEARCH, payload: {
				id: Date.now().toString(),
				quary:text,
				data
			  }
				
				
		  }))
		  .catch((err) => console.log(err))
		  }
  }


export const toggleTrack = (id) => ({
  type: TOGGLE_TRACK,
  payload: id,
});
export const getTopSearchers =()=>({
	type: GET_TOP_SEARCHES,
})