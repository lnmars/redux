const createStore = require('redux').createStore;

function reducer(state, action) {
	let newState = state || 0;

	switch(action.type) {
		case "ADD":
			return newState + action.number;
		case "SUBTRACT":
			return newState - action.number;
		case "MULTIPLY":
			return newState * action.number;
		case "DIVIDE":
			return newState / action.number;
		case "CLEAR":
			return 0;
	}
	return newState;
}

const store = createStore(reducer);

store.subscribe( () => 
	console.log( store.getState() )
	);

store.dispatch({
	type: "ADD",
	number: 5
});

store.dispatch({
	type: "MULTIPLY",
	number: 6
});

store.dispatch({
	type: "CLEAR"
});

store.dispatch({
	type: "ADD",
	number: 20
});

store.dispatch({
	type: "MULTIPLY",
	number: 5
});

store.dispatch({
	type: "DIVIDE",
	number: 10
});

store.dispatch({
	type: "SUBTRACT",
	number: 3
});