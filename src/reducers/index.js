import { combineReducers } from "redux";

import schools from "./schools";
import currentSchool from "./currentSchool";

export default combineReducers({
	schools,
	currentSchool,
});
