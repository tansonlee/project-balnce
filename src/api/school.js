import axios from "axios";

// const URL = "http://localhost:5000/school";
const URL = "https://project-balnce.herokuapp.com/school";

export const fetchSchoolData = async () => {
	try {
		const { data } = await axios.get(`${URL}`);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

export const createSchool = async newSchool => {
	try {
		const { data } = await axios.post(URL, newSchool);
		return data.school;
	} catch (error) {
		console.log(error);
	}
};

export const deleteSchool = async id => {
	try {
		axios.delete(`${URL}/${id}`);
	} catch (error) {
		console.log(error);
	}
};

export const updateSchool = async school => {
	try {
		const { data } = await axios.patch(`${URL}`, school);
		return data.school;
	} catch (error) {
		console.log(error);
	}
};
