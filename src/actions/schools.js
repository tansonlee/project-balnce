import * as api from "../api/school";

export const getAllSchools = () => async dispatch => {
	try {
		const data = await api.fetchSchoolData();
		dispatch({ type: "SET_ALL", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createSchool = school => async dispatch => {
	try {
		await api.createSchool(school);
		const data = await api.fetchSchoolData();
		dispatch({ type: "SET_ALL", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteSchool = id => async dispatch => {
	await api.deleteSchool(id);
	const data = await api.fetchSchoolData();
	dispatch({ type: "SET_ALL", payload: data });
};

export const updateSchool = school => async dispatch => {
	try {
		await api.updateSchool(school);
		const data = await api.fetchSchoolData();
		dispatch({ type: "SET_ALL", payload: data });
	} catch (error) {
		console.log(error);
	}
};
