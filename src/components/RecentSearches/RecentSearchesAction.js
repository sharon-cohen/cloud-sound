export const ADD_QUARY = 'ADD_QUARY ';
export const GET_QUARY= 'GET_QUARY';
export const addQuary = (quary) => ({
	type: ADD_QUARY,
	payload: {
		id : Date.now().toString(),
		quary:quary
	},
  });

  export const getQuary = () => ({
	type: ADD_QUARY,
  });