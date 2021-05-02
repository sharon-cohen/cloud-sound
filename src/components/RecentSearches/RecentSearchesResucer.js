import { ADD_QUARY,GET_QUARY } from './RecentSearchesAction';
const initialState = {
	list: [

	],
	 
  };
  
  export const quaryReducer = (state = initialState, action) => {
	switch (action.type) {
	  case ADD_QUARY:
		let listQuaryUp = []
		listQuaryUp.push(action.payload)
		const marge = listQuaryUp.concat(state.list); 
		
		if (marge.length == 6){
			marge.pop()
		}
		return { 
			...state, 
			list: marge
		};
		case GET_QUARY:
		return state;
		
	}
	
	return state;
  };