import { useEffect } from "react";
import "./App.css";

import { useDispatch } from "react-redux";

import { getAllSchools } from "./actions/schools";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SchoolsPage from "./Pages/SchoolsPage/SchoolsPage";
import NewSchoolPage from "./Pages/NewSchoolPage/NewSchoolPage";
import UpdateSchoolPage from "./Pages/UpdateSchoolPage/UpdateSchoolPage";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllSchools());
	}, [dispatch]);

	return (
		<div className="app-wrapper">
			<div className="header">
				<h1>Project BALNCE</h1>
				<p>Made by Tanson Lee</p>
			</div>
			<Router>
				<div className="content-wrap">
					<Switch>
						<Route path="/" exact component={SchoolsPage} />
						<Route path="/newschool" component={NewSchoolPage} />
						<Route path="/updateschool" component={UpdateSchoolPage} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
