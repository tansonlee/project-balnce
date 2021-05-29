import React from "react";
import "./SchoolsPage.css";
import { useSelector } from "react-redux";

import School from "./School/School";

import { Link } from "react-router-dom";

const SchoolsPage = () => {
	const schools = useSelector(state => state.schools);

	return (
		<div className="schoolspage-wrapper">
			<div className="new-school-button-wrapper">
				<Link to="/newschool" className="new-school-button">
					Add a New School
				</Link>
			</div>

			<div className="all-schools-wrapper">
				{schools.map(school => (
					<School {...school} key={school._id} />
				))}
			</div>
		</div>
	);
};

export default SchoolsPage;
