const reducer = (currentSchool = {}, action) => {
	switch (action.type) {
		case "CHANGE":
			return action.payload;
		case "RESET":
			return {};
		default:
			return currentSchool;
	}
};

export default reducer;
