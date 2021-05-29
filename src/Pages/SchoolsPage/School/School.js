import React from "react";
import "./School.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { changeCurrentSchool } from "../../../actions/currentSchool";

import { deleteSchool, getAllSchools } from "../../../actions/schools";

const School = school => {
	const dispatch = useDispatch();
	console.log(school);
	const { name, about, location, admissions, image, _id } = school;

	const handleDelete = () => {
		dispatch(deleteSchool(_id));
		dispatch(getAllSchools());
	};

	const formatLocation = location => {
		if (location.length > 40) {
			return location.substr(0, 55) + "...";
		}
		return location;
	};
	const formatAdmissions = admissions => {
		if (admissions.length > 40) {
			return admissions.substr(0, 50) + "...";
		}
		return admissions;
	};
	const formatAbout = about => {
		if (about.length > 140) {
			return about.substr(0, 140) + "...";
		}
		return about;
	};

	return (
		<div className="school-wrapper">
			{image && <img src={image} alt="school" />}
			<div>
				{name && <p className="name">{name}</p>}
				{location && <p className="location">Location: {formatLocation(location)}</p>}
				{admissions && (
					<p className="admissions">Admissions: {formatAdmissions(admissions)}</p>
				)}
				{about && <p className="about">{formatAbout(about)}</p>}
			</div>
			<div className="buttons">
				<Link
					to="/viewschool"
					className="small-button"
					onClick={() => {
						dispatch(changeCurrentSchool(school));
					}}
				>
					View
				</Link>
				<Link
					to="/updateschool"
					className="small-button"
					onClick={() => {
						dispatch(changeCurrentSchool(school));
					}}
				>
					Edit
				</Link>
				<button className="small-button" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default School;
