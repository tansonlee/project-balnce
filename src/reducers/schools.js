const reducer = (schools = [], action) => {
	switch (action.type) {
		case "SET_ALL":
			return action.payload;

		default:
			return schools;
	}
};

export default reducer;
