export const changeCurrentSchool = school => dispatch => {
	dispatch({ type: "CHANGE", payload: school });
};

export const resetCurrentSchool = () => dispatch => {
	dispatch({ type: "RESET" });
};
